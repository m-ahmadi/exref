function rd(num, decimals=0) {
	const n = Math.pow(10, decimals);
	return Math.round(num * n) / n;
}
rd(1.234, 2)  // 1.23
rd(1.235, 2)  // 1.24
rd(-1.234, 2) // -1.23
rd(224, -1)   // 220
rd(225, -1)   // 230
rd(240, -2)   // 200
rd(250, -2)   // 300
rd(400, -3)   // 0
rd(500, -3)   // 1000
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// big.js
// https://mikemcl.github.io/big.js/#rm

function rd2(n, d=0) {
	return Big(n).round(d).toNumber();
}

// same as above
rd2(-1.234, 2) // -1.23
rd2(250, -2)   // 300
// ...

// cutoff point = 5, regardless of odd|even neighbor
Big.RM = 1;
rd2(1.224, 2) // 1.22 (even neighbor)
rd2(1.225, 2) // 1.23 ...
rd2(1.235, 2) // 1.24 (odd neighbor)

// cutoff point = 6, but only when neighbor is even
Big.RM = 2;
rd2(1.225, 2) // 1.22 (even neighbor)
rd2(1.226, 2) // 1.23 ...
rd2(1.235, 2) // 1.24 (odd neighbor)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
