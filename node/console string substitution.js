/*
	%o or %O	Outputs a JavaScript object.
				Clicking the object name opens more information about it in the inspector.
	%d or %i	Outputs an integer.
				Number formatting is supported, for example: 
				console.log("Foo %.2d", 1.1)
				will output the number as two significant figures with a leading 0: Foo 01
	%s			Outputs a string.
	%f			Outputs a floating-point value.
	Formatting is supported, for example:
	console.log("Foo %.2f", 1.1) will output the number to 2 decimal places: Foo 1.10
*/

var name = "mohammad"
var age = 28

console.log("name is %s, age is %d", name, age)
// name is mohammad, age is 28
console.log("name is %s, age is %d", age, name)
// name is 28, age is NaN