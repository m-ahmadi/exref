//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// prototype chain
var obj;
function Constructor() {} // constructor now automaticaly has a prototype property
Constructor.prototype     // and that prototype alsow has a prototype
obj = new Constructor();  // makes an object from Constructor
/*
  our newly created object inherits:
  members of    Constructor.prototype + Object.prototype
*/
o = Object.create(null); //  ----> null
o = { a:'a', b: 12};     //  ----> Object.prototype    ---->   null
o = [1, 2];              //  ----> Array.prototype     ---->   Object.prototype    ---->   null
o = 'abc';               //  ----> String.prototype    ---->   Object.prototype    ---->   null
o = 1;                   //  ----> Number.prototype    ---->   Object.prototype    ---->   null
o = false;               //  ----> Boolean.prototype   ---->   Object.prototype    ---->   null
o = function () {}       //  ----> Function.prototype  ---->   Object.prototype    ---->   null
function Co{} new Co()   //  ----> Co.prototype        ---->   Object.prototype    ---->   null  

Object.prototype
  hasOwnProperty
  isPrototypeOf
  propertyIsEnumerable
  toLocaleString
  toString
  valueOf
//--------------------------------------------------------------------------------
// let's assume we have object o, with its own properties a and b:
{a: 1, b: 2}
// o.[[Prototype]] has properties b and c:
{b: 3, c: 4}
/*
  finally, o.[[Prototype]].[[Prototype]] is null.
  this is the end of the prototype chain as null,
  by definition, null has no [[Prototype]].
  thus, the full prototype chain looks like:
*/
{a:1, b:2} ----> {b:3, c:4} ----> null

console.log(o.a); // 1
// is there an 'a' own property on o? Yes, and its value is 1.
console.log(o.b); // 2
// is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited. 
console.log(o.c); // 4
// is there a 'c' own property on o? No, check its prototype.
// is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
console.log(o.d); // undefined
// is there a 'd' own property on o? No, check its prototype.
// is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// prototypal (all public)
var myMammal = {
  name : 'Herb the Mammal',
    get_name : function ( ) {
    return this.name;
  },
  says : function ( ) {
    return this.saying || '';
  }
};

var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.get_name = function ( ) {
  return this.says( ) + ' ' + this.name + ' ' + this.says( );
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// me
obj = {},                 // obj = Object.create(Object.prototype)
obj = Object.create(Object.prototype);    // obj = {}
obj = Object.create(null);          // inherits nothing
obj = Object.create({});
obj = Object.create(somethingToInheritFrom);

var t = {a: 'a', b: 'b'};         // there's no way to make an object literal inherit from someone, except one bad way
t.constructor.prototype.z = 'z';      // now our object inherits z prop but from now on, so is every other object
var s = {g: 'g'};             // now s has z too

// Object.create solution:
var t = Object.create({
  z: 'z'
});
// or:
function extend(proto, literal) {
  var result = Object.create(proto);
  Object.keys(literal).forEach(function(key) {
    result[key] = literal[key];
  });
  return result;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// property shadowing
o = Object.create({
  b: 3,
  c: 4
});
o.a = 1;
o.b = 2
console.log(o.a); // 1
console.log(o.b); // 2  This is called "property shadowing", own property b has precedence over prototype.b
console.log(o.c); // 4
console.log(o.d); // undefined
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* emulating ES5 Object.create in ES3
  there's no way to make our fake Object.create to do:
  Object.create(null)
  it means that you cannot make an object that inherits nothing,
  and you are going to inhert Object.prototype members no matter what in ES3.
*/
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// classical
// when a function object is created, the function constructor that produces the function object runs some code like this:
function Person() {
  this.prototype = {constructor: this}
}

// example:
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

function Rectangle() {
  Shape.call(this);
}
// Rectangle  extends   Shape
Rectangle.prototype = Shape.prototype;
Rectangle.prototype = new Shape();
  //Rectangle.prototype = Object.create(Shape.prototype);
    //Rectangle.prototype = Shape.prototype;

var rect = new Rectangle();

rect instanceof Rectangle;  // true
rect instanceof Shape;    // true

//-----------------------------------------------------
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype); // inherit
mixin(MyClass.prototype, OtherSuperClass.prototype); // mixin

MyClass.prototype.myMethod = function() {
  // do a thing
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@