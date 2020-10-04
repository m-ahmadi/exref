// bitwise operators:

&	|	^	~	<<	>>	>>>
//-------------------------------------------------------------------------------------------------------------------------------
// bitwise and
// returns a one in each bit position for which the corresponding bits of both operands are ones.
a & b
0b00001111 &
0b11111111
0b00001111
//-------------------------------------------------------------------------------------------------------------------------------
// bitwise or
// returns a zero in each bit position for which the corresponding bits of both operands are zeros.
a | b
0b01010110 |
0b00110101
0b01110111
//-------------------------------------------------------------------------------------------------------------------------------
// bitwise xor
// returns a zero in each bit position for which the corresponding bits are the same.
// returns a one  in each bit position for which the corresponding bits are different.
a ^ b
0b00001111 ^
0b11110000
0b11111111
//-------------------------------------------------------------------------------------------------------------------------------
// bitwise not
// inverts the bits of its operand.
~ a
~0b00001111 // -16
~0b00000111 // -8
//-------------------------------------------------------------------------------------------------------------------------------
// left shift
// shifts a in binary representation b bits to the left, shifting in zeros from the right.
a << b
0b00001111 << 00000001
0b00011110

0b00001111 << 2
0b00111100
//-------------------------------------------------------------------------------------------------------------------------------
// sign-propagating right shift
// shifts a in binary representation b bits to the right, discarding bits shifted off.
a >> b
0b11110000 >> 00000001
0b01111000

0b11110000 >> 2
0b00111100
//-------------------------------------------------------------------------------------------------------------------------------
// zero-fill right shift
// shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.
a >>> b
0b11110000 >> 3
0b00011110
//-------------------------------------------------------------------------------------------------------------------------------