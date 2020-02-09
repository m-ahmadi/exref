<?php 
$pid = exec('pidof php');
exec('kill -9 '.$pid);
?>