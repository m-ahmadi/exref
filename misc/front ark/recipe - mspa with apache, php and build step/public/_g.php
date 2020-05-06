<?php
function page_title($path) {
	$arr = explode(DIRECTORY_SEPARATOR, $path);
	echo ucfirst( end($arr) );
}

function layout($name) {
	include("__shared/$name.htm");
}
?>