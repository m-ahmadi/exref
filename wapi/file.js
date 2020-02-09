function download(filename, text) {
  var el = document.createElement('a');
  el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  el.setAttribute('download', filename);
  el.style.display = 'none';
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}

download('test.txt', 'Hello world!');

/* demo
</style>
<form onsubmit="download(this['name'].value, this['text'].value)" style="display: block; margin: 10px;">
  <input type="text" name="name" value="test.txt">
  <textarea name="text"></textarea>
  <input type="submit" value="Download">
</form>
*/

// another implementation
function download(data, filename, type) {
	var file = new Blob([data], {type: type});
	if (window.navigator.msSaveOrOpenBlob) { // IE10+
		window.navigator.msSaveOrOpenBlob(file, filename);
	} else { // others
		var a = document.createElement('a');
		var url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(function () {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);  
		}, 0); 
	}
}