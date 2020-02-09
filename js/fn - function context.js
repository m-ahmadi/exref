var a = (function () {
	//'user strict';
	var foo = function () {
		a.bar();	// bar context: a ojbect (this === a)
		bar();		// bar context: this === global || undefined (ES5 strict mode)
	};
	
	var bar = function () {
		console.log(this);
	};
	
	return {
		foo: foo,
		bar: bar
	};
}());
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var myObject = {
	foo: 'bar',
	func: function () {
		var self = this;
		console.log(this.foo);
		console.log(self.foo);
		(function () {
			console.log(this.foo); // global || undefined (ES5 strict mode)
			console.log(self.foo);
		}());
	}
};
myObject.func();

/*
	bar
	bar
	undefined
	bar
*/