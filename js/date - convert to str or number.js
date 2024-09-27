var d = new Date(2014,0,1);

d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate() + '' // '20140101'

Intl.DateTimeFormat('en-GB').format(d).split('/').reverse().join('') // '20140101'

[d.getFullYear(), d.getMonth()+1, d.getDate()].map(i=>i<10?'0'+i:i).join('-')                  // '2014-01-01'
[d.getFullYear(), d.getMonth()+1, d.getDate()].map(i=>(i=''+i, i.length>1?i:'0'+i)).join('-'); // '2014-01-01'

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// convert str to date
s = '20240101';
d1 = new Date(+s.slice(0,4), +s.slice(4,6)-1, +s.slice(6,8));
d2 = new Date(...[[0,4],[4,6],[6,8]].map(([i,j],k)=>+s.slice(i,j)-(k===1?1:0)));
d3 = new Date([...Array(8)].map((_,i)=>(i===4||i===6||i===8?'-':'')+s[i]).join('')); // UTC
d4 = new Date([...Array(8)].map((_,i)=>([4,6,8].includes(i)?'-':'')+s[i]).join('')); // ...

// perf comparison
randInt = (n,x) => (n=Math.ceil(n), x=Math.floor(x), Math.floor(Math.random()*(x-n))+n);
ss = [...Array(10_000_000)].map(()=> ''+randInt(19800101, 20240101));
ss = [...new Set(ss)];
f1 = s => new Date(+s.slice(0,4), +s.slice(4,6)-1, +s.slice(6,8));
f2 = s => new Date(...[[0,4],[4,6],[6,8]].map(([i,j],k)=>+s.slice(i,j)-(k===1?1:0)));
f3 = s => new Date([...Array(8)].map((_,i)=>(i===4||i===6||i===8?'-':'')+s[i]).join(''));
f4 = s => new Date([...Array(8)].map((_,i)=>([4,6,8].includes(i)?'-':'')+s[i]).join(''));

console.time();
ss.map(f1) // 421 ms
console.timeEnd();

console.time();
ss.map(f2) // 532 ms
console.timeEnd();

console.time();
ss.map(f3) // 895 ms
console.timeEnd();

console.time();
ss.map(f4) // 1011 ms
console.timeEnd();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
