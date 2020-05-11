// \uXXXX denotes unicode sequence
const s1 = '\u00E9'       //é
const s2 = '\u0065\u0301' //é
s1.length //1
s2.length //2

// encode ascii chars with \x (only accepts 2 chars, from \x00 to \xFF)
'\x61' // a
'\x2A' // *

// replace zero-width chars
'u+200B' // zero-width space
'u+200C' // zero-width non-joiner
'u+200D' // zero-width joiner
'u+FEFF' // zero-width no-break space

str.replace(/[\u200B-\u200D\uFEFF]/g, '')
str.replace(/[\u200C]/g, ' ')

// replace all unicode space: http://jkorpela.fi/chars/spaces.html
str.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g, '');

// normalize (es6)
const s1 = '\u00E9'  //é
const s3 = 'e\u0301' //é
s1 !== s3                         // false
s1.normalize() === s3.normalize() //true