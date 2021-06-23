// from n days ago till today
let n = 400;
[...Array(n)].map((d,i)=> (d=new Date, d.setDate(d.getDate()-n+i), +d/1000))