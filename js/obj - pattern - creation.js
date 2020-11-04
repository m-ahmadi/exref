// factory with freeze (use whenever possible)
function constructor() {
	let { member } = spec;
	const reuse = other_constructor(spec);
	const method = function () {
		// spec, member, reuse, method
	};
	return Object.freeze({
		method,
		goodness: reuse.goodness
	});
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// factory
function newGender(type) {
	let instance = {};
	instance.gender = type;
	
	instance.sayGender = function () {
		console.log(instance.gender);
		return this;
	};
	
	return instance;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// constructor function
var p = new p();
function P() {
	this.firstName = 'mohammad';
	this.lastName = 'ahmadi';
}
P.prototype.fullName = function(arg) {
	alert(this.firstName +' '+ arg +' '+ this.lastName);
}
P.prototype.el = (function(){
	function a(){alert('hello Im metod a of el');}
	function b(){alert('hello Im metod b of el');}
	function c(){alert('hello Im metod c of el');}
	return {a:a, b:b, c:c}
}());
var ss = new P();

// multiple constructors inherit the same
function A() { this.name = 'foo' }
function B() { this.age = 'bar' }
A.prototype.milk = 'acidafilus';
B.prototype = A.prototype;
var a = new A();
var b = new B();

// anonymous constructor
var inst = new function () {
	this.foo = 'bar';
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// immediate init
({
	foo: 600,
	bar: 400,
	doit: function () {
		return this.foo + 'x' + this.bar;
	},
	init: function () {
		console.log(this.doit());
	}
}).init();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// misc other forms (just for reference)
var p = function() {};
p.prototype = (function () {
	var el = (function () {
		var el = function () {};
		el.prototype = (function () {
			function say() {
				alert('voolek');
			}
			return {say : say};
		}());
		var El = new el();
		return {El: El};
	}());
	return {el : el};
}());

// inspired from lightbox
(function() {
	var c;
	c = (function() {
		function b() {
			this.firstname = 'mohammad';
			this.lastname = 'ahmadi';
		}
		b.prototype.fullName = function() {
			alert(this.firstname +' '+ this.lastname);
		};
		return b;
	})();
	d = (function() {
		function c(b) {
			this.p = 'f';
		}
		c.prototype.metod = function(arg) {
			alert('metod :' + arg)
		};
		return c;
	})();
	return new c();
}).call(this);