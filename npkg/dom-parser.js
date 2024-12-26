const { parseFromString } = require('dom-parser'); // npm i dom-parser

const html = `<!DOCTYPE html>
<html>
<body>
	<h1 id="foo">hello</h1>
</body>
</html>`;

const document = parseFromString(html);

document.getElementById('foo')  // <function>
document.getElementsByClassName // <function>
document.querySelector          // undefined
document.querySelectorAll       // undefined
