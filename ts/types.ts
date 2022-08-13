/*
	types
	
	any
	string
	number
	boolean
	undefined
	null
	void
	tuple
	never
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	basic syntax:
var name: string;
var age: number;
let job: boolean;

name = 'mohammad';
age = 22;
job = 'King';

//	or in the same line:
var name: string = 'mohammad';
var age: number = 22;
let job: boolean = true;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// arrays
// array types can be written in 2 ways:

// 1: type of the elements followed by [] to denote an array of that element type:
let list: number[] = [1, 2, 3];

// 2: generic array type: Array<elemType>:
let list: Array<number> = [1, 2, 3];


let list: number[];
var list: Array<number>;

// multidimensional
let two: number[][] = [ [1,2], [1,2], [1,2] ];
let some: string[][] = [ ['name','value'], ['name','value'] ];

let three: number[][][] = [  [ [1,2], [1, 2] ], [ [1,2], [1,2] ], [ [1,2], [1,2] ]  ];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	any

// any vs Object:
let age: any = 4;
age.something(); // okay, something might exist at runtime
age.toFixed();   // okay, toFixed exists (but the compiler doesn't check)

// let prettySure: Object = 4;
let age: {} = 4;
age.toFixed();   // Error: Property 'toFixed' doesn't exist on type 'Object'.


// array of mix types:
let list: any[] = [1, true, 'free'];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	void
function warnUser(): void {
	alert('this function dosn't return anything dude!');
}

let unusable: void = undefined;
// variables declared with void type, can only contain undefined or null.

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// null and undefined
// undefined and null have their own types named undefined and null.

let u: undefined = undefined;
let n: null = null;
// not much else we can assign to these variables

/*
	by default null and undefined are subtypes of all other types.
	That means you can assign null and undefined to something like number.

	however, when using the --strictNullChecks flag,
	null and undefined are only assignable to void and their respective types.
	This helps avoid many common errors.
	
	in cases where you want to pass in either a string or null or undefined,
	you can use the union type string | null | undefined.
	
	as a note: we encourage the use of --strictNullChecks when possible,
	but we will assume it's turned off.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// never
/*
	the never type represents the type of values that never occur.
	
	never is the return type for a function expression or an arrow function expression,
	that always throws an exception or one that never returns.
	
	variables also acquire the type never when narrowed by any type guards that can never be true.

	the never type is a subtype of, and assignable to, every type;
	however, no type is a subtype of, or assignable to, never (except never itself).
	even any isn’t assignable to never.
*/

// some examples of functions returning never:

// function returning never must have unreachable end point
function error(message: string): never {
	throw new Error(message);
}

// inferred return type is never
function fail() {
	return error('Something failed');
}

// function returning never must have unreachable end point
function infiniteLoop(): never {
	while (true) { }
}

/* never vs. void
	in imperative languages, void can be thought of as a type containing a single value.
	such languages do not provide a means to construct or consume this value,
	but a void function can be thought of as returning this trivial value.

	in contrast never is a type containing no values,
	which means that a function with this return type can never return normally at all.
	This means either throwing an exception or failing to terminate.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// type assertions

// two froms:

// one is the angle-bracket syntax:
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

// two is the as syntax:
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;

// when using typescript with JSX, only as-style assertions are allowed.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// tuple
// tuple types allow you to express an array, with fixed number of elements, but with mixed element types.

let x: [string, number];
x = ['hello', 10]; // OK
x = [10, 'hello']; // Error
x[3] = 'world';    // OK, 'string' can be assigned to 'string | number'
x[6] = true;       // Error, 'boolean' isn't 'string | number'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// enum
// an enum is a way of giving more friendly names to sets of numeric values.
// an enum associates a human-readable name for a specific number.

// by default, enums begin numbering their members starting at 0:
enum Color {
	Red,   // 0
	Green, // 1
	Blue   // 2
};
let c: Color = Color.Green;

// change the starting point of numbering:
enum Color {
	Red = 6, // 6
	Green,   // 7
	Blue     // 8
};
let c: Color = Color.Green;

// manually set all the values in the enum:
enum Color {
	Red = 1,
	Green = 2,
	Blue = 4
};
let c: Color = Color.Green;


// const enums (TypeScript 1.4+)
// better for performance.
// output JavaScript will not contain the full closure definition.
const enum DoorStateConst {
	Open,
	Closed,
	Ajar
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	duck-typing
// typescript uses a method called Duck-Typing for more complex variable types.
// duck-typing means that if it looks like a duck, and quacks like a duck, then it probably is a duck.

var complexType = { name: 'myName', id: 1 };
complexType = { id: 2 };
complexType = { name: 'anotherName' };
complexType = { address: 'address' };

/*
	typescript is explicitly stating what is wrong with each line of code:

	error TS2012: Build: Cannot convert '{ id: number; }' to '{ name: string; id: number; }':
	error TS2012: Build: Cannot convert '{ name: string; }' to '{ name: string; id: number; }':
	error TS2012: Build: Cannot convert '{ address: string; }' to '{ name: string; id: number; }':
	
	typescript is using duck-typing to ensure type safety.
	the complexType variable has both an id and a name property.
	to assign a value to the complexType variable, then,
	this value will need to have both an id and a name property.
*/

var complexType = { name: 'myName', id: 1 };
complexType = { name: 'name', id: 2, address: 'address' };
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// explicit casting
// an object can be cast to the type of another by using the < > syntax.

var item1 = <any>{ id: 1, name: 'item 1' };
item1 = { id: 2 };

/*	
	explicitly cast, or to explicitly treat the { id: 1, name: 'item 1' } object on the right-hand side as a type of any.
	so the item1 variable, therefore, also has the type of any (due to typescript's inferred typing rules).
	this then allows us to assign an object with only the { id: 2 } property to the variable item1 on the second line of code.
	this technique of using the < > syntax on the right hand side of an assignment, is called explicit casting.
*/