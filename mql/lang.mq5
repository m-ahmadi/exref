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


// bool
bool foo = false;

// char
uchar a = 'a';
uchar z = 'z';
a // 97
z // 122

// string
string foo = "";
StringSubstr("hello", 0, 4); // "hell"
StringLen("hello");          // 5

// color (base type)
color foo = 0xFF0000;   // hex number
color foo = clrRed;     // predefined constant
color foo = C'255,0,0'; // rgb constant

// datetime (base type)
datetime foo = D'2020.01.01 00:00'; // hour & minute
datetime foo = D'2020.01.01 00';    // hour only
datetime foo = D'2020.01.01';       // date only
datetime myDate = D'';              // today's date
datetime myDate = D'02:00';         // today's date 02:00

// enum
enum days {
	saturday,
	sunday,
	monday = 2;
};

// array
int arr[3];           // static
int arr[3] = {1,2,3}; // ... init
arr[3] = 4;           // not allowed (but no compile error)
int arr[];            // dynamic
int arr[] = {1,2};    // ... init
string a[] = {"hi"};  // ...
ArraySize(arr);       // 2
a.Size();             // ...
a.Push("bi");         // true, a={"hi","bi"}
int mat[3][3];        // multi-dimensional (matrix)

// constant
const int saturday = 0;
const int sunday = 1;

// constant - using the preprocessor (placed at beginning of file)
#define FOO "hi"
#define BAR 123
#define BAZ 1.0

// NULL constant
string x;
if (x == NULL) x = "hi";
x // "hi"

// truthy falsey
int a = 0;
int b = 1;
(bool)a // false
(bool)b // true
(string)!!a // "false"
(string)!!b // "true"

// static variable (local variable that remains in memory even after program exits the variable's scope)
void DoSome() {
	static int foo = 0;
}

// macro                                 e.g.
__FILE__     // name of file             "foo.mq5"
__LINE__     // line number              6
__FUNCTION__ // function currently in    "OnStart"
// https://www.mql5.com/en/docs/constants/namedconstants/compilemacros

// struct
struct Foo {
	int  a;
	bool b;
	// any type except void
};
Foo my_set = {7, false};
my_set.a = 23;

struct Bar: Foo {
	string c;
};
Bar my_set2 = {7, false, "hello"};

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

// ctrl - conditional - if
if (something) {

} else if (otherthing) {

} else {
	
}

// ctrl - conditional - ternery
int x = something ? 1 : 0;

// ctrl - switch
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

string res = "";
int i = 0;
switch(i) {
	case 1:
		res = "one"; break;
	default:
		res = "none"; break;
	case 2:
		res = "two"; break;
	case 3:
		res = "three"; break;
}

// ctrl - loop
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

// naming convention
int GlobalVariable;
void MyFunc() {}
int localVariable;
const int MY_CONSTANT;

// comment
// line
/*
	block
*/

// input variables (set from outside, read-only inside program, placed at beginning of file)
input int foo = 10;
input ENUM_MA_METHOD MAMethod = MODE_SMA;
sinput int foo;       // static (can change but can't be optimized)
static input int foo; // ...
