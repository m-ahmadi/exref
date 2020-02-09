/*
	remember undefined is a value in javascript.
	undefined is the default value for variables (that haven't been assigned a value)
*/
var a; // a is undefined

/*
	if you ask an object for a property that it doesn't have,
	you don't get an error, it doesn't throw,
	it just returns the undefined value.
*/
var obj = { a: 'v' };
obj.b // undefined