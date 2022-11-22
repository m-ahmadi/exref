isInt   = n => n % 1 === 0;
isFloat = n => n % 1 !== 0;

isInt   = Number.isFinite(n) && Number.isInteger(n);
isFloat = Number.isFinite(n) && !Number.isInteger(n);


2.5 % 1 // 0.5
2 % 1   // 0


Number.isInteger(0)                       // true
Number.isInteger(1)                       // true
Number.isInteger(-100000)                 // true
Number.isInteger(99999999999999999999999) // true

Number.isInteger(0.1)                     // false
Number.isInteger(Math.PI)                 // false

Number.isInteger(NaN)                     // false
Number.isInteger(Infinity)                // false
Number.isInteger(-Infinity)               // false
Number.isInteger('10')                    // false
Number.isInteger(true)                    // false
Number.isInteger(false)                   // false
Number.isInteger([1])                     // false

Number.isInteger(5.0)                     // true
Number.isInteger(5.000000000000001)       // false
Number.isInteger(5.0000000000000001)      // true, because of loss of precision
Number.isInteger(4500000000000000.1)      // true, because of loss of precision


Number.isSafeInteger() // between -9007199254740991 and 9007199254740991
Number.isSafeInteger(9007199254740991)  // true
Number.isSafeInteger(-9007199254740991) // true
Number.isSafeInteger(9007199254740992)  // false
Number.isSafeInteger(-9007199254740992) // false
