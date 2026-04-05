var { DateTime, Duration, Interval } = require('luxon');

/*

for reference use built‑in type definitions, either via:

	ide's auto hints
	
	or
	
	source code:
		node_modules/luxon/src/datetime.js
		node_modules/luxon/src/duration.js
		node_modules/luxon/src/interval.js

*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// construct

// now
var dt = DateTime.now();
var dt = DateTime.local();
var dt = DateTime.utc();

// from
var dt = DateTime.fromObject({year: 2009, month: 3, day: 15});
var dt = DateTime.fromJSDate(new Date());
var dt = DateTime.fromISO('2009-03-15T17:00:0');
var dt = DateTime.fromFormat('2025-12-01 17:05:12.000', 'yyyy-MM-dd HH:mm:ss.SSS', {zone:'America/New_York'});
var dt = DateTime.fromFormat('20251201 170512000', 'yyyyMMdd HHmmssSSS', {zone:'America/New_York'});
var dt = DateTime.fromMillis(1767275675724); // '2026-01-01T17:24:35.724'

// validity
var dt = DateTime.fromISO('a');
dt.isValid            // false
dt.invalidReason      // 'unparsable'
dt.invalidExplanation // `the input 'a' can't be parsed as ISO 8601`



// transform
var dt = DateTime.fromISO('2026-01-01T17:00:00');
var dt2 = dt.plus({days: 3});   // '2026-01-0T17:00:00'
var dt2 = dt.plus({hours: 5});  // '2026-01-0T22:00:00'
var dt2 = dt.minus({weeks: 1}); // '2025-12-25T17:00:00'
var tomorrow = DateTime.now().plus({days: 1});
var dt2 = dt.startOf('day');    // '2026-01-01T00:00:00'
var dt2 = dt.endOf('month');    // '2026-01-31T23:59:59.999'



// output
var dt = DateTime.fromISO('2026-01-01T00:00:00');
dt.toISO()                      // '2026-01-01T17:00:00.000+03:30'
dt.toFormat('yyyy LLL dd')      // '2026 Jan 01'
dt.toFormat('yyyy-MM-dd HH:mm') // '2026-01-01 17:00'
dt.toMillis()                   // 1767274200000



// timezone

// construct
var dt = DateTime.fromISO('2026-01-01', {zone: 'Europe/Paris'});
var dt = DateTime.now().setZone('Europe/Paris');

// convert
var dt = DateTime.fromISO('2026-01-01');
dt.toUTC().toString()        // '2025-12-31T20:30:00.000Z'
dt.setZone('UTC').toString() // ...

// about how timezone is kept internally
var dt1 = DateTime.fromISO('2026-01-01T00:00:00', {zone:'Asia/Tehran'});
var dt2 = DateTime.fromISO('2026-01-01T00:00:00', {zone:'UTC'});
var f = 'yyyy-MM-dd HH:mm:ss';
dt1.toFormat(f)         // '2026-01-01 00:00:00'
dt2.toFormat(f)         // '2026-01-01 00:00:00'  both show same date
dt1.ts === dt2.ts       // false                  but their ts is different

/* daylight saving time
luxon uses IANA timezone database, which contains:
	exact historical switch dates
	past and future DST transitions
	political timezone changes
*/
var zone = 'America/New_York';
DateTime.fromISO('2026-03-08T01:59:59.999', {zone}).toISO() // '2026-03-08T01:59:59.999-05:00'    EST: UTC‑5 (eastern standard time)
DateTime.fromISO('2026-03-08T02:00:00.000', {zone}).toISO() // '2026-03-08T03:00:00.000-04:00'    EDT: UTC‑4 (eastern daylight time)
// fixed timezone offsets (no dst)
var zone = FixedOffsetZone.instance(-5 * 60);
DateTime.fromISO('2026-03-08T01:59:59.999', {zone}).toISO() // '2026-03-08T01:59:59.999-05:00'
DateTime.fromISO('2026-03-08T02:00:00.000', {zone}).toISO() // '2026-03-08T02:00:00.000-05:00'    no jump



// comparing dates
var dt1 = DateTime.fromISO('2026-01-01T17:00:00');
var dt2 = DateTime.fromISO('2026-01-02T17:00:00');
dt1 < dt2       // true
dt1 > dt2       // false
dt1.equals(dt2) // false



// durations
var dur = Duration.fromObject({hours: 2, minutes: 30});
dur.as('minutes')                             // 150
dur.as('milliseconds')                        // 9000000
dur.toMillis()                                // ...
Duration.fromObject({hours: 1}).as('minutes') // 60

// difference between dates
var dt1 = DateTime.fromISO('2026-01-01T17:00:00');
var dt2 = DateTime.fromISO('2026-01-05T17:00:00');
dt2.diff(dt1, 'days')               // Duration {{days:'}}
dt2.diff(dt1, ['hours', 'minutes']) // Duration {hours:96,minutes:0}
dt2.diff(dt1, 'days').days          // 



// predefined formats
var dt = DateTime.now();
dt.toLocaleString(DateTime.DATE_SHORT) // '4/4/2026'
dt.toLocaleString(DateTime.DATE_FULL)  // 'April 4, 2026'
dt.toLocaleString(DateTime.DATE_HUGE)  // 'Saturday, April 4, 2026'

dt.toLocaleString(DateTime.DATETIME_SHORT) // '4/4/2026, 8:18 PM'
dt.toLocaleString(DateTime.DATETIME_MED)   // 'Apr 4, 2026, 8:18 PM'
dt.toLocaleString(DateTime.DATETIME_FULL)  // 'April 4, 2026 at 8:18 PM GMT+3:30'
dt.toLocaleString(DateTime.DATETIME_HUGE)  // 'Saturday, April 4, 2026 at 8:18 PM Iran Standard Time'



