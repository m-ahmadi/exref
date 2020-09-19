#include <stdio.h>
#include <string.h>

int main() {
    char * token1, * token2;
	char line[] = "SEVERAL WORDS";
	char * search = " ";

	printf("Original string: \"%s\"\n", line);
	
	token1 = strtok(line, search);
	token2 = strtok(NULL, search);
	
	printf("%s\n%s\n", token1, token2);
	
	printf("Original string: \"%s\"\n", line);
	
	getchar();
	return 0;
}