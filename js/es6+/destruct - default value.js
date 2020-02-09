// object and array matching: default values

var obj = { a: 1 };
var list = [ 1 ];
var { a, b = 2 } = obj;
var [ x, y = 2 ] = list;

// same as:
var obj = { a: 1 };
var list = [ 1 ];
var a = obj.a;
var b = obj.b === undefined ? 2 : obj.b;
var x = list[0];
var y = list[1] === undefined ? 2 : list[1];