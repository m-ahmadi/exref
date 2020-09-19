#include <stdio.h>

int main() {
	char arr[10] = "ABCDEFGIJK";
	int size = sizeof(arr);
	int i;
	
	printf("sizeof(arr) = %d \n", size);
	
	for(i=0; i<size; i++) {
		printf("%c \n", arr[i]);
	}
	
	getchar();
	return 0;
}

// sizeof() only good for chr arrays