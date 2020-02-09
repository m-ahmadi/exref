/*
	In general, You need to be carefull not to select any element in the body of an iife,
	Since the code in that body will get executed immediately (for 1 time),
	and therefore, You select some elements before document.ready occurs.
	
	Functions defined inside the body of an iife,
	(body of functions defined inside of an iife)
	are a safe place to select elements, attach handlers, (since you can call them later when document is ready)
	As long as they are not iife,
*/
var a = (function () {
	// execution causes the actual code
	console.log('now');
	$('element').addClass('something'); // this executes before document is ready (due to 1-time execution of iife)
	
	// execution causes the definition
	var b = function () {
		console.log('and now');
		$('element').addClass('something'); // this executes when document is ready
	};
	
	return {
		b: b
	}
}());

$(function () {
	a.b();
});