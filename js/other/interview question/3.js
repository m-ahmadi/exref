//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	What will the code below output to the console and why?
*/
var myObject = {
	foo: "bar",
	func: function () {
		var self = this;
		console.log("outer func:  this.foo = " + this.foo);
		console.log("outer func:  self.foo = " + self.foo);
		(function () {
			console.log("inner func:  this.foo = " + this.foo);
			console.log("inner func:  self.foo = " + self.foo);
		}());
	}
};
myObject.func();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	The above code will output the following to the console:
	outer func:  this.foo = bar
	outer func:  self.foo = bar
	inner func:  this.foo = undefined
	inner func:  self.foo = bar
	
	In the outer function, both this and self refer to myObject and therefore both can properly reference and access foo.
	In the inner function, though, this no longer refers to myObject.
	As a result, this.foo is undefined in the inner function,
	whereas the reference to the local variable self remains in scope and is accessible there.
	(Prior to ECMA 5, this in the inner function would refer to the global window object; whereas, as of ECMA 5,
	this in the inner function would be undefined.)
*/