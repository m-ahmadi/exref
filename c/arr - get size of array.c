
int a[17];
n = sizeof(a)/sizeof(a[0]);
//	sizeof is the right way iff you are dealing with arrays not received as parameters

int a[17];
int n = sizeof(a);
//	inside functions this method does not work. 
//	pass an additional parameter size_t size indicating the number of elements in the array