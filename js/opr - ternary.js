2 > 4 ? alert('true') : alert('false'); // basic
cond1 ? true : cond2 ? true : false;    // else if
var smart = 4 > 2 ? true : false;       // variable assignment
4 > 2 ? smart = true : smart = false;   // modify outside
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ternary operator is right associative
0 ? 'a' : 'z' + 'b' + 'c' // 'zbc'
1 ? 'a' : 'z' + 'b' + 'c' // 'a'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// multiple ternary operators (conditional operator is right associative)
var check1, check2, check3 = true;
var access = check1 ? 'Access granted' :
	           check2 ? 'Access granted' :
	           check3 ? 'Access granted' : 'Access denied';

access // 'Access granted'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// multiple operations per case
var stop = false, age = 23;

age > 18 ? (
	alert('OK, you can go.'),
	location.assign('continue.html')
) : (
	stop = true,
	alert('Sorry, you are much too young!')
);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// multiple operations during value assignment
// last comma-separated value of the parentheses is assigned
var age = 16;

var url = age > 18 ? (
	alert('OK, go.'),    // ignored
	'continue.html'      // this value is assigned if age > 18
) : (
	alert('Too young!'), // ignored
	alert('Sorry :-('),  // ignored
	'stop.html'          // the value is assigned if !(age > 18)
);
location.assign(url); // 'stop.html'
// alert returns undefined, but it's ignored cuz it's not the last comma-separated value of the parentheses
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// string concatenation gotchas

// common mistake:
'test: ' + (1 === 2) ? 'hello' : 'world' // 'hello'
// why: it's evaluating 'test: ' + (1===2) as true

// another example:
var v = 'nadan';
'salam ' + v === 'nadan' ? 'olagh' : 'doctor' // 'doctor'
// why: it's evaluating 'salam' + v === 'nadan' as false

// solution: the whole operation should be wrapped in parentheses
'test: ' + (1 === 2 ? 'hello' : 'world')        // 'test: hello'
'salam ' + (v === 'nadan' ? 'olagh' : 'doctor') // 'salam olagh'
'The fee is ' + (false ? '$2.00' : '$10.00')    // 'The fee is $10.00'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// in conjunction with logical operators
false ? 'a' : false || true        // true
false ? false || false : 'hasan'   // 'hasan'
true  ? false || 'gholi' : 'hasan' // 'gholi'
true  ? 'a' || false : 'hasan'     // 'a'
true  ? 'mashti' ||  : 'hasan'     // 'mashti'
true  ? 0 || 1 : '' || 'a'         // 1
false ? 0 || 1 : '' || 'a'         // 'a'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// avoiding Uncaught TypeError when accessing nested obj props
var o = { a: 34 }

o.b                     // undefined, fine
o.b || o.a              // 34, fine
o.b.x                   // Uncaught TypeError
o.b ? o.b.x : undefined // undefined, fine
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@