// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
new Date(?value=int timestamp|string date|Date date|int year, ?monthIndex=int, ?day=int, ?hours=int, ?minutes=int, ?seconds=int, ?milliseconds=int)

/* NOTE:
don't parse date strings. (whether with constructor or parse() method)
use numbers instead.
why: because of browser differences and inconsistencies.
(only possible exception is "iso string format".) */

Date()                  // returns string (not Date object)
new Date()              // current time
new Date(2014, 9, 30)   // best way. monthIndex = month - 1 (3 = 4th month)
new Date(1414614600000) // from timestamp
new Date('2014/10/30')  // parses date string
new Date('2014,10,30')  // same as above
new Date('2014-10-30')  // treated as utc

// missing args get lowest possible value (1 for day and 0 for rest)
new Date(2014)          // err (expects timestamp)
new Date(2014, 11)      // 2014 12 01
new Date(2014, 11, 5)   // 2014 12 05 00:00:00

// static methods
Date.now()
Date.parse(dateString)
Date.parse('2016/4/20')
Date.parse('2016/4/20') === new Date('2016/4/20').getTime() // true

// instance methods
var date = new Date(unix_timestamp*1000)
date.getTime()          // timestamp
date.getFullYear()      // year (4 digits for 4-digit years). 2016
date.getYear()          // year (2-3 digits). 116 (don't use)
date.getMonth()         // month index (0-11)
date.getDate()          // day of the month
date.getDay()           // day of the week (0-6)
date.getHours()         // hour (0-23)
date.getMinutes()       // minutes (0-59)
date.getSeconds()       // seconds (0-59)
date.getMilliseconds()  // milliseconds (0-999)

// to string methods
date.toISOString()        // '2025-10-04T19:09:11.835Z'
date.toJSON()             // ...
date.toUTCString()        // 'Sat, 04 Oct 2025 19:09:11 GMT'

date.toDateString()       // 'Sat Oct 04 2025'
date.toTimeString()       // '22:39:11 GMT+0330 (Iran Standard Time)'

date.toLocaleString()     // '10/4/2025, 10:39:11 PM'
date.toLocaleDateString() // '10/4/2025'
date.toLocaleTimeString() // '10:39:11 PM'

// pass-by-reference
var date = new Date(2010,0,1);
var tmp = date;
date.setFullYear(2014);
tmp.getFullYear()       // 2014

var date = new Date(2010,0,1);
var tmp = new Date(date);
date.setFullYear(2014);
tmp.getFullYear()       // 2010

// parse from iso string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format
new Date('2025-10-04T00:00:00.000Z')      // Sat Oct 04 2025 03:30:00 GMT+0330
new Date('2025-10-04T00:00:00.000+03:30') // Sat Oct 04 2025 00:00:00 GMT+0330
// partial forms
new Date('2011-10-10')          // date
new Date('2011-10-10T14:30:00') // date-time
// if no tz offset:
new Date('2025-10-04')              // date-only forms are interpreted as a utc time
new Date('2025-10-04T22:15:00.000') // date-time forms are interpreted as a local time
