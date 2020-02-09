#include <stdio.h>
#include <string.h>

int main() {
	char src[40];
	char dest[12];
	char * test = "chetor mitori?";

	memset(dest, '\0', sizeof(dest));
	strcpy(src, "This is tutorialspoint.com");
	strncpy(dest, test, 10);

	printf("Final copied string : \"%s\"\n", dest);
	
	getchar();
	return 0;
}