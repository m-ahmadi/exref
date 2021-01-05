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