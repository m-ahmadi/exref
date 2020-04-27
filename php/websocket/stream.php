<?php

$client = stream_socket_client('tcp://localhost:9090', $errno, $errorMessage);

if ($client === false) {
    throw new UnexpectedValueException("Failed to connect: $errorMessage");
}

fwrite($client, 'GET / HTTP/1.0\r\nHost: locahost\r\nAccept: */*\r\n\r\n');
echo stream_get_contents($client);
fclose($client);
?>