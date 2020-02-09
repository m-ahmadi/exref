Object.keys(object).forEach(function (i) {
	
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Functions inherited from a prototype are included in the "for in" enumeration.
var obj = {};
obj.a = 'a';
obj.b = 'b';
obj.c = 'c';
for (name in obj) {
	if ( obj.hasOwnProperty(name) ) {
		alert(name);
	}
}
// This will fail if object has a property named "hasOwnProperty"
obj.hasOwnProperty = 'salam';
for (name in obj) {
	if ( obj.hasOwnProperty(name) ) {
		alert(name);
	}
}
// Results:   Uncaught TypeError: object.hasOwnProperty is not a function
// Correct way to enumerate through non-inherited properties: (using someone else's "hasOwnProperty" method)
for (name in obj) {
	if ( Object.prototype.hasOwnProperty.call(obj, name) ) {
		alert(name);
	}
}
// Other Solutions in ES5:
Object.create(null)
/*
	Creates an object that does not inherit anything.
	Objects created with "{}" or "new" inherit 11 properties (all methods):
	__defineGetter__()
	__defineSetter__()
	constructor()
	hasOwnProperty()
	isPrototypeOf()
	propertyIsEnumerable()
	toLocaleString()
	toString()
	valueOf()
*/
enumerable: false
// Set the enumerable attribute to false when adding methods to prototypes.
// That keeps them out of "for in" enumeration.
Object.keys(object)
// Produces an array of strings which are:
// the keys of owned enumerable properties. (not inherited properties)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var man = {
	hands: 2,
	legs: 2,
	heads: 1
};
if (typeof Object.prototype.clone === "undefined") {
	Object.prototype.clone = function () {};
}
for (var i in man) {
	if ( man.hasOwnProperty(i) ) {
		console.log( i, ":", man[i] );
	}
}
/*	result in the console
		hands : 2
		legs : 2
		heads : 1
*/

for (var i in man) {
	console.log( i, ":", man[i] );
}
/*	result in the console
		hands : 2
		legs : 2
		heads : 1
		clone: function()
*/
// better use:
for (var i in man) {
	if ( Object.prototype.hasOwnProperty.call(man, i) ) {
		console.log( i, ":", man[i] );
	}
}
// or
var i,
	hasOwn = Object.prototype.hasOwnProperty;
for (i in man) {
	if (hasOwn.call(man, i)) { // filter
	console.log(i, ":", man[i]);
	}
}