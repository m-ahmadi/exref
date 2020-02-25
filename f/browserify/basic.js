// main.js:
module.exports = require('events');

/*
	npm install events
	browserify main.js -o events.js -s EventEmitter
	<script src="events.js"></script>
*/

// in browser:
new EventEmitter()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another example:

// main.js
var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log( unique(data) );

/*
	npm install unique
	browserify main.js -o bundle.js
	<script src="bundle.js"></script>
*/