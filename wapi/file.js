// NOTE: impossible to download a file into a folder other than user's default "Download" folder unless writing an extension

function download(filename, text) {
  let a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  a.setAttribute('download', filename);
  a.style.display = 'none';
  document.body.append(a);
  a.click();
  a.remove();
}
download('test.txt', 'Hello world!');

// another way
function download(filename, text){
	let url = URL.createObjectURL( new Blob([text], {type:'text/plain'}) );
	let a = document.createElement('a');
	a.style.display = 'none';
	a.setAttribute('href', url)
	a.setAttribute('download', filename)
	document.body.append(a);
	a.click();
	URL.revokeObjectURL(url);
	a.remove();
}
download('test.txt', 'Hello world!');