// functions
function foo() {
	var bar = new LargeObject();
	bar.someCall();
}
/*
	when foo returns,
	the object which bar points to is automatically available for garbage collection,
	because there is nothing left that has a reference to it.
*/


function foo() {
	var bar = new LargeObject();
	bar.someCall();
	return bar;
}

// somewhere else
var b = foo();
/*
	we now have a reference to the object which survives the call and
	persists until the caller assigns something else to b (or b goes out of scope).
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// closures
function sum (x) {
	function sumIt(y) {
		return x + y;
	};
	return sumIt;
}

// Usage
var sumA = sum(4);
var sumB = sumA(3);
console.log(sumB); // Returns 7
/*
	the function object created within the execution context of the call to sum can’t be garbage collected,
	as it’s referenced by a global variable and is still very much accessible.
	it can still be executed via sumA(n).
*/

// here, can we access largeStr?
var a = function () {
	var largeStr = new Array(1000000).join('x');
	return function () {
		return largeStr;
	};
}();
// yes, we can, via a(), so it’s not collected.
// how about this one?
var a = function () {
	var smallStr = 'x';
	var largeStr = new Array(1000000).join('x');
	return function (n) {
		return smallStr;
	};
}();
//	We can’t access it anymore and it’s a candidate for garbage collection.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// timers
/*
	one of the worst places to leak is in a loop, or in setTimeout()/setInterval(),
	but this is quite common.
*/
var myObj = {
	callMeMaybe: function () {
		var myRef = this;
		var val = setTimeout(function () { 
			console.log('Time is running out!'); 
			myRef.callMeMaybe();
		}, 1000);
	}
};
myObj.callMeMaybe();
// every second “Time is running out!” 
myObj = null;
// the timer will still fire

/*
	myObj won't be garbage collected as the closure passed to setTimeout has to be kept alive in order to be executed.
	in turn, it holds references to myObj as it captures myRef.
	this would be the same if we'd passed the closure to any other function, keeping references to it.
	
	rreferences inside a setTimeout/setInterval call, such as functions,
	will need to execute and complete before they can be garbage collected.
*/

