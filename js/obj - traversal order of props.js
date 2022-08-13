// two types of orders:

/* # 1
own property keys (defined in es6)
	1:  integer index string keys in ascending numberc order
	2:  all other string     keys in the order they were added
	3:  all symbols          keys in the order they were added
*/
Object.assign()
Object.defineProperties()
Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Reflect.ownKeys()

/* # 2
enumerable own property keys
	same order in as `for in` traverses properties
*/
JSON.parse()
JSON.stringify()
Object.keys()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// sort issue
var x = [ [1,'a'], [3,'c'], [2,'b'] ];
x.sort((a,b) => b[0] - a[0]);                      // [ [3,'c'], [2,'b'], [1,'a'] ]
x.reduce((a,[k,v]) => { a[k] = v; return a; }, {}) // { 1:'a', 2:'b', 3:'c' }

// for in
var obj = {
  'first':  'first',
  '2':      '2',
  '34':     '34',
  '1':      '1',
  'second': 'second'
};
var keys = [];
for (var i in obj) keys.push(i) // ['1', '2', '34', 'first', 'second']
