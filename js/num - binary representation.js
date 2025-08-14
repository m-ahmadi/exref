// binary repr - signed
(8).toString(2)   // '1000'
(-8).toString(2)  // '-1000'
(128).toString(2) // '10000000'
(254).toString(2) // '11111110'

// binary repr - unsigned 32-bit repr
repr = dec => (dec >>> 0).toString(2);
repr(8)  // '1000'
repr(-8) // '11111111111111111111111111111000'

// how many bits
(97).toString(2).length  // 7
(255).toString(2).length // 8

// leading zero bits in 32-bit binary repr of number
Math.clz32(1)    // 31 because: 00000000000000000000000000000001
Math.clz32(4)    // 29 because: 00000000000000000000000000000100
Math.clz32(1000) // 22 because: 00000000000000000000001111101000
