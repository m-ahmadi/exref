/* general
require() is a sync operation.
require() will cache the file.
encoding of the file being required must be unicode or utf8.
.js files must have a module.exports statement.  */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// lookup rules
require('fs')                 // a core module (fs, path, http, util, ...)
require('./circle')           // relative to the file calling require(). (circle.js must be in same directory as foo.js)
require('/home/marco/foo.js') // absolute path. loads /home/marco/foo.js
require('something')          // loading from node_modules folder (when without a leading /, ./, ../ and not a core module)
/*
if exact filename is not found, node looks for js,json,node extensions.
	.js      interpreted as javascript text files
	.json    parsed as json text files
	.node    interpreted as compiled addon modules loaded with process.dlopen()
if path does not exist, require() throws a MODULE_NOT_FOUND Error.  */

// lookups when loading from node_modules
// cd /home/ry/projects/ && node foo.js
require('bar.js') /*
/home/ry/projects/node_modules/bar.js
/home/ry/node_modules/bar.js
/home/node_modules/bar.js
/node_modules/bar.js  */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// folder as module
require('./some-library') /*
1. looks for package.json and its main entry
2. if no package.json or its main entry is missing or cannot be resolved
3. looks for index.js or index.node
	./some-library/index.js
	./some-library/index.node
4. if index files not found
5. Error: Cannot find module 'some-library'  */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// path lookups of require vs fs
// relative path in require is relative to the file calling the require().
// relative path in fs      is relative to the folder from which node has been called. (process.cwd)

// solution for fs:
fs.readFileSync(__dirname + '/../data/file.json')
fs.readFileSync( path.join(__dirname, '../data/file.json') ) // better
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// require json files
/*
.json files automatically get JSON.parsed() when required.

because of require() caching, during app lifetime, if json file is changed,
new changes aren't accessible, even if re-required().

you can't require a json file that's not unicode/utf8 encoded.  */

// thejsonfile.json:
{
	"a": 2,
	"b": 3
}

var o = require("./thejsonfile");
o.a // 2
o.b // 3
//-----------------------------------------------------------
// caching issue
// state.json: [1, 2]
var fs = require('fs');
function a() {
	var state = require('./state.json');
	state.push(3);
	console.log(state); 
}
function b() {
	var state = require('./state.json');
	console.log(state); 
}
a() // [1, 2, 3]    ok.
b() // [1, 2, 3]    wrong. expected: [1, 2]
fs.writeFileSync('./state.json', '[1]'))
b() // [1, 2, 3]    wrong. expected: [1]
a() // [1, 2, 3, 3] wrong. expected: [1, 3]
b() // [1, 2, 3, 3] wrong. expected: [1]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// change lookup paths before require
module.paths.push("/somePath", "anotherPath") // before any require() call

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@