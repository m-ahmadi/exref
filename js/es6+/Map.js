var map = new Map([
	['foo', 3],
	['bar', {}],
	['baz', undefined]
]);

map.forEach((value, key, map) => {
	// key   foo  bar baz
	// value 3    {}  undefined
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var keyString = 'a string';
var keyObj = {};
var keyFunc = () => {};

// setting the values
map.set(keyString, 'value associated with 'a string'');
map.set(keyObj, 'value associated with keyObj');
map.set(keyFunc, 'value associated with keyFunc');

map.size; // 3

// getting the values
map.get(keyString);    // 'value associated with 'a string''
map.get(keyObj);       // 'value associated with keyObj'
map.get(keyFunc);      // 'value associated with keyFunc'

map.get('a string');   // 'value associated with 'a string''      because keyString === 'a string'
map.get({});           // undefined, because keyObj !== {}
map.get(function() {}) // undefined, because keyFunc !== function () {}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@