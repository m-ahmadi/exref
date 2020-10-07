module.exports // default export

exports.foo    // name exports
exports.bar
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// default export

// foo.js
module.exports = {
	foo: 1,
	bar: 2
};

// bar.js
var foo = require('./a.js');
foo // { foo: 1, bar: 2 }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// named exports

// foo.js
exports.name = 'hello';
exports.job = 'world';

// bar.js
var foo = require('./a.js');
foo // { name: 'hello', job: 'world' }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// es6
/*
node . --experimental-modules

package.json "type" field
if nearest parent package.json file contains a top-level field "type" with a value of "module", then
.js or .mjs or extensionless files are loaded as es modules. */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// module info

var pkginfo = require('pkginfo'); // npm install pkginfo
var info = pkginfo(module);
var info = pkginfo(module, 'version', 'author');
console.dir(module.exports);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@