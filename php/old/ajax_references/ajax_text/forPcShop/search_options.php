<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <ul>
		<li><a href="">مادربرد</a></li>
		<li><a href="">سی پی یو</a></li>
    </ul>
    <div id="search_options">
	</div>
</body>
	<script type="text/javascript">
	function fn(event) {
		var target = event.target;
		
		if (target.tagName.toUpperCase() === 'A') {
			event.preventDefault();
			xhr = new XMLHttpRequest();
			switch (target.innerHTML) {
				case 'مادربرد':
					xhr.open('GET','include.php?ali=sto');
					xhr.onreadystatechange = function(){
						document.getElementById('search_options').innerHTML = xhr.responseText;
					}
					xhr.send();
					break;
				
				case 'سی پی یو':
					xhr.open('GET','include.php?ali=stt');
					xhr.onreadystatechange = function(){
						document.getElementById('search_options').innerHTML = xhr.responseText;
					}
					xhr.send();
					break;
			}
		}
	}
	document.addEventListener('click' ,fn , false);
	</script>
</html>
