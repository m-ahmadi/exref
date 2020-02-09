<?php
defined('KEY_SUFFIX') ? null : define('KEY_SUFFIX', "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
$host = 'localhost';
$port = 9090;

$null = null; // for passing by reference

error_reporting(E_ALL);
set_time_limit(0);
ob_implicit_flush();

$master_socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
socket_bind($master_socket, $host, $port);
socket_listen($master_socket);

$clients = [$master_socket];

console("Listening : $host:$port");

while (true) {
	
	$watched_clients = $clients;
	socket_select($watched_clients, $null, $null, 0, 10); // args1,2,3 passed by reference
	
	if ( in_array($master_socket, $watched_clients) ) {
		$new_client = socket_accept($master_socket);
		$clients[] = $new_client;
		
		socket_getpeername($new_client, $client_ip, $client_port);
		
		$received_text = socket_read($new_client, 1024);
		
		$type = typeof($received_text);
		if ($type === 'WebSocket Request') {
			handshake($received_text, $new_client);
			$message = "New WebSocket Client: $client_ip:$client_port";
			console($message);
			send_message($message);
			
		} else if ($type === 'Normal Request') {
			console("New Normal Client: $client_ip:$client_port");
		}
		
		$found_socket = array_search($master_socket, $watched_clients);
		unset($watched_clients[$found_socket]);
	}
	
	
	
	
	foreach ($watched_clients as $changed_socket) {
		
		while ( @socket_recv($changed_socket, $buf, 1024, 0) > 0 ) {
			if ((int)substr($buf, 0, 4) === 2937) {
				$buf = substr($buf, 4);
				
				$msg = "String message from normal client $client_ip:$client_port -> ".$buf;
				console($msg);
				send_message($msg);
			
			} else {
				if (strlen($buf) > 8) {
					$received_text = unmask($buf);
					socket_getpeername($changed_socket, $client_ip, $client_port);
					
					if ( is_json($received_text) ) {
						$arr = json_decode($received_text, true); $response=null;
						foreach ($arr as $k => $v) {
							$response .= "$k: $v\n";
						}
						$msg = "JSON message from WebSocket client $client_ip:$client_port -> ".$response;
						console($msg);
						send_message($msg);
					} else if ( !empty($received_text) ) {
						$msg = "String message from WebSocket client $client_ip:$client_port -> ".$received_text;
						console($msg);
						send_message($msg);
					}
				} else {
					//console(unmask($buf));
				}
			}
			
			break 2;
		}
		
		$buf = @socket_read($changed_socket, 1024, PHP_NORMAL_READ);
		
		if ($buf === false) { // check disconnected client
			$found_socket = array_search($changed_socket, $clients);
			socket_getpeername($changed_socket, $client_ip, $client_port);
			unset($clients[$found_socket]);
			$msg = "$client_ip:$client_port Disconnected\n";
			console($msg);
			send_message($msg);
		}
	}
	
}

socket_close($master_socket);



function handshake($request_headers, $client) {
	$headers = [];
	$lines = preg_split("/\r\n/", $request_headers);
	foreach($lines as $line) {
		$line = rtrim($line);
		if (preg_match('/\A(\S+): (.*)\z/', $line, $matches)) {
			$headers[$matches[1]] = $matches[2];
		}
	}
	
	$key = $headers['Sec-WebSocket-Key'];
	$accept = base64_encode( sha1($key.KEY_SUFFIX, true) );
	
	$response  = "HTTP/1.1 101 Switching Protocols\r\n";
	$response .= "Upgrade: websocket\r\n";
	$response .= "connection: Upgrade\r\n";
	$response .= "Sec-Websocket-Accept: $accept\r\n\r\n";

	socket_write( $client, $response, strlen($response) );
}
function send_message($msg) {
	global $clients;
	$msg = mask($msg);
	foreach($clients as $client) {
		@socket_write($client, $msg, strlen($msg));
	}
	return true;
}
function unmask($text) {
	$length = ord($text[1]) & 127;
	if ($length == 126) {
		$masks = substr($text, 4, 4);
		$data = substr($text, 8);
	}
	elseif ($length == 127) {
		$masks = substr($text, 10, 4);
		$data = substr($text, 14);
	}
	else {
		$masks = substr($text, 2, 4);
		$data = substr($text, 6);
	}
	$text = "";
	for ($i = 0; $i < strlen($data); ++$i) {
		$text .= $data[$i] ^ $masks[$i%4];
	}
	return $text;
}
function mask($text) {
	$b1 = 0x80 | (0x1 & 0x0f);
	$length = strlen($text);
	
	if($length <= 125)
		$header = pack('CC', $b1, $length);
	elseif($length > 125 && $length < 65536)
		$header = pack('CCn', $b1, 126, $length);
	elseif($length >= 65536)
		$header = pack('CCNN', $b1, 127, $length);
	return $header.$text;
}

function typeof($text) {
	$length = strlen($text);
	if ($length >= 453) {
		$answer = 'WebSocket Request';
	} else {
		$answer = 'Normal Request';
	}
	return $answer;
}
function is_json($string) {
	return ( is_string($string) && is_object(json_decode($string)) && is_array(json_decode($string, true)) ) ? true : false;
}
function console() {
	foreach (func_get_args() as $value) {
		if ( !empty($value) ) {
			echo $value . "\n";
		}
	}
}
?>