var Terser = require('terser');

var code = 'function add(first, second) { return first + second; }';
var result = Terser.minify(code);
result.error // runtime error, or `undefined` if no error
result.code  // minified code

// more than one JavaScript file at a time
var code = {
	'file1.js': 'function add(first, second) { return first + second; }',
	'file2.js': 'console.log(add(1 + 2, 3 + 4));'
};
var result = Terser.minify(code);
result.code

// ref
Terser.minify(code, options={
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
	ecma: 5, // specify one of: 5, 6, 7 or 8
	keep_classnames: false,
	keep_fnames: false,
	ie8: false,
	module: false,
	nameCache: null, // or specify a name cache object
	safari10: false,
	toplevel: false,
	warnings: false,
})