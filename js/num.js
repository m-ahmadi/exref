127
2.5
255        // 255    decimal
0x0000ff   // 255    hex
0b11111111 // 255    binary
0o377      // 255    octal
255e-1     // 25.5   scientific
25e-4      // 0.0025 scientific
1_000      // 1000   es2021 num seperator

// more scientific notations:
.01024e4   // 102.4
1.024e+3   // 1024
10.24E2    // 1024
102.4E+1   // 1024
1024.e0    // 1024
1024.00    // 1024
1024       // 1024
10240e-1   // 1024

// constructor called as function converts strings to numbers
Number('42')             // 42

// props
Number.MAX_VALUE         // biggest
Number.MIN_VALUE         // smallest
Number.NaN               // special "not a number" value
Number.EPSILON           // smallest interval between two representable numbers.
Number.POSITIVE_INFINITY // special value representing infinity. returned on overflow.
Number.NEGATIVE_INFINITY // special value representing negative infinity. returned on overflow.
Number.MAX_SAFE_INTEGER  // 2^53 - 1
Number.MIN_SAFE_INTEGER  // -(2^53 - 1)

// methods
Number.isNaN()
Number.isFinite()
Number.isInteger()
Number.isSafeInteger()   // between -9007199254740991 and 9007199254740991
Number.toInteger() 
Number.parseFloat()
Number.parseInt()
number.toFixed(?digits=0-100)
number.toPrecision(?precision=1-100)

(16).toExponential()     // '1.6e+1'

(16).toFixed()           // '16'
(16.4520).toFixed()      // '16'
(16.4520).toFixed(2)     // '16.45'
(16.4520).toFixed(3)     // '16.452'

var n = 12345.6789;
n.toFixed();             // '12346'        (note rounding, no fractional part)
n.toFixed(1);            // '12345.7'      (note rounding)
n.toFixed(6);            // '12345.678900' (note added zeros)

(16.4520).toPrecision()  // '16.452'
(16.4520).toPrecision(2) // '16'
(16.4520).toPrecision(4) // '16.45'
(16.4520).toPrecision(5) // '16.452'

(16.45200).valueOf()     // 16.452
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// only one number type.
// no integers.
// 64-bit floating point ieee-754 (aka "double").
//------------------------------------------------------------------------------
// associative law does not hold
(a + b) + c === a + (b + c)
// produces false for some values.
// integers under 9007199254740992 (9 quadrillion) are ok.
var maximum = 9007199254740991;
9007199254740992 === 9007199254740992 + 1 // true
//------------------------------------------------------------------------------
// decimal fractions are approximate
var a = 0.1,
	b = 0.2,
	c = 0.3;
(a + b) + c === a + (b + c); // false
// solution: turn it into integers and then do the work.
//------------------------------------------------------------------------------
// numeric values are always floating point
// numbers are treated with floating point precision,
// and may not always yield the expected results:
0.1 + 0.2         // 0.30000000000000004
0.1 + 0.2 == 0.3  // false
0.1 + 0.2 !== 0.3 // true
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@