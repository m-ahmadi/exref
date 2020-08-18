// ints                                                         byte size
char     -128                        127                     // 1
short    -32768                      32767                   // 2
int      -2147483648                 2147483647              // 4
long     -9223372036854775808        9233372036854775807     // 8

uchar     0                          127                     // 1
ushort    0                          1                       // 2
uint      0                          65535                   // 4
ulong     0                          18446744073709551615    // 8

bool      0                          1                       // 1
color    -1                          16777215                // 4
datetime  0                          32535244799             // 8

double    1.175494351e-38            3.402823466e+38         // 4
float     2.2250738585072014e-308    1.7976931348623158e+308 // 8
/* casting
integers get truncated  if cast to smaller type
decimals loose fraction if cast to ints */
char   => short
short  => int    | float
int    => long   | double | ->float
long   -> double | float

uchar  => ushort | short
ushort => uint   | int    | float
uint   => ulong  | long
ulong  -> double

float  => double
double => ---
=> // lossless cast
-> // lossful  cast

string foo = "";
StringSubstr("hello", 0, 4); // "hell"

bool foo = false;

color foo = 0xFF0000;   // hex number
color foo = clrRed;     // predefined constant
color foo = C'255,0,0'; // rgb constant

datetime foo = D'2020.01.01 00:00'; // hour & minute
datetime foo = D'2020.01.01 00';    // hour only
datetime foo = D'2020.01.01';       // date only
datetime myDate = D'';              // today's date
datetime myDate = D'02:00';         // today's date 02:00

// array
int arr[3];           // static
int arr[3] = {1,2,3}; // ... init
arr[3] = 4;           // compile error (arr[2] == last item)
int arr[];            // dynamic
int arr[] = {1,2};    // ... init
ArraySize(arr)        // 2
int mat[3][3];        // multi-dimensional (matrix)

// constant
const int saturday = 0;
const int sunday = 1;
#define FOO "hi" // constant using preprocessor (placed at begining of file)

// enum
enum days {
	saturday,
	sunday,
	monday = 2;
};

// static variable (local variable that remains in memory even after program exits the variable's scope)
void DoSome() {
	static int foo = 0;
}

// input variables (placed at begining of file)
input int foo = 10;
input ENUM_MA_METHOD MAMethod = MODE_SMA;
sinput int foo; // static (can change but can't be optimized)

// predefined variable
_Symbol // symbol of current chart
_Period // period of current chart in minutes
_Point  // point value            of current symbol
_Digits // point's decimal digits of current symbol

// struct
struct foo {
	int  a;
	bool b;
	// any type except void
};
foo my_set = {7, false};
my_set.a = 23;

struct bar: foo {
	string c;
};
bar my_set2 = {7, false, "hello"};

// class
class Animal {
	protected:
		int foo;
		double bar[];
	public:
		double Foo(int x=0);
		void Bar();
	MyMethod();
};

// function
void Foo() {}
int  Foo() { return 1; }
void Foo(int a, int b) {}
void Foo(int a=true, bool b=true) {} // default param
void Foo(int &arr[]) {}              // pass by reference param

bool Foo(int a, int b=10);
bool Foo(double a);                  // overload

// control
if (something) {

} else if (otherthing) {

} else {
	
}
int x = something ? 1 : 0;

int x = 1;
switch (x) {
	case 1:
		Print("x is 1");
		break;
	case 2:
		Print("x is 2");
		break;
	default:
		Print("x is not 1 or 2");
}

for (int i=1; i<5; i++) {
	Print(i); // 0, 1, 2, 3, 4
	continue;
	break;
}
for (int i=0, j=0; a<5; i++, j+=2) {
	Print(a, b); // 0,0  1,2  2,4  3,6
}

int i = 0;
while (i < 5) {
	Print(i); // 0, 1, 2, 3, 4
	i++;
}

int i = 0;
do {
	Print(i); // 0, 1, 2, 3, 4
	i++;
}
while(count < 5)

// naming conv
int GlobalVariable;
void MyFunc() {}
int localVariable;
const int MY_CONSTANT;

// line
/*
	block
*/