// browser

/* includes:
FileSaver.js
jszip.js
*/

var zip = new JSZip();

zip.file('Hello.txt', 'Hello World\n');

var img = zip.folder('images');

img.file('smile.gif', imgData, { base64: true });

zip.generateAsync({ type:'blob' }).then(function (content) {
	saveAs(content, 'example.zip'); // FileSaver.js
});