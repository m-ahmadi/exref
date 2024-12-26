const htmlparser2 = require('htmlparser2'); // npm i htmlparser2

const html = `<!DOCTYPE html>
<html>
	<body>
		<h1>hello</h1>
	</body>
</html>`;

const document = htmlparser2.parseDocument(html);

document.getElementById         // undefined
document.getElementsByClassName // undefined
document.querySelector          // undefined
document.querySelectorAll       // undefined
