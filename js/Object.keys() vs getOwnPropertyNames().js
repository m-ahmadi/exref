Object.keys(o)                // all own enumerable properties
Object.getOwnPropertyNames(o) // all own            properties

// example:
var o = {};
Object.defineProperties(o, {
	one: {enumerable: true, value: 'one'},
	two: {enumerable: false, value: 'two'}
});
Object.keys(o) // ['one']
Object.getOwnPropertyNames(o) // ['one', 'two']

// another example:
// length property of array objects is not enumerable
var x = ['w', 'x', 'y', 'z']
Object.keys(x)                 // [ '0', '1', '2', '3' ]
Object.getOwnPropertyNames(x)  // [ '0', '1', '2', '3', 'length' ]