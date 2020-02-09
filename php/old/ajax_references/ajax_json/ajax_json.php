<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
	/*
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'book.json', false);
		xhr.send();
		var xmlDoc = eval('(' + xhr.responseText + ')');
		
		alert('The Book Title is : ' + xmlDoc.book.title);
	*/
	
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4) {
				if (xhr.status==200) {
					var xmlDoc = eval('(' + xhr.responseText + ')');
					var book = xmlDoc.book;
					
					alert('The Book ISBN Number is : ' + book.isbn);
				}
			}
		}
		xhr.open('GET', 'book.json', true);
		xhr.send();
		
	</script>
</head>
<body>
	
</body>
</html>