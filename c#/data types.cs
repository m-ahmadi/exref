int a = 5;             
int b = a + 2; // ok

bool test = true;
int c = a + test; // Error. Operator '+' cannot be applied to operands of type 'int' and 'bool'.

// declaration only:
float temperature;
string name;
MyClass myClass;

// declaration with initializers:
char firstLetter = 'C';
var limit = 3;
int[] source = { 0, 1, 2, 3, 4, 5 };
long[] numArr = { 22645269567765904, 20190807, 1 };