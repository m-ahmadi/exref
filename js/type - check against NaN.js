typeof NaN === 'number' // true
NaN === NaN             // false
NaN !== NaN             // true

// < es5
if (typeof isNaN !== 'function' && 
	typeof Number.isNaN !== 'function') {
	var isNaN = function (v) {
		return v !== NaN ? false : true;
	};
}
// es5
isNaN() // imperfect

// es6
Number.isNaN() // best



// more
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true
isNaN([1, 2]);    // true

isNaN([1]);       // false
isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN('37');      // false: "37" is converted to the number 37 which is not NaN
isNaN('37.37');   // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN('123ABC');  // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
isNaN('');        // false: the empty string is converted to 0 which is not NaN
isNaN(' ');       // false: a string with spaces is converted to 0 which is not NaN

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

// This is a false positive and the reason why isNaN is not entirely reliable
isNaN('blabla');   // true: "blabla" is converted to a number. 
                   // Parsing this as a number fails and returns NaN