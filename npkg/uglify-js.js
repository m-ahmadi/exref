/* cli
npm install uglify-js -g

uglifyjs --help

uglifyjs input.js -o output.min.js

uglifyjs input.js -o output.min.js --source-map

uglifyjs input.js -o output.min.js --compress
*/
const uglifyjs = require('uglify-js');

var result = uglifyjs.minify('function add(first, second) { return first + second; }');
result.error // runtime error, or `undefined` if no error
result.code  // minified result

// ref
uglifyjs.minify(code, options={
	parse: {
		// parse options
	},
	compress: {
		// compress options
	},
	mangle: {
		// mangle options

		properties: {
			// mangle property options
		}
	},
	output: {
		// output options
	},
	sourceMap: {
		// source map options
	},
	nameCache: null, // or specify a name cache object
	toplevel: false,
	ie8: false,
	warnings: false,
});