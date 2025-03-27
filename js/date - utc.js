Date.UTC(year, ?month=0-11, ?day=1-31, ?hour=0-23, ?minute=0-59, ?second=0-59, ?millisecond=0-999) // es7
Date.UTC(year, month, ?day, ?hour, ?minute, ?second, ?millisecond)                                 // before es7 (month required)
// accepts parameters similar to the Date constructor, but treats them as UTC.
// returns timestamp of milliseconds (and not Date object)

/* note:
utc does not follow daylight-savings time
during daylight-savings time, midnight local time is the same as 11pm */

Date.UTC()                  // NaN
Date.UTC(96, 1, 2, 3, 4, 5) // timestamp: 823230245000
Date.UTC(2019, 10, 24)      // timestamp: 1574553600000
Date.UTC(2019)              // when passed a single number, interprets it as year (and not timestamp)
Date.UTC(1574553600000)     // ↑... NaN

var date = new Date();
date.getUTCFullYear()       // year (4 digits for 4-digit years). 2016
date.getUTCMonth()          // month index (0-11)
date.getUTCDate()           // day of the month
date.getUTCDay()            // day of the week (0-6)
date.getUTCHours()          // hour (0-23)
date.getUTCMinutes()        // minutes (0-59)
date.getUTCSeconds()        // seconds (0-59)
date.getUTCMilliseconds()   // milliseconds (0-999)

new Date(2019,10,7).getUTCDate() // 6
new Date(2019,10,7').getDate()   // 7

var d = new Date(2025,2,14,3,30);
d.toLocaleString()                   // '14/03/2025, 03:30:00'
d.toLocaleString(0,{timeZone:'utc'}) // '14/03/2025, 00:00:00'

// get utc timestamp
Date.UTC(2024,0,1)                     // 1704067200000
new Date(Date.UTC(2024,0,1)).getTime() // 1704067200000  timestamp returned by <Date>.getTime() depends on how <Date> was created
new Date(2024,0,1).getTime()           // 1704054600000  not utc (local)

var d = new Date(2024,0,1);
+d - d.getTimezoneOffset()*60*1000     // 1704067200000  utc (bad method cuz whether to add or subtract depends on timezone)

// conversion pitfalls
kk = ['FullYear','Month','Date','Hours','Minutes'];
z = [2025,0,27,3,10];
a = Date.UTC(...z); // 1737947400000  utc
b = new Date(...z); // 1737934800000  local
a === +b            // false
// utc from local
Date.UTC(...kk.map(k => b['get'+k]() ))      // 1737947400000  correct way
Date.UTC(...kk.map(k => b['getUTC'+k]() ))   // 1737934800000  incorrect way
// local from utc
aa = new Date(a);
+new Date(...kk.map(k => aa['getUTC'+k]() )) // 1737934800000  correct way
+new Date(...kk.map(k => aa['get'+k]() ))    // 1737947400000  incorrect way
