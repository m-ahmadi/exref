arr.forEach(callback(currentValue, ?index, ?array), ?thisArg);

// there is no way to stop or break a forEach() loop other than by throwing an exception.
// with arrow function callback, thisArg is overwritten as arrow functions lexically bind this. (outter lexical scope)

var arr = ['a','b','c','d','e'];
var someObj = {name: 'mohammad javade', famil: 'ghandi'};

arr.forEach(function (item, index, array) {
	console.log(item);	// c
	console.log(index); // 2
	console.log(array);
	console.log(this.name, this.famil); // mohammad javade ghandi
	
	return; // same as continue in for loops (skip this iteration and go to the next one)
}, someObj);


arr.forEach(i => {
	console.log(this); // Window
}, someObj);