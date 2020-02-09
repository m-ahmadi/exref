#include <stdio.h>

int main() {
	char str1[20], str2[30];

	printf("Enter name: ");
	scanf("%s", &str1);

	printf("Enter your website name: ");
	scanf("%s", &str2);
	
	printf("Entered Name: %s\n", str1);
	printf("Entered Website:%s\n", str2);
	
	scanf("%s");
	return(0);
}