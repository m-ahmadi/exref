// es5
function link(height, color, url) {
	var height = height || 50;
	var color = color   || 'red';
	var url = url       || 'http://azat.co';
	
	// less hazardous:
	height = height || 50;
	color = color   || 'red';
	url = url ? url : 'http://azat.co';
}

// es6
function link(height=50, color='red', url='http://azat.co') {
	
}

// vs obj-destruct default values
function foo({a=2,b=4}={}) {console.log(a,b)}    // obj-destruct default value (better)
foo()  // 2 4
foo(0) // 2 4
function foo({a,b}={a:2,b:4}) {console.log(a,b)} // alternative
foo()  // 2 4
foo(0) // undefined undefined


// args can't have same name as in-scope labels
var foo = 7;
var bar = 8;
function hi(foo=foo, bar) { return foo * bar }
hi()            // ReferenceError: Cannot access 'foo' before initialization
hi(3)           // NaN
hi(undefined,4) // ReferenceError: Cannot access 'foo' before initialization
hi(null,4)      // 0
hi(3,4)         // 12