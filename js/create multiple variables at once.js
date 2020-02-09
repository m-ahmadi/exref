// pitfall of multiple assignment construct:

(function () {
	var a = b = 2;
	let a = b = 2; // same
	
	// expected to be:
	var b = 2;
	var a = b;

	// actually is:
	b = 2;
	var a = b;
})();
a // undefined
b // 2
/*
	es5 strict mode: ReferenceError: b is not defined
	(b ends up being a global variable, since it's not preceded by the var keyword)
*/
//--------------------------------------------------------------------------------------------------------
// es6 solution
let [ a, b, c ] = [...Array(3)]    // all undefined
let [ a, b, c ] = Array(3).fill(2) // all 2
let [ a, b, c ] = [2,4,7]          // different values for each

// another solution
var a = 2, b = 2;