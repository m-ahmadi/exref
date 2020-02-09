#include <stdio.h>
int main() {
	int a[] = {5, 2, 4, 6, 1, 3};
	int j;
	int i;
	int key;

	for (j = 1; j < sizeof(a)/sizeof(a[0]); ++j) {
		key = a[j];
		i = j - 1;
		while (i > 0 && a[i] > key) {
			a[i+1] = a[i];
			i -= 1;
		}
		a[i+1] = key;
	}


	int t;
	for ( t=0; t < sizeof(a)/sizeof(a[0]); ++t ) {
		printf("%d \n", a[t]);
	}

	getchar();
	return 0;
}