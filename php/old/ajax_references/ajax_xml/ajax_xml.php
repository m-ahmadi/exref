<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
	var products;
	var xhr = new XMLHttpRequest();
	
	function getproducts() {
		xhr.open("GET", "products.xml?g=y");
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var xmlDocument = xhr.responseXML;
				products = xmlDocument.getElementsByTagName('item');
				
				var select = document.getElementById('productsList');
				var ul = document.getElementById('ul');
				
				for (var i=0, length = products.length; i < length; i++ ) {
					select.options[i] = new Option(products[i].firstChild.data);
					
					var li = document.createElement('li');
					var licontent = document.createTextNode(products[i].firstChild.data);
					li.appendChild(licontent);
					ul.appendChild(li);
				}
			}
		}
		
		xhr.send();
	}
	</script>
</head>
<body>
	<select size="1" id="productsList">
        <option>Select an item</option>
     </select>
	 
	 <ul id="ul">
	 </ul>
	<input type = "button" value = "Select products" onclick = "getproducts()">
</body>
</html>