// \uXXXX denotes unicode sequence
const s1 = '\u00E9'       //é
const s2 = '\u0065\u0301' //é
s1.length //1
s2.length //2

// from decimal equivalent
['فولاد', '\u200C', 'مبارکه'].join('')                  // 'فولاد‌مبارکه'
['فولاد', String.fromCharCode(8204), 'مبارکه'].join('') // 'فولاد‌مبارکه'

// encode ascii chars with \x (only accepts 2 chars, from \x00 to \xFF)
'\x61' // a
'\x2A' // *

// zero-width chars
'\u200B'  String.fromCharCode(8203)  // zero-width space
'\u200C'  String.fromCharCode(8204)  // zero-width non-joiner
'\u200D'  String.fromCharCode(8205)  // zero-width joiner
'\uFEFF'  String.fromCharCode(65279) // zero-width no-break space

// replace zero-width chars
str.replace(/[\u200B-\u200D\uFEFF]/g, '')
str.replace(/[\u200C]/g, ' ')

str.replace(/\u200B/g, '')
str.replace(/\s?\u200C\s?/g, ' ')
str.replace(/\u200D/g, '')
str.replace(/\uFEFF/g, '') 

// replace all unicode space: http://jkorpela.fi/chars/spaces.html
str.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g, '');

// normalize (es6)
const s1 = '\u00E9'  //é
const s3 = 'e\u0301' //é
s1 !== s3                         // false
s1.normalize() === s3.normalize() // true
