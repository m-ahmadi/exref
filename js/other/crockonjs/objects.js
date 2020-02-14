// An object is a dynamic collection of properties.
// Every property has key string that is unique within that object.
// If you add 2 properties with the same name, second one will replace first one.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Get, set and delete **/
// get
object.name
object[expression]

//set
object.name = value
object[expression] = value

// delete
delete object.name
delete object[expression]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Property **/
// A property is a named collection of attributes.
// Every property has a:
value:          // any javascript value
writeable:      boolean
enumerable:     boolean
configurable:   boolean
get:            function() { return value }
set:            function(value) {}
// There is two kinds of properties:
// Data properties,
// Accessor properties (get, set).
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** New in ES5 **/
Object.defineProperty(object, key, descriptor)
Object.defineProperties(object, object_of_descriptors)
Object.getOwnPropertyDescriptor(object, key)
Object.getOwnProperties(object)
Object.keys(object)
// Object.keys return an array of all enumerable owned keys.
// use forEach/map to apply a set functions to each property.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Object literals **/
var obj = {foo: bar};
var obj = Object.defineProperties(Object.create(Object.prototype), {
	foo: {
		value: bar,
		writeable: true,
		enumerable: true,
		configurable: true
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Accessor property **/
var obj = {};
obj.t = 100;
Object.defineProperty(obj, 'inch', {
	get: function () {
		return this.mm / 25.4;
	},
	set: function (value) {
		return this.mm * 25.4;
	},
	enumerable: true
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Prototypal Inheritance **/
// Other names: Delegation / Differential.
// You make an object and you add stuff to it only to make it different from the object that it inherits from.
// it only contain the differences.

// Make an object that you like.
// Create new instances that inherit from that object.
// Customize the new objects.

// Objects have a prototype attribute (it's not a property, it's an attribute of the object).
// prototype can be "object" or "null".
Object.getPrototypeOf(object)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** new prefix operator **/
// Do not use "new".
// Think prototypal!
// "new" does this:
function new(func, arguments) {
	var that  = Object.create(func.prototype),
		result = func.apply(that, arguments);
		return (result && typeof result === 'object') || that;
}
// Security Hazard with "new":
// What happens if you forget "new" prefix when calling the following constructor function? 
function Constructor(arg1, arg2) {
	this.prop1 = arg1;
	this.prop2 = arg2;
}
new Constructor('apple', 'orange'); // No problem
Constructor('apple', 'orange'); // Problem
// Now "this" variable inside the body of function means global object (window),
// which means you were saying:
window.prop1 = 'apple';
window.prop2 = 'orange';
// which means you are clobbering global object.
// There's no compile warning and no runtime warning.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** The constructor property problem **/
var word_count = {};
function bump_count(word) {
	if (word_count[word]) {
		word_count[word] += 1;
	} else {
		word_count[word] = 1;
	}
}
var words = ['salam', 'olaghe', 'aziz', 'salam', 'aziz', 'constructor'];
words.forEach(bump_count);
// Object {salam: 2, olaghe: 1, aziz: 2, constructor: "function Object() { [native code] }1"}

// If the word "constructor" is in the array this function will fail. Why?
// The object "word_count" already contained a property called "constructor" (inherited property),
// "constructor" property is a pointer to the "Object" function,
// when you want to read the number of occurrence for the word "constructor":
word_count.constructor
"function Object() { [native code] }1"
// Because we tried to add 1 to the a function property,
// it's like we tried to add number 1 to the string "function Object() {}",
// which results in type conversion of number 1 to string and adding '1' to 'function Object() {}'.

// The way you have to write this:
function bump_count(word) {
	if (typeof word_count[word] === 'number') {
		word_count[word] += 1;
	} else {
		word_count[word] = 1;
	}
}
// Object {salam: 2, olaghe: 1, aziz: 2, constructor: 1}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** The for in problem **/
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
// Creates an object that does not inherit anything.
// Objects created with "{}" or "new" inherit 11 properties (all methods):
// __defineGetter__()
// __defineSetter__()
// constructor()
// hasOwnProperty()
// isPrototypeOf()
// propertyIsEnumerable()
// toLocaleString()
// toString()
// valueOf()
enumerable: false
// Set the enumerable attribute to false when adding methods to prototypes.
// That keeps them out of "for in" enumeration.
Object.keys(object)
// Produces an array of strings which are:
// the keys of owned enumerable properties. (not inherited properties)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Keys must be strings **/
// "get" or "set" will take whatever key you provide force it to be a string
// If you pass it a number it'll turn it to a string
// If you pass it an array it'll turn it to string '[object]'

var t = {};
t[['two']]      =    56;  //   {two:     56}     Accessible with dot notation
t[['f','i']]    =    19;  //   {i:       19}     Accessible with dot notation
t[true]         =    21;  //   {true:    21}     Accessible with dot notation
t[0]            =    12;  //   {'0':     12}     Not Accessible with dot notation
t[[1]]          =    34;  //   {'1':     34}     Not accessible with dot notation
t[['3']]        =    78;  //   {'1':     78}     Not accessible with dot notation
t[[]]           =    91;  //   {'':      91}     Not Accessible with dot notation
t['s','i','x']  =    23;  //   {'s,i,x': 23}     Not Accessible with dot notation

// Look for "sealer/unsealer" example in "functions" file, "Closure" section.
function make_sealer() {
	var boxes = [], values = [];
	return {
		sealer: function (value) {
			//               0
			var box, i = boxes.length;
			box = {};
			boxes[i] = box; // boxes = [{}]
			values[i] = value; // value = ['salam']
			return box; // {}
		},
		unsealer: function (box) {
			return values[boxes.indexOf(box)]; // 'salam'
		}
	};
}
var t = make_sealer();
t.sealer('hello');   // returns an empty object.
t.unsealer('hello'); // returns undefined.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Objects have an extensible attribute **/
extensible: boolean
Object.isExtensible(object)
// Determines if an object is extensible
Object.preventExtensions(object)
// Turns the extensible off, it can never be turned back on,
// when you turn it off it means the object is full and you cannot add any new properties to it,
// doing so causes exceptions.
Object.seal(object)
// Does the same as "preventExtensions", but it also goes through all the objects' properties,
// and turns off the "configurable" bit so the can't be deleted or changed from data to accessor or back.
Object.freeze(object)
// Does the same as "preventExtensions" but it also sets everything to read only which means
// turns off everybody's "writeable" bit which results in a immutable object,
// numbers, strings, booleans are immutable objects, system can make them, you can't, but now you can.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Object and types **/
// We have 7 types:
// Number
// Boolean
// String
// Array
// Date
// RegExp
// Function
// They are all based on objects
// Everything inherit from objects
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@