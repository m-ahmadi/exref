// omitting the keyword is only possible in array destruct
const obj = { foo: 'football', bar: 'bartender' };
const arr = [4, 31];

{ foo, bar } = obj;
foo // ReferenceError: foo is not defined
bar // ...

[ foo, bar ] = arr;
foo // 4
bar // 31

// just like regular variable creation it results in creating global variables (not real variables but props on global object)
function x() {
	[hello] = [35, 45];
}
hello // undefined
x()
hello // 35