// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
new Date(?value=int timestamp|string date|Date date|int year, ?monthIndex=int, ?day=int, ?hours=int, ?minutes=int, ?seconds=int, ?milliseconds=int)

/* NOTE:
don't parse date strings. (whether with constructor or parse() method)
use numbers instead.
why: because of browser differences and inconsistencies. */

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

// pass-by-reference
var date = new Date(2010,0,1);
var tmp = date;
date.setFullYear(2014);
tmp.getFullYear()       // 2014

var date = new Date(2010,0,1);
var tmp = new Date(date);
date.setFullYear(2014);
tmp.getFullYear()       // 2010
