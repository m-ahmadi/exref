#include <stdio.h>
#include <string.h>

int main () {
	char str[50] = "Salam\n";
	char * p = str;
	
	p[strlen(p)-2] = 0;
	
	printf( "Length: %d\n", strlen(str) );
	printf( "Length: %s\n", p);
	printf( "Length: %s\n", str);
	printf( "------------");
	
	getchar();
	return 0;
}