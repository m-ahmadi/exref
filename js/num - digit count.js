(''+123).length         // 3
(''+123.4).length       // 5 (!)
(123).toString().length // 3
Math.max(Math.floor(Math.log10(Math.abs(123))), 0) + 1

// magnitude of number
                f = Math.log10    f = x => Math.floor(Math.log10(x) + 1)
f(0.1)       // -1                0
f(0.01)      // -2               -1
f(0.015)     // -1.8239          -1
f(0.001)     // -3               -2
f(0.00001)   // -5               -4
f(0.000015)  // -4.8239          -4
f(0.0000105) // -4.9788          -4

// generate 1 in different order-of-magnitudes
f = n => +('0.' + '0'.repeat(n-1) + '1');
fAlt = n => +('0.' + '1'.padStart(n, '0'));
g = n => 0.1 ** n;

f(1) // 0.1
f(2) // 0.01
f(3) // 0.001

g(1) // 0.1
g(2) // 0.010000000000000002
g(3) // 0.0010000000000000002
