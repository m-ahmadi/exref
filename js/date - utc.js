Date.UTC(year, ?month=0-11, ?day=1-31, ?hour=0-23, ?minute=0-59, ?second=0-59, ?millisecond=0-999) // es7
Date.UTC(year, month, ?day, ?hour, ?minute, ?second, ?millisecond)                                 // before es7 (month required)
// accepts parameters similar to the Date constructor, but treats them as UTC.
// returns timestamp of milliseconds (and not Date object)

/* note:
utc does not follow daylight saving time
during daylight saving time, midnight local time is the same as 11pm */

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
new Date(2019,10,7).getDate()    // 7

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



// utc confusion
d = new Date(); //  Fri Sep 26 2025 22:04:00 GMT+0330  local
d.toUTCString() // Fri, 26 Sep 2025 18:34:00 GMT       utc
t = [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()];
tu = [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes()];
t  // [2025, 8, 26, 22, 4]
tu // [2025, 8, 26, 18, 34]
new Date(...tu)           // Fri Sep 26 2025 18:34:00 GMT+0330  correct
new Date(Date.UTC(...tu)) // Fri Sep 26 2025 22:04:00 GMT+0330  wrong (circled back)
new Date(Date.UTC(...t))  // Sat Sep 27 2025 01:34:00 GMT+0330  completely wrong (local treated as utc, then shifted to get local)



// timezone date (convert local datetime to different timezone)
tzDate([2025,8,27,2,24], -4)       // Fri Sep 26 2025 18:54:00 GMT+0330
tzDate([2025,8,27,2,24], -4, true) // Fri Sep 26 2025 22:24:00 GMT+0330
function tzDate(dateTuple, targetTzUtcOffset, inUtc) {
	const localTzUtcOffset = new Date().getTimezoneOffset() / 60; // in hours
	const msInOneHour = 60*60*1000;
	const msDifference = (localTzUtcOffset + targetTzUtcOffset) * msInOneHour;
	const ms = inUtc ? Date.UTC(...dateTuple) : +new Date(...dateTuple);
	return new Date(ms + msDifference);
}
// timezone date - another way using Intl (and aware of daylight saving time)
nyDate = nyDateDST([2009,2,15,17,0,14]);                     // ny local time
nyDate.toISOString()                                         // utc instant:       '2009-03-15T09:30:14.000Z'
nyDate.toUTCString()                                         // utc:               'Sun, 15 Mar 2009 09:30:14 GMT'
nyDate.toLocaleString('en-US',{timeZone:'America/New_York'}) // original ny time:  '3/15/2009, 5:30:14 AM'
new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',dateStyle:'short',timeStyle:'medium'}).format(nyDate) // ↑... but more perf-efficient
// dst awareness
nyDateDST([2009,2,8,10,29,59]).toLocaleString('en-US',{timeZone:'America/New_York'}) // dst not started:  '3/7/2009, 8:59:59 PM'
nyDateDST([2009,2,8,10,30]).toLocaleString('en-US',{timeZone:'America/New_York'})    // dst has started:  '3/7/2009, 10:00:00 PM'
function nyDateDST(dateTuple) {
	const localDate = new Date(...dateTuple);
	const options = {timeZone: 'America/New_York', timeZoneName: 'short'};
	const parts = new Intl.DateTimeFormat('en-US', options).formatToParts(localDate);
	const {timeZoneName} = Object.fromEntries(parts.map(i => [i.type, i.value]));
	const nyOffsetMs = ({'EST':5,'EDT':4})[timeZoneName] * (60*60*1000);
	return new Date(localDate.getTime() - nyOffsetMs);
}



// timezone conversion
// local to ny
local = new Date(2025,8,27,1,5);
ny = new Intl.DateTimeFormat('en-US', {timeZone:'America/New_York',dateStyle:'full',timeStyle:'full'}).format(local);
local.toString() // 'Sat Sep 27 2025 01:05:00 GMT+0330'
ny               // 'Friday, September 26, 2025 at 5:35:00 PM Eastern Daylight Time'
// 01:05 local == 17:35 ny prev day (cuz local is 7.5 hours behind ny)
// ny to local
d = new Date(2025,8,27,1,5);           // local date (must be converted to ny first)
nyTzDate_ = new Date(2025,8,26,17,35); // correct `d` date in ny tz (hard coded)
nyTzDate = new Date(+d + (((d.getTimezoneOffset()/60)+(-4))*(60*60*1000))); // correct `d` date in ny tz (calced)
+nyTzDate == +nyTzDate_ // true
new Intl.DateTimeFormat('en-US', {timeZone:'Asia/Tehran',dateStyle:'full',timeStyle:'full'}).format(nyTzDate);
'Saturday, September 27, 2025 at 1:05:00 AM Iran Standard Time' // or simply: 
nyTzDate.toString()
'Sat Sep 27 2025 01:05:00 GMT+0330 (Iran Standard Time)' // (cuz local js Date always converts to local tz anyway)
/* note:
tricky thing is that we can always convert local date to utc by
date.toUTCString() method, but it always treats `date` as if being in local
timezone (having local offset from utc), therefore, even we have a `date`
aligned to another timezone, it is treated as if being in local timezone.
conclusion: use date.UTCString() with truely local `date`.
(you can think like as if date conversion is always one-sided and source side is
always offset of local tz from utc, therefore sides of the conversion become
important.)
*/
