a = [...Array(10_000_000)].map(() => Math.round(Math.random()*100));


console.time();
a.map((v,i,a) => i>0 ? v-a[i-1] : ''); // 320
console.timeEnd();


console.time();
a.slice(0,-1).map((v,i) => a[i+1]-v);  // 390
console.timeEnd();


console.time();
a.map((v,i,a) => v-a[i-1]);            // 405
console.timeEnd();


console.time();
a.map((v,i,a) => v-a[i-1]).slice(1);   // 470
console.timeEnd();


console.time();
_1 = a.slice(0,-1);
_2 = a.slice(1);
_2.map((v,i) => v-_1[i]);              // 410
console.timeEnd();
