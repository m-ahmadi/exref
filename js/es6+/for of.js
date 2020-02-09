var iterable = [10, 20, 30];
// for of can iterate over iterable objects. (Array, Map, Set, String, TypedArray, arguments object, ...)

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11 21 31

var arr = [1, 'string', false];
for (const value of arr) {
	console.log(entry);
}
// 1, 'string', false
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// for of vs for in
var list = [4, 5, 6];
list.foo = 'hello';

// for of iterates over values
for (const i of list) {
	console.log(i); // 4, 5, 6
}

// for in iterates over keys
for (const i in list) {
	console.log(i);   // 0, 1, 2
}
for (const i in list) {
  if (list.hasOwnProperty(i)) {
		console.log(i); // 0, 1, 2, 'foo'
  }
}

// another example:
var pets = new Set(['Cat', 'Dog', 'Hamster']);
pets['species'] = 'mammals';

for (const pet in pets) {
	console.log(pet); // 'species'
}

for (const pet of pets) {
	console.log(pet); // 'Cat', 'Dog', 'Hamster'
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// accessing an index in for of. (slower than forEach)
for (const [i, v] of ['a', 'b', 'c'].entries()) {
	console.log(i, v)
}