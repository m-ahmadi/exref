// first character of a string
'abc'.charAt(0) // 'a'

// last character of a string
'abc'.slice(-1) // 'c'

// remove characters from the begining of a string
'12345'.slice(1)  // '2345'
'12345'.slice(2)  // '345'

'12345'.substr(1) // '2345'
'12345'.substr(2) // '345'

// remove last character
'12345.00'.slice(0, -1) // better
'12345.00'.substring(0, str.length - 1)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// access an individual character in a string

// string methods
'abcd'.charAt(1)    // 'b'
'abcd'.charAt()     // first charater: 'a'

// bracket notation
'abcd'[0]           // 'a'
// cons:
// can't set the character using this notation
// trying to set a character via index does not throw an error, but the string itself is unchanged.
// (while trying to set a character through charAt results in an error)
// treating the string as an array is an es5 feature. (not availbale in es3)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// array of character ascii codes
[...'abcd'].map(c => c.charCodeAt(0))       // second byte included. [97, 98, 99, 100]
[...'abcd'].map(c => c.charCodeAt(0) & 255) // second byte ignored. (always use this)

// sum of all character ascii codes
[...'Foobar']
  .map(char => char.charCodeAt(0))
  .reduce((current, prev) => prev + current) // 601
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@