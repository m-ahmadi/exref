//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// function declrataion
function fn() {
	// body
}
/*
	also called: "function statement"
	defined at parse-time for a script block
	a named function
	you can get the name of the function programmatically
	you cannot conditionally define functions this way
*/

fn(); // no error
function fn() {}

fn.toString()
"function fn() {}"
fn.name // name property is an extension of the language and not part of the ECMA standard
"fn"
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// function expression
var fn = function () {
	// body
};
/*
	defined at run-time for a script block
	a variable that has an anonymous function assigned to it
	overwrites function expression inside of a self-executing anonymous function
*/

fn(); // error
var fn = function () {};

fn.toString()
"function () {}"
fn.name // name property is an extension of the language and not part of the ECMA standard
""
//-----------------------------------------------------------------------------------------------------
//	another example
if (test) {
	//	defines fnc irrespective of test's value
	//	unless 'use strict' is in effect, in which case it simply raises an error
	function fn() {
		
	}
}

var o = (function () {
	// the order in which they are defined doesn't matter, value of "daFn" will always be the function declration
	var fn = function () {
		console.log('declration');
	};
	function fn () {
		console.log('expression');
	}
	return {
		daFn: fn
	};
}());
//-----------------------------------------------------------------------------------------------------
//	named function expression
/*
	a specific case of a function expression
	CANNOT get the name of the function programmatically using:		function expression
	CAN    get the name of the function programmatically using:		named function expression
*/
var fn = function fn() {
	
}
fn.toString()
"function fn() {}"
fn.name // name property is an extension of the language and not part of the ECMA standard
"fn"
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@