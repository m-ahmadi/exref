#include <stdio.h>
#include <string.h>

int main() {
	char haystack[20] = "TutorialsPoint"; // char * haystack = "TutorialsPoint";
	char needle[10] = "Point";
	char * ret;
	
	ret = strstr(haystack, needle);
	
	if ( ret != NULL ) {
		printf("Found \"%s\" in \"%s\"\n\tHere's what came back: \"%s\"\n", needle, haystack, ret);
	} else {
		printf("Couldn't find \"%s\" in \"%s\"\n\tHere's what came back: \"%s\"\n", needle, haystack, ret);
	}
	
	getchar();
	return 0;
}