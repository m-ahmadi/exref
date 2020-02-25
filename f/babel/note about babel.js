/*
	although we can use es6 feutures like, let, arrow fn, class and other stuff,
	in terms of modules, all babel does is to convert es6 module syntax to some current syntax for modules,
	which is either commonjs, amd, umd or systemjs.
	
	so for example if we set babel to convert es6 module format to commonjs,
	after babel work is done, all we are left with is, commonjs require() calls,
	if we've converted es6 modules to commonjs,
	then we need to run webpack or browserify.
	
	(if amd, then requirejs, etc.)
*/
import util from 'util'; // instead of:
var util = require('util');