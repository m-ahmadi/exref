function* name(...?args) {
	args            // always at init values
	
	yield 1;        // pass value from body    to outside ( return as next().value )
	var x = yield;  // pass value from outside to body    ( grab arg passed to next() )
	f(yield);       // ↑...
	
	yield* another; // delegate
	
	return;  // short-circut last yield
	yield 2; // unreachable
}

var name = function* () {}      // function expression
var obj = {  *name () {}      } // object   property
class Obj {  *name () {}      } // class    method
class Obj {  *['name'] () {}  } // computed property
var obj = {  *['name'] () {}  } // ↑...
var name = new GeneratorFunction(...?args, functionBody='') // constructor

var generator = name()
Generator implements @@iterator, { next: ()=>{done,value} }
Generator.prototype.next(value)
Generator.prototype.return(value)
Generator.prototype.throw(exception)

// first next call executes from start until first yield (total .next() calls === yields + 1)

function* f() {}
var obj = new f(); // TypeError: f is not a constructor (not constructable)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

//===============================================
// basic
function* foo(arg1, arg2) {
	var n = 0;
	n += 10;
	n -= 6;
	console.log(arg1, arg2); // always the init value upon next() calls
	yield n;
	
	n **= 2;
	console.log(arg1, arg2);
	yield n;
	
	n /= 2;
	console.log(arg1, arg2);
	yield n;
}
var g = foo('hi', 'dude');
g.next().value // 4
g.next().value // 16
g.next().value // 8
g.next().value // undefined

//===============================================
// send value to generator
function* foo(x) {
	yield x +' world';
	var a = yield;
	var b = yield;
	var c = yield;
	return [a,b,c];
}
var g = foo('hi');
g.next().value  // 'hi world'
g.next()
g.next(1)
g.next(2)
g.next(3).value // [3, 4, 5]

// another
function* foo() {
	console.log(0);
	console.log(1, yield);
	console.log(2, yield);
	console.log(3, yield);
}
var g = foo();
g.next()        // 0
g.next('hello') // 1 pretzel
g.next('dear')  // 2 california
g.next('world') // 3 mayonnaise
//===============================================
// delegate
function* another(i) {
	yield i + 1;
	yield i + 2;
	yield i + 3;
}
function* foo(i) {
	yield i;
	yield* another(i);
	yield i + 60;
}
var g = foo(10);

g.next().value // 10
g.next().value // 11
g.next().value // 12
g.next().value // 13
g.next().value // 70
//===============================================
// function expression
var foo = function* () {
	yield 10;
	yield 20;
};
var gen = foo();
gen.next()
//===============================================
// object property
var obj = {
	*generator () {
		yield 'a';
		yield 'b';
	}
};
var gen = obj.generator();
gen.next()
//===============================================
// class method
class Foo {
	*generator () {
		yield 1;
		yield 2;
		yield 3;
	}
}
var f = new Foo();
var gen = f.generator();
//===============================================
// computed property
class Foo {
	*[Symbol.iterator] () {
		yield 1;
		yield 2;
	}
}
var bar = {
	*[Symbol.iterator] () {
		yield 'a';
		yield 'b';
	}
};
Array.from(new Foo) // [ 1, 2 ]
Array.from(bar)     // [ 'a', 'b' ]
//===============================================