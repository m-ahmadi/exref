<?php 
$pid = exec('pidof php');
exec('kill -9 '.$pid);
exec('php -q server/startDaemon.php > output.txt &');
?>