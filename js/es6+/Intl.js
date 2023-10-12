// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

Intl.Collator()
Intl.DateTimeFormat(locales=''|['',..], ?options={
	dateStyle:       'full|long|medium|short',
	timeStyle:       'full|long|medium|short',
	calendar:        'buddhist|chinese|coptic|dangi|ethioaa|ethiopic|gregory|hebrew|indian|islamic|islamic-umalqura|islamic-tbla|islamic-civil|islamic-rgsa|iso8601|japanese|persian|roc|islamicc',
	dayPeriod:       'narrow|short|long',
	numberingSystem: 'arab|arabext|bali|beng|deva|fullwide|gujr|guru|hanidec|khmr|knda|laoo|latn|limb|mlym|mong|mymr|orya|tamldec|telu|thai|tibt',
	localeMatcher:   'best fit|lookup',
	timeZone:        <RUNTIME_DEFAULT_TIMEZONE> | 'UTC|Asia/Shanghai|America/New_York|...',
	hour12:          boolean,
	hourCycle:       'h11|h12|h23|h24',
	formatMatcher:   'best fit|basic',
	weekday:         'long|short|narrow',
	era:             'long|short|narrow',
	year:            'numeric|2-digit',
	month:           'numeric|2-digit|long|short|narrow',
	day:             'numeric|2-digit',
	hour:            'numeric|2-digit',
	minute:          'numeric|2-digit',
	second:          'numeric|2-digit',
	fractionalSecondDigits: 0|1|2|3|4,
	timeZoneName:    'long|short|shortOffset|longOffset|shortGeneric|longGeneric',
})
Intl.DisplayNames()
Intl.ListFormat()
Intl.Locale()
Intl.NumberFormat()
Intl.PluralRules()
Intl.RelativeTimeFormat()
Intl.Segmenter()
// static methods
Intl.getCanonicalLocales()
Intl.supportedValuesOf()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var d = new Date(2022,2,21);

new Intl.DateTimeFormat().format(d)                   // '21/03/2022'
Intl.DateTimeFormat().format(d)                       // ...
Intl.DateTimeFormat(0,{timeStyle:'medium'}).format(d) // '00:00:00'

var [date,time] = Intl.DateTimeFormat(0,{dateStyle:'short',timeStyle:'medium'}).format(d).split(', ');
date.split('/').reverse().join('') +'-'+ time.replaceAll(':','') // '20220321-000000'

Intl.DateTimeFormat('fa-IR').format(d)                                                   // ۱۴۰۱/۱/۱
Intl.DateTimeFormat('fa-IR',{numberingSystem:'latn'}).format(d)                          // 1401/1/1
Intl.DateTimeFormat('fa-IR', {dateStyle:'full',timeStyle:'long'}).format(d)              // ۱۴۰۱ فروردین ۱, دوشنبه، ساعت ۰:۰۰:۰۰ (‎+۳:۳۰ گرینویچ)
Intl.DateTimeFormat('fa-IR-u-nu-latn', {dateStyle:'full',timeStyle:'long'}).format(d)    // 1401 فروردین 1, دوشنبه، ساعت 0:00:00 (‎+3:30 گرینویچ)
Intl.DateTimeFormat('en-US-u-ca-persian', {dateStyle:'full',timeStyle:'long'}).format(d) // Monday, Farvardin 1, 1401 AP at 12:00:00 AM GMT+3:30
Intl.DateTimeFormat('en-US-u-ca-persian', {year:'numeric'}).format(d)                    // 1401 AP
Intl.DateTimeFormat('en-US-u-ca-persian', {month:'short'}).format(d)                     // Farvardin
Intl.DateTimeFormat('en-US-u-ca-persian', {day:'numeric'}).format(d)                     // 1
