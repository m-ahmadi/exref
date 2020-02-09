(97).toString(2).length  // 7
(255).toString(2).length // 8

// leading zero bits in 32-bit binary representation of a number:
Math.clz32(1)    // 31 because: 00000000000000000000000000000001
Math.clz32(4)    // 29 because: 00000000000000000000000000000100
Math.clz32(1000) // 22 because: 00000000000000000000001111101000