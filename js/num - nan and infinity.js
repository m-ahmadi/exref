// parsing something that isn't a number results in NaN
// Number.isNaN() helps to detect those cases
parseInt("hello", 10)                 // NaN
Number.isNaN( parseInt("hello", 10) ) // true

//	division by zero results in Infinity:
1 / 0 // Infinity

//	both NaN and Infinity are of type "number":
typeof NaN              // "number"
typeof Infinity         // "number"
NaN === NaN             // false (NaN is not equal to anything)
Infinity === Infinity   // true