//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Consider the code snippet below. What will the console output be and why?
*/
(function (x) {
	return (function (y) {
		console.log(x);
	}(2));
}(1));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	The output will be 1,
	even though the value of x is never set in the inner function.
	Here’s why:
	
	As explained in our JavaScript Hiring Guide, a closure is a function,
	along with all variables or functions that were in-scope at the time that the closure was created.
	In JavaScript, a closure is implemented as an “inner function”;
	i.e., a function defined within the body of another function.
	An important feature of closures is that an inner function still has access to the outer function’s variables.
	
	Therefore, in this example, since x is not defined in the inner function,
	the scope of the outer function is searched for a defined variable x,
	which is found to have a value of 1.
*/