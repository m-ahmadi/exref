Console.WriteLine( (decimal)5 / 20 );

Console.WriteLine("{0:N2}", ((double)n) / 1450);

//------------------------------------------------------------------------------
// when using int for decimal numbers, the result is not rounded up/down,
// it's just the integer part before the decimal point.
int num;
num = 5  / 20; // answer: 0.25  num: 0
num = 10 / 20; // answer: 0.5   num: 0
num = 20 / 20; // answer: 1     num: 1
num = 30 / 20; // answer: 1.5   num: 1
num = 50 / 20; // answer: 2.5   num: 2
Console.WriteLine( num );