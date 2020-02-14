// string from ascii code
String.fromCharCode(67)     // "C"
String.fromCharCode(97 + n) // lowercase letters. 97: 'a'. (n > 25 == out of letters range)
String.fromCharCode(65 + n) // uppercase letters. 65: 'A'
// multiple
String.fromCharCode.apply(null, [97,98,99,100]) // "abcd"

// ascii code from string
'abcd'.charCodeAt(0) // 97
'abcd'.charCodeAt(1) // 98
'abcd'.charCodeAt()  // first charater: 97. slower performance.

// note (best to do this)
// strings are stored as utf-16 (double byte).
// you might get non-ascii codes if you don't ignore the second byte.
// to ignore the second byte just strip it out with the bitwise & operator:
'a'.charCodeAt(0) & 0b0000000011111111 // or:
'a'.charCodeAt(0) & 255