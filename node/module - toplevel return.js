// it works because in node modules are wrapped within a function

// foo.js
if (2+2 === 4) {
	module.exports = 'what the hek';
	return;
}
module.exports = 'what the fudge';


// bar.js
var foo = require('./foo.js');
console.log(foo); // 'what the hek'