var n = 2.3;

n % 1                // 0.2999999999999998 (works for negative numbers)
(n % 1).toFixed(4)   // "0.3000"
n - Math.floor(n)    // 0.2999999999999998 (won't work for negative numbers)
(''+n).split('.')[1] // "3" good unless something other than dot is used for decimal separator. (eg: comma is the decimal separator in continental europe)

// has decimal?
12.3 % 1 !== 0 // true
12   % 1 !== 0 // false

function hasDecimal(num) {
	return n % 1 !== 0;
}
