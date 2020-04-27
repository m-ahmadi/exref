<!doctype html>
<html>
<head>
<link rel="stylesheet" href="style.css">
</head>
<body>
   <input type="button" value="GIGA-BYTE" id="bt"/>
   <div id="first"></div>
   <div id="vasat" align="center"></div>
   <div id="hha" align="left"></div>
</body>
<script type="text/javascript">
		function fn1(event){
			xhr = new XMLHttpRequest();
			xhr.open('GET','BetterTry.inc.php?ali=GIGA');
			xhr.onreadystatechange = function(){
				document.getElementById('first').innerHTML = xhr.responseText;
			}
			xhr.send();
		}
		function fn2(event){
			xhr = new XMLHttpRequest();
			xhr.open('GET','BetterTry.inc.php?ali=chipset');
			xhr.onreadystatechange = function(){
				document.getElementById('vasat').innerHTML = xhr.responseText;
			}
			xhr.send();	
		}
		function fn3(event){
			var target = event.target;
			var inner = target.innerHTML;
			xhr = new XMLHttpRequest();
			xhr.open('GET','BetterTry.inc.php?ali=' + inner);
			xhr.onreadystatechange = function(){
				document.getElementById('hha').innerHTML = xhr.responseText;
			}
			xhr.send();		
		}
		document.getElementById('bt').addEventListener('click', fn1, false);
		document.getElementById('first').addEventListener('click', fn2, false);
		document.getElementById('vasat').addEventListener('click', fn3, false);
		// addEventListener('click', fn, false);
	</script>
</html>
<?php

?>
