Date.UTC(year, ?month=0-11, ?day=1-31, ?hour=0-23, ?minute=0-59, ?second=0-59, ?millisecond=0-999) // es7
Date.UTC(year, month, ?day, ?hour, ?minute, ?second, ?millisecond)                                 // before es7 (month required)
// accepts parameters similar to the Date constructor, but treats them as UTC.
// returns timestamp of milliseconds

Date.UTC()                  // NaN
Date.UTC(96, 1, 2, 3, 4, 5) // timestamp: 823230245000
Date.UTC(2019, 10, 24)      // timestamp: 1574553600000

var date = new Date()
date.getUTCFullYear()       // year (4 digits for 4-digit years). 2016
date.getUTCMonth()          // month index (0-11)
date.getUTCDate()           // day of the month
date.getUTCDay()            // day of the week (0-6)
date.getUTCHours()          // hour (0-23)
date.getUTCMinutes()        // minutes (0-59)
date.getUTCSeconds()        // seconds (0-59)
date.getUTCMilliseconds()   // milliseconds (0-999)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// why getDay() and getUTCDay() have different results

new Date('2019-10-7').getUTCDay() // 0
new Date('2019-10-7').getDay()    // 1
// because UTC does not follow daylight savings time
// during daylight savings time, midnight local time is the same as 11pm
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@