// from n days ago till today
let n = 400;
[...Array(n)].map((d,i)=> (d=new Date, d.setDate(d.getDate()-n+i)/1000))

// other intervals
d.getFullYear()     // year
d.getMonth()        // month
d.getDate()         // day of the month
d.getDay()          // day of the week
d.getHours()        // hour
d.getMinutes()      // minutes
d.getSeconds()      // seconds
d.getMilliseconds() // milliseconds

// date strs
[...Array(n)].map((d,i)=> (d=new Date, d.setDate(d.getDate()-n+i), [d.getFullYear(), d.getMonth()+1, d.getDate()].join('-') ))

// date strs (consistent form)
[...Array(n)].map((d,i)=> (d=new Date, d.setDate(d.getDate()-n+i), d=d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate() + '', [d.slice(0,4),d.slice(4,6),d.slice(6,8)].join('-') ))

// 8day decreasing date pairs (10 pairs starting from now)
let r = [];
for (let i=0; i<10; i++) {
  let d0 = r.length === 0 ? new Date() : r[r.length-1][1];
  let d1 = new Date(d0);
  d1.setDate(d1.getDate() - 8);
  r.push([d0, d1]);
}

// monthly increasing date pairs (from start date till now)
let d = new Date(2002,0,1);
let now = +new Date();
let r = [];
while (+d <= now) {
  let d0 = new Date(d);
  d.setMonth(d.getMonth() + 1);
	let d1 = new Date(d);
  r.push([d0, d1]);
}

// monthly intervals from a start date till now
let d = new Date(2002,0,1);
let now = +new Date();
let r = [];
while (+d <= now) {
  r.push(new Date(d));
  d.setMonth(d.getMonth() + 1);
}
