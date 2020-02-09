class Rectangle {
	// field declarations:
	width = 0; // public
  height;
	#left = 0;  // private
  #right;
  constructor(width, height) {
		// instance properties: (must be defined inside of class methods)
		this.width = width;
    this.height = height;
  }
  // method:
  calcArea() {
    return this.width * this.height;
  }
	// static method: (called without instantiating the class and cannot be called through a class instance.)
	static distance(a, b) {
		const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
	// getter:
  get area() {
    return this.calcArea();
  }
}
const square = new Rectangle(10, 10);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// subclass
class Animal { 
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // all subclasses must call super() in their constructor
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
	speak() {
    super.speak(); // super call
    console.log(`${this.name} smiles.`);
  }
}
let d = new Dog('Mitzie');
d.speak();
// Mitzie barks.
// Mitzie smiles.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// class expressions

// unnamed:
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
// named:
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// not hoisted
const p = new Rectangle(); // ReferenceError

class Rectangle {}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// mixin
const calculatorMixin = Base => class extends Base {
  calc() {}
};

const randomizerMixin = Base => class extends Base {
  randomize() {}
};

class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@