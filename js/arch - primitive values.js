/*
	A primitive value is data that is not an object and has no member.
	There are 6 primitive data types in JavaScript:
		string, number, boolean, null, undefined, symbol (new in ES6).
	All primitives are immutable (cannot be changed).

	Primitive values do not have any properties or methods?
	But what about:
		"abc".length
		3
		"abc".charAt(0)
		"a"
		
	It's because of:	The Primitive wrapper objects in JavaScript
	Except for null and undefined,
	all primitive values have object equivalents that wrap around the primitive values:
		String
		Number
		Boolean
		Symbol
	
	You never see the primitiveness of primitive values (except their immutability), because they get wrapped natively.
	So the primitive values are more like a concept to know.
*/
var a;

a = "salam";
a = String("salam");
a = new String("salam").valueOf();

a.length
5
a.length = 11
a.length
5

a = 12
a.asad = "khiar"
a.asad // undefined