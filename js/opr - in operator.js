/*
	The in operator checks the existance of a key/index in an object.
	It doesn't check the value of a key/index, only existance of it.
	
	For arrays, it returns true if the operand is a valid index, since arrays are,
	- like special-case objects where the properties are simply named 0, 1, 2, ...
	Avoid in with arrays.
*/
var o;
o = [1, 2];
1 in x // true
3 in x // false
0 in x // true

o = {a: '1', b: 2};
'a' in o // true
'c' in o // false
'b' in o // true