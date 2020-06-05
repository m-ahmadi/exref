// exports
(function some() {
	module.exports = 'some other';
})()

module.exports = 'some value';
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