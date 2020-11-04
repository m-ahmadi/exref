/*
	__proto__	is the actual object that is used in the lookup chain to resolve members
	prototype	is the object that is used to build __proto__ when you create an object with new
	
	note:
	only function objects have a prototype property
	an object (literal/made-width-new) does not have a prototype property
*/
function Ali() {}
Ali.prototype // object

var a = new Ali()
a.prototype // undefined