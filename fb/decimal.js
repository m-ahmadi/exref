// install
Decimal                                     // browser global <script src='decimal.js'></script>
require(['decimal'], function(Decimal) {}); // requirejs
const Decimal = require('decimal.js');      // node
import Decimal from './decimal.js';         // es6

// usage

// input values: number|sring|Decimal
x = new Decimal(123.4567);
y = new Decimal('123456.7e-3');
z = new Decimal(x);
x.equals(y) && y.equals(z) && x.equals(z)   // true

// binary/hex/octal value
x = new Decimal('0xff.f');                  // '255.9375'
y = new Decimal('0b10101100');              // '172'
z = x.plus(y);                              // '427.9375'
z.toBinary()                                // '0b110101011.1111'
z.toBinary(13)                              // '0b1.101010111111p+8'

// immutable
0.3 - 0.1                                   // 0.19999999999999998
x = new Decimal(0.3);
x.minus(0.1)                                // '0.2'
x                                           // '0.3'

// chaining
x.dividedBy(y).plus(z).times(9).floor()
x.times('1.23456780123456789e+9').plus(9876.5432321).dividedBy('4444562598.111772').ceil()

// method alias
x.squareRoot().dividedBy(y).toPower(3).equals(x.sqrt().div(y).pow(3))  // true
x.cmp(y.mod(z).neg()) == 1 && x.comparedTo(y.modulo(z).negated()) == 1 // true

// Number replicates
x = new Decimal(255.5);
x.toExponential(5)                          // '2.55500e+2'
x.toFixed(5)                                // '255.50000'
x.toPrecision(5)                            // '255.50'

// Math replicates
Decimal.sqrt('6.98372465832e+9823')         // '8.3568682281821340204e+4911'
Decimal.pow(2, 0.0979843)                   // '1.0702770511687781839'

// isNaN & isFinite (NaN & Infinity are valid Decimal values)
x = new Decimal(NaN)                        // 'NaN'
y = new Decimal(Infinity)                   // 'Infinity'
x.isNaN() && !y.isNaN() && !x.isFinite() && !y.isFinite() // true

// toFraction with optional max denominator arg
z = new Decimal(355);
pi = z.dividedBy(113)                       // '3.1415929204'
pi.toFraction()                             // [ '7853982301', '2500000000' ]
pi.toFraction(1000)                         // [ '355', '113' ]

// setting defaults
Decimal.set({precision: 80})                // set precision to 80
Decimal.set({defaults: true})               // reset all to defaults
Decimal.set({precision: 6, defaults: true}) // set precision to 6 and all others to defaults

// significant digits (total number of digits, both sides of decimal point)
Decimal.set({precision: 5})                 // set for default constructor
Decimal9 = Decimal.clone({precision: 9})    // create another constructor
x = new Decimal(5);
y = new Decimal9(5);
x.div(3)                                    // '1.6667'
y.div(3)                                    // '1.66666666'

// decimal places (number of digits after decimal point)
Decimal('0.123').toDecimalPlaces(2)         // '0.12'
Decimal('0.123').toDecimalPlaces(1)         // '0.1'

// rounding mode
Decimal('1.25').toPrecision(2)              // '1.3' (default: Decimal.ROUND_HALF_UP)
Decimal('1.25').toDecimalPlaces(1)          // ...
Decimal.set({rounding: Decimal.ROUND_HALF_EVEN})
Decimal('1.25').toPrecision(2)              // '1.2'
Decimal('1.25').toDecimalPlaces(1)          // ...

// storage structure
x = new Decimal(-12345.67);
x.d                                         // [ 12345, 6700000 ]    digits (base 10000000)
x.e                                         // 4                     exponent (base 10)
x.s                                         // -1                    sign