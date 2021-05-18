// Only one number type.
// No integers.
// 64-bit floating point IEEE-754 (aka "Double").
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Number literals **/
// All the same number using scientific notation and decimal point:
.01024e4
1.024e+3
10.24E2
102.4E+1
1024.e0
1024.00
1024
10240e-1
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Associative Law does not hold **/
(a + b) + c === a + (b + c)
// Produces false for some values.
// Integers under 9007199254740992 (9 quadrillion) are ok.
var maximum = 9007199254740991;
9007199254740992 === 9007199254740992 + 1 // true
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Decimal fractions are approximate **/
var a = 0.1,
	b = 0.2,
	c = 0.3;
(a + b) + c === a + (b + c); // false
// Solution: Turn it into integers and then do the work.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Number methods **/
toExponential
toFixed
toLocaleString
toPrecision
toString
valueOf
// All numbers inherit from "Number.prototype"
if (!Number.prototype.trunc) {
	Number.prototype.trunc = function trunc(number) {
		return Match[number >= 0 ? 'floor' : 'ceil'] (number);
	};
}
// Generally applications should not be extending fundamental prototypes
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Number are first class objects **/
// A number can be stored in a variable.
// A number can be passed as a parameter.
// A number can be returned from a function.
// A number can be stored in an an object.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Math object **/
// A bit of badness that was inherited from Java.
// Match object methods should have been methods of number but there are in this other space.
// Match also contain some constants:
E
LN10
LN2
LOG10E
LOG2E
PI
SQRT1_
SQRT2 
function log2(x) {
	return Match.LOG2E * Match.log(x);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** NaN **/
// Special number.
// Has 'number' type but it's not a real number.
// Result of undefined or erroneous operations:
0 / 0  // NaN
// Any arithmetic operation with NaN as an input will have NaN as a result (Toxic).
// NaN is not equal to anything, including NaN !
NaN === NaN // false
NaN !== NaN // true
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@