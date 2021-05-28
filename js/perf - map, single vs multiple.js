a = [...Array(4e6)].map(()=>Math.floor(Math.random()*1e6));

console.time();
a.map(i=>i*2/2/4*2)
console.timeEnd(); // 280 ms

console.time();
a.map(i=>i*2).map(i=>i/2).map(i=>i/4).map(i=>i*2)
console.timeEnd(); // 800 ms