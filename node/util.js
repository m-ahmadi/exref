const util = require('util');

// promisify
util.promisify(original)

/*
takes a function with an error-first callback and returns a version that returns promises.
promisify() assumes that original is a function taking a callback as its final argument in all cases.
if original is not a function, promisify() will throw an error.
if original is a function but its last argument is not an error-first callback, it will still be passed an error-first callback as its last argument.
*/

// an example:
const access = util.promisify(fs.access);

(async function () {
	await fs.access("path/to/some/file.txt"); // TypeError: "callback" argument must be a function
	
	await access("path/to/some/file.txt"); // no error
	console.log("file exist")
	
})()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// inspect
// .inspect() returns a string representation of an object
util.inspect(object [, options])
util.inspect(object [, showHidden, depth, colors])

util.inspect(obj, {
	showHidden:  false,        // true: show non-enumberable props
	depth:       2,            // how many level of the object to be shown
	colors:      false,        // colored output
	breakLength: 80,           // length of a line (Infinity: single line)
	compact:     3 || false,   // each object key on a new line
	sorted:      false,        // sort all props
	getters:     false         // show getters
});

util.inspect(obj, true, 2, true);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@