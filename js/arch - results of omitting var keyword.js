// Creating a variable in a function without var keyword will causes that variable to be GLOBAL.
// These GLOBAL variables are not real variables, they become properties of the GLOBAL object
// ES5 strict mode:  ReferenceError

(function () {
	var a = 1;
	b = 2; // GLOBAL
}());

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//													implicit vs explicit globals
/*
	Globals created with var (those created in the program outside of any function) cannot be deleted.
	Implied globals created without var (regardless if created inside functions) can be deleted.
	This shows that implied globals are technically not real variables,
	but they are properties of the global object.
	Properties can be deleted with the delete operator whereas variables cannot:
*/
var vvar = 1;
novar = 2;

(function () {
	fromfunc = 3;
}());

delete vvar; 		// false
delete novar; 		// true
delete fromfunc; 	// true

vvar; 		// 1
novar; 		// undefined
fromfunc;	// undefined