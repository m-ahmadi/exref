a = [...Array(1e6)].map(_=> Math.random()*99999);

console.time();
[...a.entries()].sort((a,b)=>a[1]-b[1]);
console.timeEnd(); // 1514 ms

console.time();
a.map((v,i)=>[i,v]).sort((a,b)=>a[1]-b[1]);
console.timeEnd(); // 1055 ms

console.time();  var x = [...a.entries()];     console.timeEnd(); // 150 ms
console.time();  var x = a.map((v,i)=>[i,v]);  console.timeEnd(); // 50  ms