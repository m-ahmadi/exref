var r1030 = [...Array(5e7)].map(_=> Math.floor(Math.random()*21)+10);

console.time();  r1030.find(i => i > 31);  console.timeEnd(); // 228 ms
console.time();  r1030.some(i => i > 31);  console.timeEnd(); // 225 ms