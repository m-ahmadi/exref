round(1.245, 2)   // 1.24
round(1.246, 2)   // 1.25
round(1.255, 2)   // 1.25
round(1.256, 2)   // 1.26
round(1.4)        // 1
round(1.5)        // 2
round(1.21474, 4) // 1.2147
round(1.21475, 4) // 1.2148

// better: (same output as c# & big.js)
function round(num, decimalPlaces) {
	var d = decimalPlaces || 0;
	var m = Math.pow(10, d);
	var n = +(d ? num * m : num).toFixed(8); // avoid rounding errors
	var i = Math.floor(n), f = n - i;
	var e = 1e-8; // allow for rounding errors in f
	var r = (f > 0.5 - e && f < 0.5 + e) ?
						((i % 2 == 0) ? i : i + 1) : Math.round(n);
	return d ? r / m : r;
}

// another: (faster but incorrect output)
function round(n, d=2) {
	var x = n * Math.pow(10, d);
	var r = Math.round(x);
	var br = Math.abs(x) % 1 === 0.5 ? (r % 2 === 0 ? r : r-1) : r;
	return br / Math.pow(10, d);
}

// big.js
Big.RM = 2; // round mode: ROUND_HALF_EVEN
+Big(1.245).round(2)      // 1.24
+Big(1.246).round(2)      // 1.25
+Big(1.255).round(2)      // 1.25
+Big(1.256).round(2)      // 1.26
+Big(1.145).round(2)      // 1.14
+Big(1.146).round(2)      // 1.15
+Big(1.4).round()         // 1
+Big(1.5).round()         // 2
+Big(1.21474).round(4, 2) // 1.2147
+Big(1.21475).round(4, 2) // 1.2148