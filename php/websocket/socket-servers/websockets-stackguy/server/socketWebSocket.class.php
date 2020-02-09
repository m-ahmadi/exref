<?php
/**
 * WebSocket extension class of phpWebSockets
 *
 * @author Moritz Wutz <moritzwutz@gmail.com>
 * @version 0.1
 * @package phpWebSockets
 */

class socketWebSocket extends socket
{
	private $clients = array();
	private $handshakes = array();
	private $users = array();
	
	//variables added by me
	private $counter = 0;
	private $lastTime = 0;

	public function __construct()
	{
		parent::__construct();

		$this->run();
	}

	/**
	 * Runs the while loop, wait for connections and handle them
	 */
	private function run()
	{
		while(true)
		{
			$this->i++;
			# because socket_select gets the sockets it should watch from $changed_sockets
			# and writes the changed sockets to that array we have to copy the allsocket array
			# to keep our connected sockets list
			$changed_sockets = $this->allsockets;

			# blocks execution until data is received from any socket
			//wait 1ms(1000us) - should theoretically put less pressure on the cpu
			$num_sockets = socket_select($changed_sockets,$write=NULL,$exceptions=NULL,0,1000);

			# foreach changed socket...
			foreach( $changed_sockets as $socket )
			{
				# master socket changed means there is a new socket request
				if( $socket==$this->master )
				{
					# if accepting new socket fails
					if( ($client=socket_accept($this->master)) < 0 )
					{
						$this->console('socket_accept() failed: reason: ' . socket_strerror(socket_last_error($client)));
						continue;
					}
					# if it is successful push the client to the allsockets array
					else
					{
						$this->allsockets[] = $client;

						# using array key from allsockets array, is that ok?
						# i want to avoid the often array_search calls
						$socket_index = array_search($client,$this->allsockets);
						$this->clients[$socket_index] = new stdClass;
						$this->clients[$socket_index]->socket_id = $client;

						$this->console($client . ' CONNECTED!');
					}
				}
				# client socket has sent data
				else
				{
					$socket_index = array_search($socket,$this->allsockets);
					$user = $this->users[$socket_index];

					# the client status changed, but theres no data ---> disconnect
					$bytes = @socket_recv($socket,$buffer,2048,0);
					if( $bytes === 0 )
					{
						$this->disconnected($socket);
					}
					# there is data to be read
					else
					{
						# this is a new connection, no handshake yet
						if( !isset($this->handshakes[$socket_index]) )
						{
							$this->do_handshake($buffer,$socket,$socket_index);
						}
						# handshake already done, read data
						else
						{
							$action = $this->unmask($buffer);
							if($action=='')
							{	
								$this->disconnected($socket);
								continue;
							}
							
							//that was some hack I forgot to properly comment and I dont know what it does
							if($action==chr(3).chr(233))
							{	
								$this->disconnected($socket);
								continue;
							}
							
							if(($pos=strpos($action,'login'))===0 && $user=='')
							{
								$name = substr($action,$pos+7);
								$this->users[$socket_index] = $name;
								$this->console('Loged in as: '.$name);
							}
							else if($action=="ping")
							{
								$output = array();
								$output['ping'] = true;
								$this->send($socket, json_encode($output));
							}
							else
							{	
								$skipSockets = array($this->master,$socket);
								$them = array_diff($this->allsockets,$skipSockets);
								$output = array();
								$output['message'] = $user.': '.$action;
								foreach($them as $sock)
								{
									$this->send($sock,json_encode($output));
								}
							}

						}
					}
				}
			}
			
			$timeDiff =  (microtime(true) - $this->lastTime)*1000;
			//server messages
			if($timeDiff>1000)//send messages out every 1000 ms
			{
				$output = array();
				$this->lastTime = microtime(true);
				$output['message'] = "Server Message".$this->i;
				$output['users'] = $this->users;
				$destinSockets = array_diff($this->allsockets,array($this->master));
				foreach($destinSockets as $sock)
				{
					$this->send($sock, json_encode($output));
				}
			}
			//$this->console("".$i);
			//sleep(2);
			/*if($num_sockets===0)
			{
				$them = array_diff($this->allsockets,array($this->master));
				$temp = implode('<br />', $this->users);
				foreach($them as $sock)
				{
					$this->send($sock,'/setUsers'.$temp);
				}
			}*/
			
		}
	}

