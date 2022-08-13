// let and const are block-scoped
const log = console.log;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var a = 1;

if (true) { 
	var b = 2;
}

if (true) { 
	let c = 3;
}

log(b) // 2
log(c) // undefined

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let a = 2;
let a = 3; // SyntaxError: Identifier 'a' has already been declared

const b = 2;
b = 3;     // TypeError: Assignment to constant variable.

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function varTest() {
	var x = 1;
	if (true) {
		var x = 2;  // same variable!
		log(x);  // 2
	}
	log(x);  // 2
}

function letTest() {
	let x = 1;
	if (true) {
		let x = 2;  // different variable
		log(x);  // 2
	}
	log(x);  // 1
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@