// locale
var dt1 = DateTime.fromISO('2026-01-01', {zone: 'Europe/Paris', locale: 'fr'});
var dt2 = DateTime.fromISO('2026-01-01').setZone('Europe/Paris').setLocale('fr');
dt1.toLocaleString(DateTime.DATE_FULL); // '1 janvier 2026'
dt2.toLocaleString(DateTime.DATE_FULL); // '31 décembre 2025'    (cuz first date goes through conversion)



// intervals
var start = DateTime.fromISO('2026-01-01T10:00');
var end   = DateTime.fromISO('2026-01-01T12:00');
var interval = Interval.fromDateTimes(start, end);
var interval = Interval.fromISO('2026-01-01T10:00/2026-01-01T12:00');

var x = DateTime.fromISO('2026-01-01T11:55');
interval.contains(x)                // true
interval.length('days')             // 0.08333333333333333
interval.length('hours')            // 2
interval.toDuration()               // Duration {milliseconds:7200000}
interval.toDuration().as('minutes') // 120

// split
interval.splitBy({minutes: 20}).map(i=>i.toISO()) // ['10:00/10:45', '10:45/11:30', '11:30/12:00']
var dts = [DateTime.fromISO('2026-01-01T10:23'), DateTime.fromISO('2026-01-01T10:46')];
interval.splitAt(...dts).map(i=>i.toISO())        // ['10:00/10:23', '10:23/11:46', '11:46/12:00']

// overlap
var a = Interval.fromISO('2026-01-01T10:00/2026-01-01T12:00');
var b = Interval.fromISO('2026-01-01T11:00/2026-01-01T13:00');
var b = Interval.fromISO('2026-01-01T13:00/2026-01-01T15:00');
a.overlaps(b) // true
a.overlaps(c) // false

// intersection
var a = Interval.fromISO('10:00/14:00');
var b = Interval.fromISO('12:00/16:00');
var intersection = a.intersection(b);
intersection.toISO() // '12:00/14:00'

// merge
var intervals = [
  Interval.fromISO('10:00/12:00'),
  Interval.fromISO('11:00/14:00'),
  Interval.fromISO('15:00/16:00'),
];
var merged = Interval.merge(intervals); // ['10:00/14:00', '15:00/16:00']

// xor
var intervals = [
  Interval.fromISO('10:00/12:00'),
  Interval.fromISO('11:00/13:00')
];
var xor = Interval.xor(intervals); // ['10:00/11:00', '12:00/13:00']

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// formatting tokens
var dt = DateTime.fromISO('2025-01-07T08:05:03.009');

dt.toFormat('y'),    '2025'
dt.toFormat('yyyy'), '2025'
dt.toFormat('yy'),   '25'

dt.toFormat('M'),    '1'
dt.toFormat('MM'),   '01'
dt.toFormat('MMM'),  'Jan'
dt.toFormat('MMMM'), 'January'

dt.toFormat('L'),    '1'
dt.toFormat('LL'),   '01'
dt.toFormat('LLL'),  'Jan'
dt.toFormat('LLLL'), 'January'

dt.toFormat('d'),    '7'
dt.toFormat('dd'),   '07'

dt.toFormat('H'),    '8'
dt.toFormat('HH'),   '08'

dt.toFormat('m'),    '5'
dt.toFormat('mm'),   '05'

dt.toFormat('s'),    '3'
dt.toFormat('ss'),   '03'

dt.toFormat('S'),    '9'
dt.toFormat('SSS'),  '009'

dt.toFormat('u'),    '0'
dt.toFormat('uu'),   '00'
dt.toFormat('uuu'),  '009'

dt.toFormat('a'),    'AM'

dt.toFormat('c'),    '2'
dt.toFormat('ccc'),  'Tue'
dt.toFormat('cccc'), 'Tuesday'

dt.toFormat('EEE'),  'Tue'
dt.toFormat('EEEE'), 'Tuesday'

dt.toFormat('z'),    'Asia/Tehran'
dt.toFormat('Z'),    '+3:30'

dt.toFormat('D'),    '1/7/2025'
dt.toFormat('DD'),   'Jan 7, 2025'
dt.toFormat('DDD'),  'January 7, 2025'
dt.toFormat('DDDD'), 'Tuesday, January 7, 2025'

dt.toFormat('t'),    '8:05 AM'
dt.toFormat('tt'),   '8:05:03 AM'
dt.toFormat('ttt'),  '8:05:03 AM GMT+3:30'
dt.toFormat('tttt'), '8:05:03 AM Iran Standard Time'

dt.toFormat('T'),    '08:05'
dt.toFormat('TT'),   '08:05:03'
dt.toFormat('TTT'),  '08:05:03 GMT+3:30'
dt.toFormat('TTTT'), '08:05:03 Iran Standard Time'

dt.toFormat('f'),    '1/7/2025, 8:05 AM'
dt.toFormat('ff'),   'Jan 7, 2025, 8:05 AM'
dt.toFormat('fff'),  'January 7, 2025 at 8:05 AM GMT+3:30'
dt.toFormat('ffff'), 'Tuesday, January 7, 2025 at 8:05 AM Iran Standard Time'

dt.toFormat('F'),    '1/7/2025, 8:05:03 AM'
dt.toFormat('FF'),   'Jan 7, 2025, 8:05:03 AM'
dt.toFormat('FFF'),  'January 7, 2025 at 8:05:03 AM GMT+3:30'
dt.toFormat('FFFF'), 'Tuesday, January 7, 2025 at 8:05:03 AM Iran Standard Time'

dt.toFormat('x'),    '1736224503656'
dt.toFormat('X'),    '1736224503'

dt.toFormat('G'),    'AD'
dt.toFormat('GG'),   'Anno Domini'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
