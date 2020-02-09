// main.js
window.asad = 1234;
global.khiarshoor = 'ghoorbaghe';
window.filenamify = require('filenamify'); // doesn't work in browser: filenamify is undefined
module.exports = require('filenamify');    // works in browser

/*
npm install filenamify
browserify main.js -o bundle.js -s filenamify
<script src="bundle.js"></script>
*/
	
// in browser:
asad // 1234
khiarshoor // 'ghoorbaghe'