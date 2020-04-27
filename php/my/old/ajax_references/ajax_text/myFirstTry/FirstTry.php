<html>
<head>
<link rel="stylesheet" href="style.css">
<script type="text/javascript">

  function findmatch(){
	  
	  window.XMLHttpRequest;
	  xmlhttp = new XMLHttpRequest();
	  xmlhttp.open('GET','FirstTry.inc.php?ali=GIGA');
	  xmlhttp.send();
	  
	  xmlhttp.onreadystatechange = function(){
			  document.getElementById('first').innerHTML = xmlhttp.responseText;
	  }
  }
  
  function findmatch2(){
	  window.XMLHttpRequest;
	  xmlhttp = new XMLHttpRequest();
	  xmlhttp.open('GET','FirstTry.inc.php?ali=chipset');
	  xmlhttp.send();
	  
	  xmlhttp.onreadystatechange = function(){
			  document.getElementById('vasast').innerHTML = xmlhttp.responseText;
	  }
  }
  
  function findmatch3(optnum){
	  
	  window.XMLHttpRequest;
	  xmlhttp = new XMLHttpRequest();
	  
    switch  (optnum){
		case 1:
          xmlhttp.open('GET','FirstTry.inc.php?ali='+document.getElementById('num1').value);
	      xmlhttp.send();
	      break;
		case 2:
          xmlhttp.open('GET','FirstTry.inc.php?ali='+document.getElementById('num2').value);
	      xmlhttp.send();
	      break;
		case 3:
          xmlhttp.open('GET','FirstTry.inc.php?ali='+document.getElementById('num3').value);
	      xmlhttp.send();
	      break;
		case 4:
          xmlhttp.open('GET','FirstTry.inc.php?ali='+document.getElementById('num4').value);
	      xmlhttp.send();
	      break;
	}

	  xmlhttp.onreadystatechange = function(){
			  document.getElementById('hha').innerHTML = xmlhttp.responseText;
	  }
  }
</script>

</head>
<body>
   <input type="button" value="GIGA-BYTE" onClick="findmatch();" />
   <div id="first"></div>
   <div id="vasast" align="center"></div>
   <div id="hha" align="left"></div>
</body>
</html>

