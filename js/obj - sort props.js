var o = {c:'crane', b:'boy', a:'ant'};
Object.keys(o).sort().reduce((a,k) => (a[k] = o[k], a), {}); // {a: 'ant', b: 'boy', c: 'crane'}

// sorted values
var o = {you:100, me:75, foo:116, bar:15};
Object.keys(o).sort((a,b) => o[a] - o[b]) // ['bar', 'me', 'you', 'foo']


// old
var sortable = [];
for (var k in obj) sortable.push([ k, obj[k] ]);
sortable.sort((a,b) => a[1] - b[1]);