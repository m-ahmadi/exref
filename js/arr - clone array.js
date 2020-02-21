var arr = [{a:1}, {a:2}];

[...arr]        // fastest

arr.slice(0)    // faster than:
arr.slice()

arr.concat()

Array.from(arr)

arr.map(i=>i)

arr.map(i => Object.assign({},i)) // deep clone