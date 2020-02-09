<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>
<body>
	<header>
		@yield('header')
	</header>


	<div id="content">
		<h1>Welcome to the site</h1>
		@yield('content')
	</div>


	<footer>
		@yield('footer')
	</footer>
</body>
</html>