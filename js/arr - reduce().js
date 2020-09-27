arr.reduce(callback(accumulator, currentVal, ?index, ?array), ?initVal) /*
accumulator:   return value of previous iteration callback
currentVal:    current element being processed 

on first callback (or reducer):
initVal
	? accumulator=initVal  currentVal=arr[0]
	: accumulator=arr[0]   currentVal=arr[1]

tip: use logical && to return accumulator manually in arrow oneliners  */

// sum of numbers
var arr = [1, 2, 3, 4];
var reducer = (accumulator, currentVal) => accumulator + currentVal;
arr.reduce((a,c) => a+c)               // sum:     10
arr.reduce((a,c) => a+c, 5)            // 5 + sum: 15
arr.reduce((a,c) => a+c) / arr.length  // average: 2.5

// reversing
arr.reduce((acc, cur) => ''+cur+acc) // '4321'
arr.reduce((acc, cur) => ''+acc+cur) // '1234'

// join (kinda)
var arr = ['aa', 'bb', 'ccx']
arr.reduce((a, c) => a+'@'+c)        // 'aa@bb@ccx'
arr.reduce((a, c) => a+'@'+c, 'foo') // 'foo@aa@bb@ccx'

// separate ids of each root
var arr = [ {id:7,root:0}, {id:4,root:0}, {id:9,root:0}, {id:8,root:1}, {id:0,root:1} ];
arr.reduce((a,c)=> a[c.root].push(c.id) && a, [[],[]]) // [ [7,4,9], [8,0] ] (result indexes represent root ids)

// count prop of objs
var arr = [ {count:2}, {count:7}, {count:5}, {count:3}, ];
arr.reduce((a,c)=>({count: a.count+c.count})).count // 17

// str[] to {str:str, ...}
['foo', 'bar', 'baz'].reduce((a,c)=> (a[c] = c) && a, {}) // {foo: 'foo', bar: 'bar', baz: 'baz'}

// [ [key,val], ... ] to {key:val, ...}
[ ['a',1], ['b',2], ['c',3] ].reduce((a,c) => (a[c[0]] = c[1]) && a, {}) // {a: 1, b: 2, c: 3}

// [ [a,b], [c,d], ...] to [a,b,c,d,...]
var arr = [ [1,2], [3,4], [5,6] ];
arr.reduce((a,c) => a.push(...c) && a, []) // [1, 2, 3, 4, 5, 6]
arr.reduce((a,c)=> a = a.concat(c), [])    // [1, 2, 3, 4, 5, 6]

// 'a=b&c=d' to {a:'b', c:'d'}
'name=abc&foo=bar'.split('&').reduce((a,c) => (a[ c.split('=')[0] ] = c.split('=')[1]) && a, {}) // {name: 'abc', foo: 'bar'}

// {k:v, k:v} to 'k=v&k=v' 
var o = {foo:'a', bar:'b'};
Object.keys(o).reduce((a,k)=> a+= k+'='+o[k]+'&', '').slice(0,-1) // 'foo=a&bar=b&baz=c'