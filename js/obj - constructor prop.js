Object.prototype.constructor

/*
	a reference to the constructor function that created the instance object
	
	a reference to the function itself (not a string containing the function's name)
	
	read-only for primitive values (1, true, 'test')
	
	all objects have it
	
	in objects created without a constructor function (literals) it points to Object constructor type for that object
*/

var o = {};
o.constructor === Object // true

var o = new Object;
o.constructor === Object // true

var a = [];
a.constructor === Array  // true

var a = new Array;
a.constructor === Array  // true

var n = new Number(3);
n.constructor === Number // true