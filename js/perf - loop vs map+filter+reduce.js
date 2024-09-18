a = [...Array(1_000_000)].map(()=>Math.round(Math.random()*100));

console.time();
var r = a
	.map(i=>i*0.9)
	.filter(i=>i>=20)
	.reduce((r,i)=>r+=i)
console.timeEnd(); // 227 ms


console.time();
var r = 0;
for (let i=0,len=a.length; i<len; i++) {
	const j = a[i] * 0.9;
	if (j >= 20) r += j;
}
console.timeEnd(); // 46 ms
