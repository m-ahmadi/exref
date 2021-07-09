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