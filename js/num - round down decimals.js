rd1(1.025, 2)    // 1.02
rd1(-1.025, 2)   // -1.02
rd1(4.56, 2)     // 4.56
rd1(42.464)      // 42
rd1(1.12496, 3)  // 1.124
rd1(221.245, -1) // 220
rd1(220.245, -1) // 220
rd1(219.245, -1) // 210

// big.js (better)
Big.RM = 0;
function rd1(n, d=0) {
	return parseFloat( Big(n).round(d).toString() );
}

// has issues
function rd2(num, decimals=0) {
	const n = Math.pow(10, decimals);
	return Math.floor(num * n) / n;
}
// issues:
rd2(-1.025, 2)   // -1.03
rd2(4.56, 2)     // 4.56