/*
	it's always pass by value, but for objects the value of the variable is a reference.
	because of this, when you pass an object and change its members, those changes persist outside of the function.
	this makes it look like pass by reference.
	but if you actually change the value of the object variable you will see that the change does not persist, proving it's really pass by value.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var num = 10;
var obj1 = {item: 'unchanged'};
var obj2 = {item: 'unchanged'};

change(num, obj1, obj2);

console.log(num);		// 10
console.log(obj1.item); // 'changed'
console.log(obj2.item); // 'unchanged'

function change(a, b, c) {
	a = a * 10;
	b.item = 'changed';    // changing the value of the item property that was originally set to 'unchanged'
	c = {item: 'changed'}; // changing the reference to a new object (which immediately goes out of scope when the function exits)
}
/*
	num, obj1, and obj2 are references.
	
	If it was pure pass by value, then changing obj1.item would have no effect on the obj1 outside of the function.
	If it was pure pass by reference, then everything would have changed.
	num would be 100, and obj2.item would read 'changed'.

	Instead, the situation is that the item passed in is passed by value.
	But the item that is passed by value is itself a reference. Technically, this is called call-by-sharing.

	In practical terms, this means that if you change the parameter itself (as with num and obj2),
	that won't affect the item that was fed into the parameter.
	
	But if you change the INTERNALS of the parameter, that will propagate back up (as with obj1).
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	If you make local variables from an object, then everything will be just fine,
	since objects are passed by reference,
	if you change a property of that object by using your local variable, then the object itself will change.
	
	But if you make local variables from properties of an object, then there is something to be careful about:
	So you made a local variable from a property,
	now if you try to set a new value for this property by using your local variable,
	you're not changing the object, you're just changing what's inside you local variable.
	or in another words:
	when you make local variables from object properties, (unless that property itself is an object)
	you are not changing the object by changing what's inside you local variable.
	
	(since local variables are the fastest way to access data, the general advice is:
	if you're reading a property more than once, then make local variables of that property ONLY FOR READING,
	but when you want to set a new value for the property (writing to property) more than once,
	make local variables from the object, and then use that variable to set the new value for a property)
*/
var t = (function () {
	var p = {};
	p.a = {
		ss: 22
	};
	function ali() {
		var d = p.a,   // good local variable
			dd = d.ss; // bad local variable
		
		dd = 44;
	}
	function get() {
		return p.a;
	}
	return {
		ali: ali,
		get: get
	};
}());
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 var r = (function () {
	var a = '',
		b = 2,
		c = {b: 2},
	
	f = function (d, d1) {
		a += d;
		b += d1;
		// return c.b;
		return b;
	};
	
	return {
		f: f,
		a: b
	};
}());
r.f(2) // 4
r.f(3) // 7
r.a    // 2
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var t = (function () {
	var o = {p: 2};
	var v = 12;
	
	function set(v) {
		o.p = v;
	}
	function get() {
		return o;
	}
	
	return {
		a: o,
		b: o.p,
		set: set,
		get: get
		
	};
}());
t.a 		// Object {p: 2}
t.b 		// 2
t.get() 	// Object {p: 2}
t.set(56)
t.get()		// Object {p: 56}
t.a			// Object {p: 56}
t.b 		// 2
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function replace(ref) {
	ref = {};           // this code does _not_ affect the object passed
}

function update(ref) {
	ref.key = 'newvalue';  // this code _does_ affect the _contents_ of the object
}

var a = { key: 'value' };
replace(a);  // a still has its original value - it's unmodfied
update(a);   // the _contents_ of 'a' are changed
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// NEVER use this:
var a = b = c = [];
c.push('mamad');

c
'mamad'

b
'mamad'

a
'mamad'

// (because objects are passed by refference)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function alterObject(obj) {
  obj.foo = 'hello world';
}
var myObj = { foo: 'goodbye' };
alterObject(myObj);
alert(myObj.foo); // 'hello world' instead of 'goodbye'

function swap(a, b) {
	var tmp = a;
	a = b;
	b = tmp; //assign tmp to b
}
 var x = 1, y = 2;
 swap(x, y);
 alert('x is ' + x + ' y is ' + y); // 'x is 1 y is 2'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@