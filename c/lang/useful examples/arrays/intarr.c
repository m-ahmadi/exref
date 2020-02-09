#include <stdio.h>

int main() {
	int arr[15] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
	int i;
	
	for(i = 0; i<15; i++) {
		printf("%d \n", arr[i]);
	}
	
	getchar();
	return 0;
}

// sizeof() only good for chr arrays