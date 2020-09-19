/*
	c	Character
	d or i	Signed decimal integer
	e	Scientific notation (mantissa/exponent) using e character
	E	Scientific notation (mantissa/exponent) using E character
	f	Decimal floating point
	g	Uses the shorter of %e or %f
	G	Uses the shorter of %E or %f
	o	Signed octal
	s	String of characters
	u	Unsigned decimal integer
	x	Unsigned hexadecimal integer
	X	Unsigned hexadecimal integer (capital letters)
	p	Pointer address
	n	Nothing printed
	%	Character
*/
#include <stdio.h>
int main() {
	int num = 2;
	char name[] = "Mohammad";
	
	printf("%d \n", num);
	printf("%s \n", name);
	printf("%d", name);
	
	return 0;
}