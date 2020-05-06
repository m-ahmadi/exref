<?php
$status = $_SERVER['REDIRECT_STATUS'];
$arr = [403, 404, 500];

if ( in_array($status, $arr) ) {
	include("$status.html");
} else {
	include("unkown-error.html");
}
?>