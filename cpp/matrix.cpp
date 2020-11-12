#include <iostream>
#include <cstdlib>
#include <ctime>
#include <vector>
#include <stdio.h>

using namespace std;

void displayVector(vector<int> vect) {
	for (int i = 0; i < vect.size(); i++) {
		cout << vect[i] << " ";
	}   
}

int main() {
	vector<int> numbers;
	int number;
	
	srand(time(NULL));
	for (int i = 1; i<= 1000000; i++) {
		number = rand() % 9 + 0;
		numbers.push_back(number);
	}
	displayVector(numbers);
	
	cout << "\nPress Enter to exit.";
	getchar();
	return 0;   
}
