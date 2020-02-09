Object.prototype.constructor

/*
	Returns a reference to the Object constructor function that created the instance object.
	Note that the value of this property is a reference to the function itself, not a string containing the function's name.
	The value is only read-only for primitive values such as 1, true and "test".
	
	All objects will have a constructor property.
	Objects created without the explicit use of a constructor function
	(i.e. the object and array literals)
	will have a constructor property that points to the Fundamental Object constructor type for that object.
*/
var o = {};
o.constructor === Object; // true

var o = new Object;
o.constructor === Object; //true

var a = [];
a.constructor === Array; // true

var a = new Array;
a.constructor === Array //true

var n = new Number(3);
n.constructor === Number; // true