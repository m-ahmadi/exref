// install
BigNumber                                      // browser global <script src='bignumber.js'></script>
require(['bignumber'], function(BigNumber) {}) // requirejs
const BigNumber = require('bignumber.js')      // node
import BigNumber from "./bignumber.mjs"        // es6

// usage

// input values: number|sring|BigNumber
let x = new BigNumber(123.4567)
let y = BigNumber('123456.7e-3')
let z = new BigNumber(x)
x.isEqualTo(y) && y.isEqualTo(z) && x.isEqualTo(z) // true

// string value
let x = new BigNumber('1111222233334444555566')
x.toString()                                       // "1.111222233334444555566e+21"
x.toFixed()                                        // "1111222233334444555566" (prevents return of exponential notation)

// avoid loss of precision (create BigNumber from string)

// precision loss from using numeric literals with more than 15 significant digits.
new BigNumber(1.0000000000000001)                  // '1'
new BigNumber(88259496234518.57)                   // '88259496234518.56'
new BigNumber(99999999999999999999)                // '100000000000000000000'

// precision loss from using numeric literals outside the range of Number values.
new BigNumber(2e+308)                              // 'Infinity'
new BigNumber(1e-324)                              // '0'

// precision loss from the unexpected result of arithmetic with Number values.
new BigNumber(0.7 + 0.1)                           // '0.7999999999999999'


// BigNumber from a Number, is created from number's toString() not from its underlying binary value. (pass num.toString(2) to make from binary)
new BigNumber(Number.MAX_VALUE.toString(2), 2)

// base 2 to 36
a = new BigNumber(1011, 2)          // "11"
b = new BigNumber('zz.9', 36)       // "1295.25"
c = a.plus(b)                       // "1306.25"

// immutable
0.3 - 0.1                           // 0.19999999999999998
x = new BigNumber(0.3)
x.minus(0.1)                        // "0.2"
x                                   // "0.3"

// chaining
x.dividedBy(y).plus(z).times(9)
x.times('1.23456780123456789e+9').plus(9876.5432321).dividedBy('4444562598.111772').integerValue()

// method aliases
x.squareRoot().dividedBy(y).exponentiatedBy(3).isEqualTo(x.sqrt().div(y).pow(3)) // true
x.modulo(y).multipliedBy(z).eq(x.mod(y).times(z))                                // true

// Number methods replicates
x = new BigNumber(255.5)
x.toExponential(5)                  // "2.55500e+2"
x.toFixed(5)                        // "255.50000"
x.toPrecision(5)                    // "255.50"
x.toNumber()                        //  255.5

// better performance if base 10 is not specified
x.toString()                        // use this
x.toString(10)                      // don't use this unless necessary
x.toString(16)                      // "ff.8"

// toFormat (internationalisation)
y = new BigNumber('1234567.898765')
y.toFormat(2)                       // "1,234,567.90"

// max decimal places and rounding mode
BigNumber.set({ DECIMAL_PLACES: 10, ROUNDING_MODE: 4 })
x = new BigNumber(2)
y = new BigNumber(3)
z = x.dividedBy(y)                  // "0.6666666667"
z.squareRoot()                      // "0.8164965809"
z.exponentiatedBy(-3)               // "3.3749999995"
z.toString(2)                       // "0.1010101011"
z.multipliedBy(z)                   // "0.44444444448888888889"
z.multipliedBy(z).decimalPlaces(10) // "0.4444444445"

// toFraction with optional max denominator arg
z = new Decimal(355)
pi = z.dividedBy(113)               // '3.1415929204'
pi.toFraction()                     // [ '7853982301', '2500000000' ]
pi.toFraction(1000)                 // [ '355', '113' ]

// isNaN & isFinite (NaN & Infinity are valid Decimal values)
x = new BigNumber(NaN)              // "NaN"
y = new BigNumber(Infinity)         // "Infinity"
x.isNaN() && !y.isNaN() && !x.isFinite() && !y.isFinite() // true

// storage structure
x = new BigNumber(-123.456);
x.c                                 // [ 123, 45600000000000 ]  coefficient (i.e. significand)
x.e                                 // 2                        exponent
x.s                                 // -1                       sign

// multiple constructors
BigNumber.set({ DECIMAL_PLACES: 10 })       // set for default constructor
BN = BigNumber.clone({ DECIMAL_PLACES: 5 }) // create another constructor
x = new BigNumber(1)
y = new BN(1)
x.div(3)                            // '0.3333333333'
y.div(3)                            // '0.33333