function isInt(n) {
	return n % 1 === 0;
}

Number.isInteger()

Number.isSafeInteger() // between -9007199254740991 and 9007199254740991
Number.isSafeInteger(9007199254740991)  // true
Number.isSafeInteger(-9007199254740991) // true
Number.isSafeInteger(9007199254740992)  // false
Number.isSafeInteger(-9007199254740992) // false