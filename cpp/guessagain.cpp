#include <iostream>
#include <sstream>
#include <stdio.h>
using namespace std;

int main() {
	string answer = "Mohammad", question = "Whose your daddy? ", useranswer, message;
	int tcount = 0, maxtries = 10;
	bool loop = true;
	
	while (loop) {
		if (tcount < maxtries) {
			cout << question;
			getline(cin, useranswer);
			if (useranswer == answer) {
				cout << "Congratulation you're my bitch !";
				loop = false;
			} else {
				tcount++;
				if (tcount < maxtries) {
					std::stringstream sstm;
					sstm << "Wrong answer! " << tcount << " try failed " << maxtries - tcount << " try left.";
					message = sstm.str();
					cout << message << endl;
				}
			}
		} else {
			cout << "Game over Looooooseeeer !!!";
			loop = false;
		}
	};
	
	cout << "\nPress Enter to exit.";
	getchar();
	return 0;
}
