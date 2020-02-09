// d3-format is for formatting numbers for human consumption.

var f = d3.format('.1f');

f(0.10)  // '0.1'
f(0.12)  // '0.1'
f(0.366) // '0.4'
f(0.346) // '0.3'
f(12)    // '12.0'
f(3358)  // '3358.0'

d3.format('.0%')(0.123);  // rounded percentage, '12%'
d3.format('($.2f')(-3.5); // localized fixed-point currency, '(£3.50)'
d3.format('+20')(42);     // space-filled and signed, '                 +42'
d3.format('.^20')(42);    // dot-filled and centered, '.........42.........'
d3.format('.2s')(42e6);   // SI-prefix with two significant digits, '42M'
d3.format('#x')(48879);   // prefixed lowercase hexadecimal, '0xbeef'
d3.format(',.2r')(4223);  // grouped thousands with two significant digits, '4,200'