#include <stdio.h>
#include <string.h>

int main() {
	char mohammad[512];
	char * find;
	
	printf("I will collect everything you type BUT new-line: \n");
	
	fgets(mohammad, 512, stdin);
	find = strchr(mohammad, '\n');
	if (find) {
		*find = '\0';
	} else {
		while (getchar() != '\n') {
			continue;
		}
	}
	printf("\"%s\"", mohammad);
	
	getchar();
	return 0;
}