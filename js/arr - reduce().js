arr.reduce(callback(accumulator, currentValue, ?index, ?array), ?initialValue) /*
accumulator:   return value of previous iteration callback
currentValue:  current element being processed 
on first callback:
	with    initialValue: accumulator = initialValue  currentValue = first  item
	without initialValue: accumulator = first item    currentValue = second item  */

// add all items
var arr = [1, 2, 3, 4];
var reducer = (accumulator, currentValue) => accumulator + currentValue;
arr.reduce(reducer)    // 10
arr.reduce(reducer, 5) // 15

// reversing
arr.reduce((acc, cur) => ''+cur+acc) // '4321'
arr.reduce((acc, cur) => ''+acc+cur) // '1234'

// join (kinda)
var arr = ['aa', 'bb', 'ccx']
arr.reduce((a, c) => a+'@'+c)        // 'aa@bb@ccx'
arr.reduce((a, c) => a+'@'+c, 'foo') // 'foo@aa@bb@ccx'

// return accumulator manually using logical &&
var arr = [ {id:7,root:0}, {id:4,root:0}, {id:9,root:0}, {id:8,root:1}, {id:0,root:1} ];
arr.reduce((a,c)=> a[c.root].push(c.id) && a, [[],[]]) // [ [7,4,9], [8,0] ]