// 16 decimal places max
0.11112222333344446

0.111122223333444466    // casts to:
0.11112222333344447

0.111122223333444466666 // casts to:
0.11112222333344447
/* why
64-bit floating point ieee-754:
	a sign bit
	11 exponent bits
	52 fraction bits
each digit represents 4 bits
64-bit = 16 digits
*/