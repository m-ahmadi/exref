#include <stdio.h>
#include <string.h>

int main() {
	char * s;
	char buf[] = "This is a test";
	
	s = strchr(buf, 't');
	
	if (s != NULL) {
		printf ("found a 't' at %s\n", s);
	}
	
	getchar();
	return 0;
}