var str = '';

str.length

str.at(index)
str.charAt(index)
str.charCodeAt(index)
str.codePointAt(pos)
str.concat(str, ...?strN)
str.includes(searchString, ?position)
str.endsWith(searchString, ?length)
str.indexOf(searchValue, ?fromIndex)
str.lastIndexOf(searchValue, ?fromIndex)
str.localeCompare(compareString, ?locales, ?options)
str.match(regexp)
str.matchAll(regexp)
str.normalize(?form)
str.padEnd(targetLength, ?padString)
str.padStart(targetLength, ?padString)
str.repeat(count)
str.replace(searchFor, replaceWith)
str.replaceAll(searchFor, replaceWith)
str.search(regexp)
str.slice(beginIndex, ?endIndex)
str.split(?sep, ?limit)
str.startsWith(searchString, ?length)
str.substring(indexStart, ?indexEnd)
str.toLocaleLowerCase(?locale, ...?locales)
str.toLocaleUpperCase(?locale, ...?locales)
str.toLowerCase()
str.toString()
str.toUpperCase()
str.trim()
str.trimStart() | trimLeft()
str.trimEnd()   | trimRight()
str.valueOf()
str.@@iterator()

// static methods
String.fromCharCode(num1, ?num2, ..., ?numN)
String.fromCodePoint(num1, ?num2, ..., ?numN)
String.raw()

// html wrapper methods (deprecated)
str.anchor(name)     // <a name="name"> (hypertext target)
str.big()            // <big>
str.blink()          // <blink>
str.bold()           // <b>
str.fixed()          // <tt>
str.fontcolor(color) // <font color="color">
str.fontsize(size)   // <font size="size">
str.italics()        // <i>
str.link(url)        // <a href="url"> (link to URL)
str.small()          // <small>
str.strike()         // <strike>
str.sub()            // <sub>
str.sup()            // <sup>
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// immutable (all methods return a new string)
var s = 'abcd';
s[0] = 'x'; // won't throw, but string won't change
s // 'abcd'

// max possible length
var s = '1'.repeat(5.3e8) // 530 MB
var s = '1'.repeat(5.4e8) // Uncaught RangeError: Invalid string length

// treating string as array is es5+
'abc'[0] // 'a'
'abc'[1] // 'b'

// backslash auto scaped (unsless scaped itself)
'\asad'	// 'asad'
'\\asad'// '\asad'

// check for empty string
if (str !== '')    // best
if (str)
if (str.length)
if ( !str.trim() ) // contains only whitespaces

// does contain line break?
/\r|\n/.test('string')

// repeat string multiple times
Array(3).join('abc')  // 'abcabc'
'abc'.repeat(2)       // 'abcabc'

// replace all char occurrences (or remove by replacing with '')
'foobar'.replace(/foo/g, 'bar')
'fooBarFoobar'.replace(/foo/ig, 'bar')
'foobar'.replaceAll('bar', 'foo') // new
'foofoobar'.split('bar').join('') // 'foofoo' (slower)

// replace first occurrence
'foofoobar'.replace('foo', 'bar') // 'barfoobar'

// no escaping of backslashes
var path = String.raw`C:\Windows\file.txt`;
`this is: ${path}` // 'Here: C:\Development\profile\aboutme.html'