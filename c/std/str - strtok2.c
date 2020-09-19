#include <stdio.h>
#include <string.h>
int main() {
    char * token1, * token2;
	char line[] = "SEVERAL WORDS Hello Dude What";
	char * search = " ";

	token1 = strtok(line, search);
	while( token1 != NULL ) {
		printf( "%s\n", token1 );
		token1 = strtok(NULL, search);
	}
	
	getchar();
	return 0;
}