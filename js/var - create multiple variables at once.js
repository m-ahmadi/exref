var a = 2, b = 2;

// es6
let [ a, b, c ] = [...Array(3)]    // all undefined
let [ a, b, c ] = Array(3).fill(2) // all 2
let [ a, b, c ] = [2,4,7]          // different values for each

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// automatic deconstruct using eval
var obj = {myAge: 35, yourAge: 47};
eval('var {'+ Object.keys(obj).join() +'} = obj;'); // only works with var (let & const won't work)

var arr = [35, 47];
var names = ['myAge', 'yourAge', 'boooooooooooo'];
eval('const ['+names.join()+'] = arr;')
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// pitfalls of multiple assignment construct

(function () {
	var a = b = 2;
	let a = b = 2; // same
	
	// expected to be:
	var b = 2;
	var a = b;

	// actually is:
	b = 2;
	var a = b;
})();
a // undefined
b // 2
/*
	es5 strict mode: ReferenceError: b is not defined
	(b ends up being a global variable, since it's not preceded by the var keyword)
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@