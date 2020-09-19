#include <stdio.h>

void mikado(int);

int main() {
	int pooh = 2;
	int bah = 5;
	
	printf("main() \n");
	printf("\t %d \n", pooh);
	printf("\t %p \n", &pooh);
	printf("\t %d \n", bah);
	printf("\t %p \n\n", &bah);
	
	mikado(bah);
	getchar();
	return 0;
}
void mikado(int bah) {
	int pooh = 10;
	
	printf("mikado()\n");
	printf("\t %d \n", pooh);
	printf("\t %p \n", &pooh);
	printf("\t %d \n", bah);
	printf("\t %p \n\n", &bah);
}