//	Put "use strict"; at the top of the function.
//	DO NOT put it at the begining of the entire code.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														First
	Strict mode makes it impossible to accidentally create global variables.
	In normal JavaScript mistyping a variable in an assignment:
	creates a new property on the global object and continues to "work"
	(although future failure is possible: likely, in modern JavaScript).
	Assignments which would accidentally create global variables instead throw in strict mode:
*/
"use strict";
mistypedVaraible = 17; // Assuming a global variable mistypedVariable exists this line throws a ReferenceError due to the misspelling of variable
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														Second
	Strict mode makes assignments which would otherwise silently fail throw an exception.
	For example, NaN is a non-writable global variable.
	In normal code assigning to NaN does nothing; the developer receives no failure feedback.
	In strict mode assigning to NaN throws an exception.
	Any assignment that silently fails in normal code:
	(assignment to a non-writable property,
	assignment to a getter-only property,
	assignment to a new property on a non-extensible object)
	will throw in strict mode:
*/
"use strict";

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // throws a TypeError
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														Third
	Strict mode makes attempts to delete undeletable properties throw
	(where before the attempt would simply have no effect):
*/
"use strict";
delete Object.prototype; // throws a TypeError
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														Fourth
	Strict mode prior to Gecko 34 requires that all properties named in an object literal be unique.
	Normal code may duplicate property names, with the last one determining the property's value.
	But since only the last one does anything, the duplication is simply a vector for bugs,
	if the code is modified to change the property value other than by changing the last instance.
	Duplicate property names are a syntax error in strict mode:
*/
"use strict";
var o = { p: 1, p: 2 }; // !!! syntax error
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														Fifth
	Strict mode requires that function parameter names be unique.
	In normal code the last duplicated argument hides previous identically-named arguments.
	Those previous arguments remain available through arguments[i], so they're not completely inaccessible.
	Still, this hiding makes little sense and is probably undesirable (it might hide a typo, for example),
	so in strict mode duplicate argument names are a syntax error:
*/
function sum(a, a, c){ // !!! syntax error
	"use strict";
	return a + b + c; // wrong if this code ran
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														Sixth
	Strict mode in ECMAScript 5 forbids octal syntax.
	Octal syntax isn't part of ECMAScript 5,
	but it's supported in all browsers by prefixing the octal number with a zero: 0644 === 420 and "\045" === "%".
	In ECMAScript 6 Octal number is supported by prefixing a number with "0o". i.e. 
*/
var a = 0o10; // ES6: Octal
/*
	Novice developers sometimes believe a leading zero prefix has no semantic meaning,
	so they use it as an alignment device,
	but this changes the number's meaning!
	Octal syntax is rarely useful and can be mistakenly used,
	so strict mode makes octal a syntax error:
*/
"use strict";
var sum = 015 + // !!! syntax error
          197 +
          142;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														Seventh
	Strict mode in ECMAScript 6 forbids setting properties on primitive values.
	Without strict mode, setting properties is simply ignored (no-op),
	with strict mode, however, a TypeError is thrown.
*/
(function() {
	"use strict";
	false.true = "";           // TypeError
	(14).sailing = "home";     // TypeError
	"with".you = "far away";   // TypeError
}());
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														Eighth
	In ECMAScript 5 Strict mode,
	The context of a contextless function call is not set to the global (window) object. 
	It's set to undefined instead.
*/
//	An example:
function isStrictMode(){
	return !this;
} 
/*
	returns false, since 'this' refers to global object and 
	'!this' becomes false
*/
function isStrictMode(){   
	"use strict";
	return !this;
} 
/* 
	returns true, since in strict mode the keyword 'this'
	does not refer to global object, unlike traditional JS. 
	So here, 'this' is 'undefined' and '!this' becomes true.
*/