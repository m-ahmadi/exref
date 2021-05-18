// this is ok but not needed anymore with es6 default parameters
function ali(a) {
	a = a ? a : 'default value'; // checks for truthy value, you can check for anything you'd like
	console.log(a);
}
ali(2); // 2
ali();  // 'default value' 

// ES6
function ali(a = 'default value') {
	console.log(a);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// hazard #1
function makePerson(favoriteColor, name, age) {
	if (arguments.length < 3) {
		favoriteColor = 'green';
		name = arguments[0];
		age = arguments[1];
	}
	
	return {
		name: name,
		age: age,
		favoriteColor: favoriteColor
	};
}
var person = makePerson('Joe', 18);

console.log(person); // {name: 'green', age: 'green', favoriteColor: 'green'}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// hazard #2 (less hazardous with let and const)
var a = 'hello';
function fn(a) {
	var a;
	console.log(a);
}
fn(a); // 'hello' (instead of undefined)

function fn(a) {
	let a;
	console.log(a);
}
fn(a); // Uncaught SyntaxError: Identifier 'a' has already been declared

function fn(a) {
	const a = a;
	console.log(a);
}
fn(a); // Uncaught SyntaxError: Identifier 'a' has already been declared