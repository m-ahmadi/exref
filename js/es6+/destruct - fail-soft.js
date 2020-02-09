var list = [ 7, 42 ];
var [ a = 1, b = 2, c = 3, d ] = list;
a === 7
b === 42
c === 3
d === undefined

// same as:
var list = [ 7, 42 ];
var a = typeof list[0] !== 'undefined' ? list[0] : 1;
var b = typeof list[1] !== 'undefined' ? list[1] : 2;
var c = typeof list[2] !== 'undefined' ? list[2] : 3;
var d = typeof list[3] !== 'undefined' ? list[3] : undefined;
a === 7;
b === 42;
c === 3;
d === undefined;