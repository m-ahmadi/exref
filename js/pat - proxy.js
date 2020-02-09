//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// jquery example:
(function () {
	// log all calls to setArray
	var proxied = jQuery.fn.setArray;
	jQuery.fn.setArray = function () {
		console.log( this, arguments );
		return proxied.apply( this, arguments );
	};
})();
/*
	The above wraps its code in a function to hide the "proxied"-variable.
	It saves jQuery's setArray-method in a closure and overwrites it.
	The proxy then logs all calls to the method and delegates the call to the original.
	Using apply(this, arguments) guarantees that,
	the caller won't be able to notice the difference between the original and the proxied method.
*/