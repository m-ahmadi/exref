<?php
defined('KEY_SUFFIX') ? null : define('KEY_SUFFIX', "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
$host = 'localhost';
$port = 9090;

error_reporting(E_ALL);
set_time_limit(0);
ob_implicit_flush();

$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
socket_bind($sock, $host, $port);
socket_listen($sock);

while (true) {
	
	$client = socket_accept($sock) or die('socket_accept returned false');
	
    //$buf = socket_read($client, 1024);
	$buf=null;$key=null;
	while ( $line = socket_read($client, 2048, PHP_NORMAL_READ) ) {
		$buf .= $line;
		if ( strpos($line, 'Sec-WebSocket-Key')!== false ) {
			$key = substr($line, 19, 24);
		} else if ( strpos($line, 'User-Agent')!== false ) { break; }
    }
	echo $buf;
	
	handshake($key, $client);
	
	
}

socket_close($sock);

function handshake($key, $client) {
	$sha1 = sha1($key.KEY_SUFFIX, true);
	$accept = base64_encode($sha1);
	
	$write  = "HTTP/1.1 101 Switching Protocols\r\n";
	$write .= "Upgrade: websocket\r\n";
	$write .= "connection: Upgrade\r\n";
	$write .= "Sec-Websocket-Accept: $accept\r\n\r\n";
	
	socket_write($client, $write, strlen($write));
}
?>