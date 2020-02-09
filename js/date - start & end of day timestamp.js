var date = new Date();
date.setHours(0,0,0,0)      // start of day
date.setHours(23,59,59,999) // end of day
date.getTime()              // timestamp

// utc
date.setUTCHours(0,0,0,0)
date.setUTCHours(23,59,59,999)

// example:
new Date()                               // Sat Oct 12 2019 19:13:42
new Date( new Date().setHours(0,0,0,0) ) // Sat Oct 12 2019 00:00:00