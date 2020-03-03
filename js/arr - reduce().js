arr.reduce(callback(accumulator, currentVal, ?index, ?array), ?initVal) /*
accumulator:   return value of previous iteration callback
currentVal:    current element being processed 

on first callback:
initVal
	? accumulator=initVal  currentVal=arr[0]
	: accumulator=arr[0]   currentVal=arr[1]

tip: use logical && to return accumulator manually in arrows  */

// add all items
var arr = [1, 2, 3, 4];
var reducer = (accumulator, currentVal) => accumulator + currentVal;
arr.reduce(reducer)    // 10
arr.reduce(reducer, 5) // 15

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
