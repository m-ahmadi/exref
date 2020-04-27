<?php
$url = $_SERVER['REQUEST_URI'];
$url = str_replace('/sitename', '', $url);
$url = $url === '/' ? '/home' : $url;
?>
<head>
	<!-- <script src="js/main.js"></script> -->
</head>

<nav>
	<ul>
		<li><a href="home">Home</a></li>
		<li><a href="profile">Profile</a></li>
		<li><a href="login">Login</a></li>
		<li><a href="settings">Settings</a></li>
	</ul>
</nav>

<div id="content">
	<?php readfile( './pages'.$url.'.htm' ); ?>
</div>