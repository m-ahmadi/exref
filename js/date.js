new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])

/* NOTE:
don't parse date strings. (whether with constructor or parse() method)
use numbers instead.
why: because of browser differences and inconsistencies. */

Date()                 // returns string (not Date object)
new Date()             // current time
new Date('2019/10/09') // parses date string
new Date('2019,10,09') // same as above
new Date('2019-10-09') // treated as utc
new Date(2019, 9, 09)  // best way. monthIndex= month - 1 (3= 4th month)

// missing args get lowest possible value: (1 for day and 0 for rest)
new Date(2019)         // 2019 01 01
new Date(2019, 11)     // 2019 12 01

// static methods
Date.now()
Date.parse(dateString)
Date.parse('2016/4/20')
Date.parse('2016/4/20') === new Date('2016/4/20').getTime() // true

// instance methods
var date = new Date(unix_timestamp*1000)
date.getTime()         // timestamp
date.getFullYear()     // year (4 digits for 4-digit years). 2016
date.getYear()         // year (2-3 digits). 116 (don't use)
date.getMonth()        // month index (0-11)
date.getDate()         // day of the month
date.getDay()          // day of the week (0-6)
date.getHours()        // hour (0-23)
date.getMinutes()      // minutes (0-59)
date.getSeconds()      // seconds (0-59)
date.getMilliseconds() // milliseconds (0-999)