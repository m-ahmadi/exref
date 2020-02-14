//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	What would the following lines of code output to the console?
*/
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	The code will output the following four lines:

0 || 1 = 1
1 || 2 = 1
0 && 1 = 0
1 && 2 = 2

/*
	In JavaScript, both || and && are logical operators,
	that return the first fully-determined “logical value” when evaluated from left to right.
	
	The or (||) operator, In an expression of the form X || Y:
	X is first evaluated and interpreted as a boolean value.
	If this boolean value is true, then true (1) is returned and Y is not evaluated,
	since the “or” condition has already been satisfied.
	If this boolean value is “false”,
	though, we still don’t know if X||Y is true or false until we evaluate Y,
	and interpret it as a boolean value as well.

	Accordingly, 0 || 1 evaluates to true (1), as does 1 || 2.

	The and (&&) operator, In an expression of the form X && Y:
	X is first evaluated and interpreted as a boolean value.
	If this boolean value is false,
	then false (0) is returned and Y is not evaluated,
	since the “and” condition has already failed.
	If this boolean value is “true”,
	though, we still don’t know if X && Y is true or false until we evaluate Y,
	and interpret it as a boolean value as well.

	However, the interesting thing with the && operator is that when an expression is evaluated as “true”,
	then the expression itself is returned.
	This is fine, since it counts as “true” in logical expressions,
	but also can be used to return that value when you care to do so.
	This explains why, somewhat surprisingly,
	1 && 2 returns 2
	(whereas you might it expect it to return true or 1).
*/