//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														Basics
	A pointer is a variable that contains the address of a variable.
	Pointers and arrays are closely related.
	The type void * (pointer to void) replaces char * as the proper type for a generic pointer.
	The & operator gives the address of an object.
	The & operator only applies to objects in memory: variables and array elements.
	The & operator can't be applied to expressions, constants, or register variables.
	The * operator is the indirection or dereferencing operator,
	when applied to a pointer, it accesses the object pointer points to.
*/
p = &c;
// Assigns the address of c to the variable p, and p is said to "point to" c.

// Example:
int x = 1,
	y = 2,
	z[10];
	
int *ip; 	// ip is a pointer to int
ip = &x; 	// ip now points to x
y = *ip; 	// y is now 1
*ip = 0; 	// x is now 0
ip = &z[0]; // ip now points to z[0]
/*
	Every pointer points to a specific data type.
	There is one exception:
	A "pointer to void" is used to hold any type of pointer but cannot be dereferenced itself.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*													Pointers and Function Arguments
	Since C passes arguments to functions by value,
	there is no direct way for the called function to alter a variable in the calling function.
	
	For instance:
	A sorting routine might exchange two out-of-order arguments with a function called swap.
	It's not enough to write:
*/
void swap(int x, int y) {
	int temp;
	temp = x;
	x = y;
	y = temp;
}
swap(a, b);
/*
	The function above swaps copies of a and b. (because of call by value)
	We need to pass pointers to a and b instead:
*/
void swap(int *px, int *py) {
	int temp;
	temp = *px;
	*px = *py;
	*py = temp;
}
swap(&a, &b);
/*
	Since the operator & produces the address of a variable, &a is a pointer to a.
	In swap itself, the parameters are declared as pointers, and the operands are accessed indirectly through them.
	
	Pointer arguments enable a function to access and change objects in the function that called it
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														Pointers and Arrays
	Any operation that can be achieved by array subscripting can also be done with pointers.
	The pointer version will in general be faster but harder to understand.
	
	Name of an array (without brackets) is a pointer for the location of the initial element.
	Value of a variable or expression of type array, is the address of element zero of the array
*/
int a[10]	// array of size 10
a[i] 		// i-th element of array
int *pa		// pointer to an integer
pa = &a[0]	// contains address of a[0]
x = *pa		// contents of a[0]

pa+1		// points to next element
pa+i		// points i elements after pa
pa-i		// points i elements before pa

pa			// points to a[0]
*(pa+1)		// contents of a[1]
pa+i		// address of a[i]
*(pa+i)		// contents of a[i]
/*
	All true regardless of the type or size of the variables in the array a.
	The meaning of "adding 1 to a pointer" and by extension, all pointer arithmetic, is that:
	pa+1 points to the next object, and pa+i points to the i-th object beyond pa.
*/
//	Value of a variable or expression of type array, is the address of element zero of the array, So:
pa = &a[0]; // pa and a have identical values
//	Since the name of an array is a synonym for the location of the initial element:
pa = &a[0]	// can also be written as:
pa = a

a[i]	// can be written as:
*(a+i)	// In evaluating a[i], C converts it to *(a+i) immediately; the two forms are equivalent.

&a[i]	// is identical to:
a+i		// address of i-th element beyond a

pa[i]	// is identical to:
*(pa+i)
//	In short, an array-and-index expression is equivalent to one written as a pointer and offset.


//	There is one difference between an array name and a pointer that must be kept in mind:
//	A pointer is a variable, so:
pa = a	// legal
pa++	// legal
//	An array name is not a variable, so:
a = pa	// illegal
a++		// illegal
/*	
	When an array name is passed to a function, what is passed is the location of the initial element.
	Within the called function, this argument is a local variable, and so an array name parameter is a pointer,
	that is, a variable containing an address.
*/

int strlen(char *s) {
	int n;
	for (n = 0; *s != '\0', s++) {
		n++;
	}
	return n;
}
/*
	incrementing s is perfectly legal (since it's a pointer)
	s++ increments strlen's private copy of the pointer,
	and has no effect on the character string in the function that called strlen
	That means that these calls all work:
*/
strlen("hello, world"); // string constant
strlen(array); 			// char array[100];
strlen(ptr); 			// char *ptr;

//	As formal parameters in a function definition, these two are equivalent:
char s[];
char *s;
/*
	We prefer the latter because it says more explicitly that the variable is a pointer.
	When an array name is passed to a function, the function can at its convenience
	believe that it has been handed either an array or a pointer, and manipulate it accordingly.
	It can even use both notations if it seems appropriate and clear.
	It is possible to pass part of an array to a function, by passing a pointer to the beginning of the subarray.
	For example, if a is an array,
*/
f( &a[2] )
//	and
f( a+2 )
//	both pass to the function f the address of the subarray that starts at a[2].
//	Within f, the parameter declaration can read
void f( int arr[] ) {}
//	or
void f(int *arr) {}
/*
	So as far as f is concerned, the fact that the parameter refers to part of a larger array is of no consequence.
	If one is sure that the elements exist, it is also possible to index backwards in an array; p[-1], p[-2],
	and so on are syntactically legal, and refer to the elements that immediately precede p[0].
	Of course, it is illegal to refer to objects that are not within the array bounds.
*/