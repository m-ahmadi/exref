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
x = new Big(123.4567)
y = Big('123456.7e-3')             // 'new' is optional
z = new Big(x)
x.eq(y) && x.eq(z) && y.eq(z)      // true

// immutable
0.3 - 0.1                          // 0.19999999999999998
x = new Big(0.3)
x.minus(0.1)                       // '0.2'
x                                  // '0.3'

// chaining
x.div(y).plus(z).times(9).minus('1.234567801234567e+8').plus(976.54321).div('2598.11772')
x.sqrt().div(y).pow(3).gt(y.mod(z)) // true

// js replicates
x = new Big(255.5)
x.toExponential(5)                 // '2.55500e+2'
x.toFixed(5)                       // '255.50000'
x.toPrecision(5)                   // '255.50'

// max decimal places and rounding mode
Big.DP = 10 // default 20
Big.RM = 1 /*  default 0
	0:  ROUND_DOWN
	1:  ROUND_HALF_UP
	2:  ROUND_HALF_EVEN
	3:  ROUND_UP */
x = new Big(2);
y = new Big(3);
z = x.div(y)                       // '0.6666666667'
z.sqrt()                           // '0.8164965809'
z.pow(-3)                          // '3.3749999995'
z.times(z)                         // '0.44444444448888888889'
z.times(z).round(10)               // '0.4444444445'

// storage structure
x = new Big(-123.456);
x.c                                // [1,2,3,4,5,6]    coefficient (i.e. significand)
x.e                                // 2                exponent
x.s                                // -1               sign

// passable to Math.methods (Big object similliar to Number objects)
Math.ceil( Big('32.5') )  // 33
Math.floor( Big('32.5') ) // 32