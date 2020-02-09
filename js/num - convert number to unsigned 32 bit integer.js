/*
	Numbers in JavaScript are 64-bit floating point IEEE-754 (aka "Double").
	But JavaScript has some weirdness in how it handles numbers.
	
	The bitwise operations convert numbers to unsigned 32 bit integers.
	So even though the value looks like it shouldn't change,
	- it converts the number to a 32 bit unsigned integer.
*/
var a = 0;
a >>> 0;

// a signed right shift:
>>