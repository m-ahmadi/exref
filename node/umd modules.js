(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		// Node, CommonJS-like
		module.exports = factory(require("jquery"));
	} else {
		// Browser globals (root is window)
		root.returnExports = factory(root.jQuery);
	}
}(this, function ($) {
	//    methods
	function myFunc() {};

	//    exposed public method
	return myFunc;
}));

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// mine:
(function (exported) {
	if (typeof define === "function" && define.amd) { // AMD
		define(exported);
	} else if (typeof process !== "undefined" &&
			   typeof process.versions.node !== "undefined") { // Node, CommonJS-like
		module.exports = exported; 
	} else { // Browser globals (root is window)
		window.util = exported;
	}
}((function () {
	// your module (this executes first, then the above func executes)
	return {};
}())));