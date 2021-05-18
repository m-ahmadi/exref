//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	What is the output out of the following code? Explain your answer.
*/
var a = {},
    b = {key: 'b'},
    c = {key: 'c'};

a[b] = 123;
a[c] = 456;

console.log( a[b] );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	The output of this code will be 456 (not 123).

	The reason for this is as follows:
	When setting an object property,
	JavaScript will implicitly stringify the parameter value.
	In this case, since b and c are both objects,
	they will both be converted to "[object Object]".
	As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably.
	Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].
*/