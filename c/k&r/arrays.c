#include <stdio.h>

int main() {
	// uninitialized
	char str[10];
	int nums[15];
	
	// initialized
	char str2[4] = "fudge";
	int nums[7] = {1, 2, 3, 4, 5, 6};
	char str3[] = "As many as you want";
	
	return 0;
}