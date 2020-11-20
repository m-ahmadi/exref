let arr = [];
let set = new Set();
for (let i=0; i<1e6; i++) { set.add(i); arr.push(i); }

// search
let result;
console.time('arr-beg'); result = arr.indexOf(123123) !== -1; console.timeEnd('arr-beg'); // 0.15 ms       O(n)
console.time('arr-end'); result = arr.indexOf(999250) !== -1; console.timeEnd('arr-end'); // 1.6 ms        ...
console.time('set-beg'); result = set.has(123123);            console.timeEnd('set-beg'); // 0.009         O(1)
console.time('set-end'); result = set.has(899250);            console.timeEnd('set-end'); // 0.003         ...


// add (same)
console.time('arr'); arr.push(35); console.timeEnd('arr');
console.time('set'); set.add(25);  console.timeEnd('set');

// delete
console.time('arr');  arr.splice(arr.indexOf(899250), 1); console.timeEnd('arr'); // 1.21 ms
console.time('set');  set.delete(899250);                 console.timeEnd('set'); // 0.005