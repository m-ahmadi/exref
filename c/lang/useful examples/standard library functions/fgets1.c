#include <stdio.h>
#include <string.h>

int main() {
	char mohammad[512];
	char * find;
	
	printf("I will collect everything you type INCLUDING new-line: \n");
	fgets(mohammad, 512, stdin);

	printf("\"%s\"", mohammad);
	
	getchar();
	return 0;
}