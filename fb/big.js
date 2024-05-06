/* cdn
	https://cdn.jsdelivr.net/npm/big.js
	https://cdnjs.cloudflare.com/ajax/libs/big.js/5.2.2/big.min.js
*/

// install 
Big                                // browser global <script src='big.js'></script>
require(['big'], function(Big) {}) // requirejs
const Big = require('big.js')      // node
import Big from './big.mjs'        // es6

// usage

// input values: number|string|Big
x = new Big(123.4567);
y = Big('123456.7e-3');            // `new` is optional
z = new Big(x);
x.eq(y) && x.eq(z) && y.eq(z)      // true
n = Big(4).times(4)                // '16'
n.sqrt()                           // '4'
n.div(2).pow(2)                    // '64'
n.times(2)                         // '32'

// immutable
0.3 - 0.1                          // 0.19999999999999998
x = new Big(0.3);
x.minus(0.1)                       // '0.2'
x                                  // '0.3'

// chaining
x.div(y).plus(z).times(9).minus('1.234567801234567e+8').plus(976.54321).div('2598.11772')
x.sqrt().div(y).pow(3).gt(y.mod(z)) // true

// js replicates
x = new Big(255.5);
x.toExponential(5)                 // '2.55500e+2'
x.toFixed(5)                       // '255.50000'
x.toPrecision(5)                   // '255.50'

// max decimal places
// only relevant to the div(), sqrt(), and pow() with negative exponent
Big.DP = 4; // default 20
''+Big('1.123456')                 // '1.123456'      has no effect
''+Big('1.12345').div(1)           // '1.1235'        has effect
''+Big('1.12345').sqrt()           // '1.0599'        ...
Big.DP = 6;
''+Big('1.12345').sqrt()           // '1.059929'      ...
Big.DP = 3;
''+Big('1.12345').pow(2)           // '1.2621399025'  has no effect
''+Big('1.12345').pow(-2)          // '0.7923'        has effect

// rounding
Big.RM = 0;
Big('1.125').round(0)              // '1'
Big('1.125').round()               // ...
Big('1.125').round(2)              // '1.13'

// rounding modes
ROUND_DOWN      = 0;               // round towards zero. i.e. truncates, no rounding (default)
ROUND_HALF_UP   = 1;               // round towards nearest neighbour. if equidistant, away from zero
ROUND_HALF_EVEN = 2;               // round towards nearest neighbour. if equidistant, towards even neighbour
ROUND_UP        = 3;               // round away from zero

Big('0.15').round(1, ROUND_DOWN)   // '0.1'
Big('0.15').round(1, ROUND_UP)     // '0.2'

x = '0.145';
y = '0.135';
x.round(2, ROUND_HALF_UP)          // '0.14'
y.round(2, ROUND_HALF_UP)          // '0.15'
x.round(2, ROUND_HALF_EVEN)        // '0.14'
y.round(2, ROUND_HALF_EVEN)        // '0.13'

// storage structure
x = new Big(-123.456);
x.c                                // [1,2,3,4,5,6]    coefficient (i.e. significand)
x.e                                // 2                exponent
x.s                                // -1               sign

// passable to Math.methods (Big object similliar to Number objects)
Math.ceil( Big('32.5') )           // 33
Math.floor( Big('32.5') )          // 32