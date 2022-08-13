// anonymous method (C# 2.0)

Func<int, int, int> add = delegate(int x, int y) {
	return x + y;
};

Action<int> print = delegate(int x) {
	Console.WriteLine(x);
}

Action<int> helloWorld = delegate { // parameters can be elided if ignored
	Console.WriteLine("Hello world!");
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// lambda (C# 3.0)
// two flavours:

// expression:
Func<int, int, int> add = (int x, int y) => x + y;  // or...
Func<int, int, int> add = (x, y) => x + y;          // types are inferred by the compiler

// statement:
Action<int> print = (int x) => { Console.WriteLine(x); };
Action<int> print = x => { Console.WriteLine(x); }; // inferred types
Func<int, int, int> add = (x, y) => { return x + y; };
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// local function (C# 7.0)

int add(int x, int y) => x + y;

void print(int x) { Console.WriteLine(x); }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@