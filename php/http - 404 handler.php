<?php
$status = $_SERVER['REDIRECT_STATUS'];
$arr = array(
	403 => 'Forbidden',
	404 => 'Not Found',
	500 => 'Internal Server Error'
);

if ( in_array($status, $arr) ) {
	die("Error $code: {$codes[$code]}");
	// or
	readfile("$status.html");
	// or
	include("$status.html");
	
} else {
	die('Unknown error');
	// or
	readfile("unkown-error.html");
	// or
	include("unkown-error.html");
}
?>