	/**
	 * Manage the handshake procedure
	 *
	 * @param string $buffer The received stream to init the handshake
	 * @param socket $socket The socket from which the data came
	 * @param int $socket_index The socket index in the allsockets array
	 */
	private function do_handshake($buffer,$socket,$socket_index)
	{
		list($resource,$host,$origin,$key) = $this->getheaders($buffer);
	
		
		$retkey = base64_encode(sha1($key."258EAFA5-E914-47DA-95CA-C5AB0DC85B11",true));

		$upgrade  = "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: {$retkey}\r\n\r\n";

		$this->handshakes[$socket_index] = true;

		socket_write($socket,$upgrade,strlen($upgrade));

		$this->console("Done handshaking...\n");
	}

	/**
	 * Extends the socket class send method to send WebSocket messages
	 *
	 * @param socket $client The socket to which we send data
	 * @param string $msg  The message we send
	 */
	protected function send($client,$msg)
	{
		$msg = $this->encode($msg);

		parent::send($client,$msg);
	}

	/**
	 * Disconnects a socket an delete all related data
	 *
	 * @param socket $socket The socket to disconnect
	 */
	private function disconnected($socket)
	{
		$index = array_search($socket, $this->allsockets);
		if( $index >= 0 )
		{
			unset($this->allsockets[$index]);
			unset($this->clients[$index]);
			unset($this->handshakes[$index]);
			unset($this->users[$index]);
		}

		socket_close($socket);
		$this->console($socket." disconnected!");
	}

	/**
	 * Parse the handshake header from the client
	 *
	 * @param string $req
	 * @return array resource,host,origin
	 */
	private function getheaders($req)
	{
		$req  = substr($req,4); /* RegEx kill babies */
		$res  = substr($req,0,strpos($req," HTTP"));
		$req  = substr($req,strpos($req,"Host:")+6);
		$host = substr($req,0,strpos($req,"\r\n"));
		$req  = substr($req,strpos($req,"Sec-WebSocket-Key: ")+19);
		$key  = trim(substr($req,0,strpos($req,"\r\n")));
		$req  = substr($req,strpos($req,"Origin:")+8);
		$ori  = substr($req,0,strpos($req,"\r\n"));

		return array($res,$host,$ori,$key);
	}
	
	private function unmask($payload) 
	{
		$length = ord($payload[1]) & 127;
	 
		if($length == 126) {
			$masks = substr($payload, 4, 4);
			$data = substr($payload, 8);
			$len = (ord($payload[2]) << 8) + ord($payload[3]);
		}
		elseif($length == 127) {
			$masks = substr($payload, 10, 4);
			$data = substr($payload, 14);
			$len = (ord($payload[2]) << 56) + (ord($payload[3]) << 48) + (ord($payload[4]) << 40) + (ord($payload[5]) << 32) + (ord($payload[6]) << 24) + (ord($payload[7]) << 16) + (ord($payload[8]) << 8) + ord($payload[9]);
		}
		else {
			$masks = substr($payload, 2, 4);
			$data = substr($payload, 6);
			$len = $length;
		}
	 
		$text = '';
		for ($i = 0; $i < $len; ++$i) {
			$text .= $data[$i] ^ $masks[$i%4];
		}
		return $text;
	}
	
	/**
	 * Encode a text for sending to clients via ws://
	 * @param $text
	 */
	private function encode($text) {
		// 0x1 text frame (FIN + opcode)
		$b1 = 0x80 | (0x1 & 0x0f);
		$length = strlen($text);
		
		if($length <= 125)
			$header = pack('CC', $b1, $length);
		elseif($length > 125 && $length < 65536)
			$header = pack('CCS', $b1, 126, $length);
		elseif($length >= 65536)
			$header = pack('CCN', $b1, 127, $length);
	 
		return $header.$text;
	}

	/**
	 * Extends the parent console method.
	 * For now we just set another type.
	 *
	 * @param string $msg
	 * @param string $type
	 */
	protected function console($msg,$type='WebSocket')
	{
		parent::console($msg,$type);
	}
}

?>