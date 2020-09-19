#include <stdio.h>
#include <string.h>

int main () {
	char data[] = "abcdefghijklmnopqrstwxyz";
	char * dataPointer = &data[0];
	
	int i;
	int length = strlen(data);
	
	printf("String: \"%s\"   Count: %d\n", data, length);
	printf("index        hex   dec\n");
	
	for (i=0; i<length; i++) {
		printf("data[%02d]:    %02x    %d\n", i, dataPointer[i], data[i]);
	}
	printf("\ndata[%02d]:    %02x    %d   (1 after the last)\n",
		strlen(data),
		dataPointer[strlen(dataPointer)],
		data[strlen(data)]
	);
	
	getchar();
	return 0;
}