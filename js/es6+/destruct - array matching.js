// basic
let arr = [ 1, 2, 3, 4, 5, 6 ];
let [ a, b ] = arr;   // same as:
let a = arr[0];
let b = arr[1];
//------------------------------------------------
// after declaration
let a, b;
[a, b] = [1, 2];
a // 1
b // 2
//------------------------------------------------
// default value
let [ a=5, b=7 ] = [1];
a // 1
b // 7
//------------------------------------------------
// assign the rest
let [a, b, ...rest] = [1, 2, 3, 4];
a    // 1
b    // 2
rest // [3, 4]

// no trailing comm allowed
const [a, ...b,] = [1, 2, 3]; // SyntaxError
//------------------------------------------------
// returned from function
function f () { return [1, 2] }

let a, b; 
[a, b] = f();
a // 1
b // 2
//------------------------------------------------
// swapping variable values
let a = 1;
let b = 3;
[a, b] = [b, a];
a // 3
b // 1

// another example
let [ b, a ] = [ a, b ] // same as:
let tmp = a;
a = b;
b = tmp;
//------------------------------------------------
// escape indexes
let arr = [ 1, 2, 3];
let [ a, , b ] = arr; // same as:
let a = arr[0];
let b = arr[2];

// another example
let arr = [ 1, 2, 3, 4, 5, 6 ];
let [ , , three, four, , six ] = arr;
// same as:
let three = arr[2];
let four = arr[3];
let six = arr[5];

// ignore all
[,,] = arr;
//------------------------------------------------
// nested
let arr = [ [1,2], [3,4] ];

let [ , [,d] ] = arr;
let [ , [c] ]  = arr;
let [ [,b] ]   = arr;
let [ [a] ]    = arr;

a // 1
b // 2
c // 3
d // 4
//------------------------------------------------
// alt target
let a = [1,2];
let o = {a:0, b:0};

[o.a, o.b] = a; // or
[o['a'], o['b']] = a;

o // {a:1, b:2}
//------------------------------------------------