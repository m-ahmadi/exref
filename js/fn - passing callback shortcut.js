"1380/01/01".split('/').map(console.log)                               // works
"a,b,c,d".split(',').map(console.log)                                  // works
[1,2,3,4].map(console.log)                                             // doesn't work
fetch('http://jsonplaceholder.typicode.com/users').then(console.log)   // works

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// what's happening:
// .map() calls the passed callback anyway, wheather it's an anonymous function or a method of some other object.

// same thing:
.map( (v,i,a) => console.log(v,i,a) )
.map(console.log)

// when can we use it:
// whenever a callback argument signature matches some other function.
// (or at least the first argument matches)