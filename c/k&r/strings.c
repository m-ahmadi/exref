/*
	Strings are one-dimensional array of characters terminated by a null character '\0'.
	Size of this array is 1 more than the number of characters in the string. (to hold null character)
	You don't need to place the null character at the end of a string,
	The C compiler automatically places the '\0' at the end of the string when it initializes the array.
	
	C supports a wide range of functions that manipulate null-terminated strings
	strcpy()
	strcat()
	strlen()
	strcmp()
	strchr()
	strstr()
*/
#include <stdio.h>
int main() {
	char str1[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
	char str2[] = "Hello";
	
	printf("%s \n", str2);
	printf("%s", str2);
	
	getchar();
	return 0;
}