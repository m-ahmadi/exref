//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	This may sound trivial and, in fact,
	it is trivial with ECMAscript 6 which introduces a new Number.isInteger() function for precisely this purpose.
	However, prior to ECMAScript 6, this is a bit more complicated,
	since no equivalent of the Number.isInteger() method is provided.

	The issue is that, in the ECMAScript specification,
	integers only exist conceptually;
	i.e., numeric values are always stored as floating point values.

	With that in mind, the simplest and cleanest pre-ECMAScript-6 solution
	(which is also sufficiently robust to return false even if a non-numeric value such as
	a string or null is passed to the function) would be the following:
*/
function isInteger(x) {
	return (x^0) === x;
} 
//The following solution would also work, although not as elegant as the one above:
function isInteger(x) {
	return Math.round(x) === x;
}
// Note that Math.ceil() or Math.floor() could be used equally well (instead of Math.round()) in the above implementation.
// Or alternatively:
function isInteger(x) {
	return (typeof x === 'number') && (x % 1 === 0);
}
// One fairly common incorrect solution is the following:
function isInteger(x) {
	return parseInt(x, 10) === x;
}
/*
	While this parseInt-based approach will work well for many values of x,
	once x becomes quite large, it will fail to work properly.
	The problem is that parseInt() coerces its first parameter to a string before parsing digits.
	Therefore, once the number becomes sufficiently large,
	its string representation will be presented in exponential form (e.g., 1e+21).
	Accordingly, parseInt() will then try to parse 1e+21,
	but will stop parsing when it reaches the e character and will therefore return a value of 1.
	Observe:
*/
String(1000000000000000000000)
'1e+21'

parseInt(1000000000000000000000, 10)
1

parseInt(1000000000000000000000, 10) === 1000000000000000000000
false