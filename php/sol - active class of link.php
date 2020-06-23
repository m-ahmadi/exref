<?php

// #1
$segs = explode( '/', dirname($_SERVER['PHP_SELF']) );
$activePage = end($segs);


// #2
$activePage = basename($_SERVER['PHP_SELF'], '.php');

// #3
$directoryURI = $_SERVER['REQUEST_URI'];
$path = parse_url($directoryURI, PHP_URL_PATH);
$components = explode('/', $path);
$activePage = $components[1];
?>

<ul>
	<li class="<?=$activePage==''?'active':''?>"><a href="/">Home</a></li>
	<li class="<?=$activePage=='settings'?'active':''?>"><a href="/settings">Settings</a></li>
</ul>