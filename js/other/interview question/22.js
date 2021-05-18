//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	What will the following code output to the console?
	Explain your answer.
*/
console.log(
	(function f (n) {
		return (
			(n > 1) ? n * f(n-1) : n
		);
	}(10))
);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	The code will output the value of 10 factorial (i.e., 10!, or 3,628,800).

	Here’s why:

	The named function f() calls itself recursively,
	until it gets down to calling f(1) which simply returns 1.
	Here, therefore, is what this does:
	
	f(1):  returns n,          which is 1
	f(2):  returns 2  * f(1),  which is 2
	f(3):  returns 3  * f(2),  which is 6
	f(4):  returns 4  * f(3),  which is 24
	f(5):  returns 5  * f(4),  which is 120
	f(6):  returns 6  * f(5),  which is 720
	f(7):  returns 7  * f(6),  which is 5040
	f(8):  returns 8  * f(7),  which is 40320
	f(9):  returns 9  * f(8),  which is 362880
	f(10): returns 10 * f(9),  which is 3628800
*/