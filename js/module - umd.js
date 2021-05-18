// simple for node & browser
((key, factory) => {
	if (typeof exports === 'object' && typeof process.versions.node !== 'undefined') {
		module.exports = factory();
	} else {
		window[key] = factory();
	}
})('foo', () => {
	
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another example
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// amd
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// node, commonjs-like
		module.exports = factory(require('jquery'));
	} else {
		// browser global (root is window)
		root.returnExports = factory(root.jQuery);
	}
})(this, function ($) {
	// methods
	function myFunc() {};

	// exposed public method
	return myFunc;
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// me old
(function (exported) {
	if (typeof define === 'function' && define.amd) {
		// amd
		define(exported);
	} else if (typeof process !== 'undefined' && typeof process.versions.node !== 'undefined') {
		// node, commonjs-like
		module.exports = exported; 
	} else {
		// browser global (root is window)
		window.util = exported;
	}
}((function () {
	// your module (this executes first, then the above func executes)
	return {};
}())));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// official example
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// amd
		define(['exports', 'b'], function (exports, b) {
			factory((root.commonJsStrictGlobal = exports), b);
		});
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		// commonjs
		factory(exports, require('b'));
	} else {
		// browser global
		factory((root.commonJsStrictGlobal = {}), root.b);
	}
}(typeof self !== 'undefined' ? self : this, function (exports, b) {
	// use b in some fashion

	// attach properties to the exports object to define the exported module properties
	exports.action = function () {};
}));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@