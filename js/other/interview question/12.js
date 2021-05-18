//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Write a sum method which will work properly when invoked using either syntax below.
*/
console.log( sum(2,3) );   // Outputs 5
console.log( sum(2)(3) );  // Outputs 5
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	There are (at least) two ways to do this:
	METHOD 1
*/
function sum(x) {
	if (arguments.length == 2) {
		return arguments[0] + arguments[1];
	} else {
		return function (y) {
			return x + y;
		};
	}
}
/*
	In JavaScript, functions provide access to an arguments object which provides access to the actual arguments passed to a function.
	This enables us to use the length property to determine at runtime the number of arguments passed to the function.

	If two arguments are passed, we simply add them together and return.
	Otherwise, we assume it was called in the form sum(2)(3),
	so we return an anonymous function that adds together the argument passed to sum() (in this case 2)
	and the argument passed to the anonymous function (in this case 3).

	METHOD 2
*/
function sum(x, y) {
	if (y !== undefined) {
		return x + y;
	} else {
		return function(y) {
			return x + y;
		};
	}
}
/*
	When a function is invoked,
	JavaScript does not require the number of arguments to match the number of arguments in the function definition.
	If the number of arguments passed exceeds the number of arguments in the function definition,
	the excess arguments will simply be ignored.
	On the other hand, if the number of arguments passed is less than the number of arguments in the function definition,
	the missing arguments will have a value of undefined when referenced within the function.
	
	So, in the above example, by simply checking if the 2nd argument is undefined,
	we can determine which way the function was invoked and proceed accordingly.
/*