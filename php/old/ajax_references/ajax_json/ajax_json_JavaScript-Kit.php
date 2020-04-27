<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4){
				if (xhr.status==200){
					var jsondata = eval("("+xhr.responseText+")") //retrieve result as an JavaScript object
					var rssentries = jsondata.items;
					
					var output = '<ul>';
					for (var i=0; i<rssentries.length; i++){
						output += '<li><a href="'+rssentries[i].link+'">'+rssentries[i].title+'</a></li>';
					}
					output += '</ul>';
					document.getElementById("result").innerHTML = output;
				}
			else {
				alert("An error has occured making the request")
			}
			}
		}
		xhr.open("GET", "web-sites.json", true)
		xhr.send()
	</script>
</head>
<body>
	<div id="result"> </div>
</body>
</html>