//	A static variable inside a function keeps its value between invocations.
//	A static global variable/function is "seen" only in the file it's declared in.

void get() {
    static int number = 4;

    printf("%d\n", ++number);
}

int main() {
	get();
	get();
	get();
	get();
	return 0;
}
