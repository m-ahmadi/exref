#include <stdio.h>

int main() {
	int bah = 7;
	int *pointer = &bah;
	printf("Variable                         =   %d \n", bah);
	printf("Address of variable              =   %d (same as what is in pointer var)\n", &bah);
	printf("Pointer variable                 =   %d (Decimal) = %p (Hex) \n", pointer, pointer);
	printf("What pointer variable points to  =   %d \n", *pointer);
	getchar();
	return 0;
}