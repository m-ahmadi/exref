#include <stdio.h>
#include <string.h>

int main() {
	char src[40];
	char dest[100];
	char * source = "Tush bi halet?";
	
	memset(dest, '\0', sizeof(dest));
	
	strcpy(src, "Salam olaghe aziz.");
	printf("\"%s\"\n", src);
	
	strcpy(dest, source);
	printf("\"%s\"\n", dest);
	
	strcpy(dest, src);
	printf("\"%s\"\n", dest);
	
	getchar();
	return 0;
}