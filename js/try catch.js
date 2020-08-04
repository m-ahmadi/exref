try {
	const x = 1;
	x = 2;
} catch (e) {
	e.stack
	// "TypeError: Assignment to constant variable.
	//    at <anonymous>:3:4"
	e.name       // "TypeError"
	e.message    // "Assignment to constant variable."
	e.toString() // "TypeError: Assignment to constant variable."
}

try {
	new URL('foo')
} catch {
	console.log('busted')
}