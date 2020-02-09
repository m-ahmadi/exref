//----------------------------------------
// basic
let arr = [ 1, 2, 3, 4, 5, 6 ];
let [ a, b ] = arr;   // same as:
let a = arr[0];
let b = arr[1];
//----------------------------------------
// after declaration
let a, b;
[a, b] = [1, 2];
a // 1
b // 2
//----------------------------------------
// with rest
let [a, b, ...rest] = [1, 2, 3, 4];
a    // 1
b    // 2
rest // [3, 4]
//----------------------------------------
// default value
let [ a=5, b=7 ] = [1];
a // 1
b // 7
//----------------------------------------
// swapping variable values
let a = 1;
let b = 3;
[a, b] = [b, a];
a // 3
b // 1
//----------------------------------------
// another swapping example
let [ b, a ] = [ a, b ] // same as:
let tmp = a;
a = b;
b = tmp;
//----------------------------------------
// escape indexes
let arr = [ 1, 2, 3];
let [ a, , b ] = arr; // same as:
let a = arr[0];
let b = arr[2];
//----------------------------------------
// another escape indexes example
let arr = [ 1, 2, 3, 4, 5, 6 ];
let [ , , three, four, , six ] = arr;
// same as:
let three = arr[2];
let four = arr[3];
let six = arr[5];
//----------------------------------------