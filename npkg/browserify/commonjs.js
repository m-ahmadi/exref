// require function

// the following 4 lines are not the same:
var $ = require('./jquery');	  // relative file  (without extension)
var $ = require('./jquery.js'); // relative file  (with    extension)
var $ = require('jquery.js');   // module lookup? (without extension)
var $ = require('jquery');      // module lookup? (with    extension)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// require relative files

// current directory
var foo = require('./foo.js');
console.log( foo(4) );

// parent directory
var foo = require('../foo.js');
console.log( foo(4) );

// with or without the file extention
var foo = require('./foo.js');
var foo = require('./foo');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// export a single value from a file

// foo.js file:
//--------------------------------------------------------------
module.exports = function (n) {
	return n * 111
};
//--------------------------------------------------------------
module.exports = 555;
//--------------------------------------------------------------
exports.beep = function (n) { return n * 1000 }
exports.boop = 555
//--------------------------------------------------------------
// this doesn't work
exports = function (n) { return n * 1000 }
// instead
module.exports = function (n) { return n * 1000 }

// node supports module.exports = function () {}, but that is not part of a commonjs spec
//--------------------------------------------------------------

// another file:
var foo = require('./foo.js');
console.log( foo(5) );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@