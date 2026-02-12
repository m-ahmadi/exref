// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

locales = 'en|en-US|en-GB|fa|...'|['',..]
numberingSystem = 'arab|arabext|bali|beng|deva|fullwide|gujr|guru|hanidec|khmr|knda|laoo|latn|limb|mlym|mong|mymr|orya|tamldec|telu|thai|tibt'

Intl.Collator()
Intl.DateTimeFormat(locales=locales, ?options={
	dateStyle:       'full|long|medium|short',
	timeStyle:       'full|long|medium|short',
	calendar:        'buddhist|chinese|coptic|dangi|ethioaa|ethiopic|gregory|hebrew|indian|islamic|islamic-umalqura|islamic-tbla|islamic-civil|islamic-rgsa|iso8601|japanese|persian|roc|islamicc',
	dayPeriod:       'narrow|short|long',
	numberingSystem: numberingSystem,
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
Intl.NumberFormat(?locales=locales, ?options={
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters
	localeMatcher:            'best fit|lookup',
	numberingSystem:          numberingSystem,
	style:                    'decimal|currency|percent|unit',
	currency:                 '|USD|EUR|CNY|...',
	currencyDisplay:          'symbol|code|narrowSymbol|name',
	currencySign:             'standard|accounting',
	unit:                     '|acre|bit|byte|...', // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers
	unitDisplay:              'short|narrow|long',
	minimumIntegerDigits:     1,
	minimumFractionDigits:    2,
	maximumFractionDigits:    3,
	minimumSignificantDigits: 1,
	maximumSignificantDigits: 21,
	roundingPriority:         'auto|morePrecision|lessPrecision',
	roundingIncrement:        1|2|5|10|20|25|50|100|200|250|500|1000|2000|2500|5000,
	roundingMode:             'ceil|floor|expand|trunc|halfCeil|halfFloor|halfExpand|halfTrunc|halfEven',
	trailingZeroDisplay:      'auto|stripIfInteger',
	notation:                 'standard|scientific|engineering|compact',
	compactDisplay:           'short|long',
	useGrouping:              'always|auto|min2'|true|false,
	signDisplay:              'auto|always|exceptZero|negative|never',
})
Intl.PluralRules()
Intl.RelativeTimeFormat()
Intl.Segmenter()
// static methods
Intl.getCanonicalLocales()
Intl.supportedValuesOf()

// how default locale is determined
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var d = new Date(2022,2,21,18,10,24);

new Intl.DateTimeFormat().format(d)     // depends on default locale (which may differ, e.g. on pc is 'en-GB', on laptop is 'en-US')
new Intl.DateTimeFormat('en').format(d) // '21/03/2022'
Intl.DateTimeFormat('en').format(d)     // ...

Intl.DateTimeFormat('en-CA').format(d)                                                     // '2022-03-21'
Intl.DateTimeFormat('en-CA',{dateStyle:'short',timeStyle:'medium'}).format(d)              // '2022-03-21, 6:10:24 p.m.'
Intl.DateTimeFormat('en-CA',{dateStyle:'short',timeStyle:'medium',hour12:false}).format(d) // '2022-03-21, 18:10:24'
Intl.DateTimeFormat('en-CA',{dateStyle:'short',timeStyle:'short',hour12:false}).format(d)  // '2022-03-21, 18:10'

Intl.DateTimeFormat('en-GB').format(d)                                                     // '21/03/2022'
Intl.DateTimeFormat('en-GB',{dateStyle:'short'}).format(d)                                 // ...
Intl.DateTimeFormat('en-GB',{timeStyle:'medium'}).format(d)                                // '18:10:24'

Intl.DateTimeFormat('en-US').format(d)                                                     // '3/21/2022' (same things with 'en')
Intl.DateTimeFormat('en-US',{dateStyle:'short'}).format(d)                                 // '3/21/22'
Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit'}).format(d)      // '03/21/2022'
Intl.DateTimeFormat('en-US',{timeStyle:'medium'}).format(d)                                // '6:10:24 PM'

Intl.DateTimeFormat('en-GB').format(d).split('/').reverse().join('')                       // '20140101'
var [date,time] = Intl.DateTimeFormat('en-GB',{dateStyle:'short',timeStyle:'medium'}).format(d).split(', ');
date.split('/').reverse().join('') +'-'+ time.replaceAll(':','')                           // '20220321-000000'



Intl.DateTimeFormat('fa-IR').format(d)                                                   // ۱۴۰۱/۱/۱
Intl.DateTimeFormat('fa-IR',{numberingSystem:'latn'}).format(d)                          // 1401/1/1
Intl.DateTimeFormat('fa-IR', {dateStyle:'full',timeStyle:'long'}).format(d)              // ۱۴۰۱ فروردین ۱, دوشنبه، ساعت ۰:۰۰:۰۰ (‎+۳:۳۰ گرینویچ)
Intl.DateTimeFormat('fa-IR-u-nu-latn', {dateStyle:'full',timeStyle:'long'}).format(d)    // 1401 فروردین 1, دوشنبه، ساعت 0:00:00 (‎+3:30 گرینویچ)
Intl.DateTimeFormat('en-US-u-ca-persian', {dateStyle:'full',timeStyle:'long'}).format(d) // Monday, Farvardin 1, 1401 AP at 12:00:00 AM GMT+3:30
Intl.DateTimeFormat('en-US-u-ca-persian', {year:'numeric'}).format(d)                    // 1401 AP
Intl.DateTimeFormat('en-US-u-ca-persian', {month:'short'}).format(d)                     // Farvardin
Intl.DateTimeFormat('en-US-u-ca-persian', {day:'numeric'}).format(d)                     // 1
