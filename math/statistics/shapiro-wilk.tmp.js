// https://en.wikipedia.org/wiki/Shapiro%E2%80%93Wilk_test
x = [2,3,2,4,3,2];
x.sort((a,b)=>a-b);
n = x.length;
xm = mean(x);
m = sma(x,0);
v = covarianceMatrix( matTranspose([x,m]) );
vp = matPow(v,-1); // math.inv(v);  numbers.matrix.inverse(v);
//c = vecmatMul(m,vp);
//c = vecmatMul(c,vp);
//c = vecMul(c,m);
//c = Math.pow(sum(c), 1/2);
c = Math.sqrt( sum( matVecMul(vp,m).map(sqr) ));
a = vecMatMul(m,vp).map(i=>i/c);
aa = matVecMul(vp,m).map(i=>i/c);

nmr = sqr(sum( x.map((x,i)=> a[i] * x) ));
den= sum(x.map(i=>sqr(i-xm)))
w = nmr / den;
console.log(w);




// https://www.real-statistics.com/tests-normality-and-symmetry/statistical-tests-normality-symmetry/shapiro-wilk-test/
x = [2,3,2,4,3,2];
x.sort((a,b)=>a-b);
xm = mean(x);
ss = sum(x.map(i=>sqr(i-xm)));
n = x.length;
m = n % 2 ? (n-1)/2 : n/2;
b=[]
for (let i=0; i<m; i++) b.push(
	a[i] * ( x[i+n-m] - x[i] )//!!!
);
w = sqr(sum(b)) / ss;
console.log(w); 8.930598023643124e-33




// https://scistatcalc.blogspot.com/2013/10/shapiro-wilk-test-testing-for-normality.html
// matlab
%x = [2 3 2 4 3 2]
%x = [2 20 20 204 3 6];
x  =  x(:); %put data in a column vector
n = length(x); %sample size

if n < 3,
	error('Sample vector must have at least 3 valid observations.');
end

if n > 5000,
	warning('Shapiro-Wilk statistic might be inaccurate due to large sample size ( > 5000).');
end

x = sort(x); %sorting of data vector in ascending order
m = norminv(((1:n)' - 3/8) / (n + 0.25));
w = zeros(n,1); %preallocating weights

if kurtosis(x) > 3, %Shapiro-Francia test is better for leptokurtic samples
	w = 1/sqrt(m'*m) * m;
	W = (w' * x) ^2 / ((x - mean(x))' * (x - mean(x)));
else %Shapiro-Wilk test is better for platykurtic samples
	c = 1/sqrt(m' * m) * m;
	u = 1/sqrt(n);
	p1 = [-2.706056,4.434685,-2.071190,-0.147981,0.221157,c(n)];
	p2 = [-3.582633,5.682633,-1.752461,-0.293762,0.042981,c(n-1)];

	w(n) = polyval(p1,u);
	w(1) = -w(n);

	if n == 3,
		w(1) = 0.707106781;
		w(n) = -w(1);
		phi = 1;
	end

	if n >= 6,
		w(n-1) = polyval(p2,u);
		w(2) = -w(n-1);

		ct =  3;
		phi = (m'*m - 2 * m(n)^2 - 2 * m(n-1)^2) / ...
					(1 - 2 * w(n)^2 - 2 * w(n-1)^2);
	else
		ct = 2;
		phi = (m'*m - 2 * m(n)^2) / (1 - 2 * w(n)^2);
	end
	
	w(ct:n-ct+1) = m(ct:n-ct+1) / sqrt(phi);
	
	W = (w' * x) ^2 / ((x - mean(x))' * (x - mean(x)));
end




// c port
function normalQuantile(p, mu, sigma) {
	var p, q, r, val;
	if (sigma < 0)
		return -1;
	if (sigma == 0)
		return mu;

	q = p - 0.5;

	if (0.075 <= p && p <= 0.925) {
		r = 0.180625 - q * q;
		val = q * (((((((r * 2509.0809287301226727 + 33430.575583588128105) * r + 67265.770927008700853) * r +
				45921.953931549871457) * r + 13731.693765509461125) * r + 1971.5909503065514427) * r + 133.14166789178437745) * r +
			3.387132872796366608) / (((((((r * 5226.495278852854561 + 28729.085735721942674) * r + 39307.89580009271061) * r +
			21213.794301586595867) * r + 5394.1960214247511077) * r + 687.1870074920579083) * r + 42.313330701600911252) * r + 1);
	} else {
		/* closer than 0.075 from {0,1} boundary */
		/* r = min(p, 1-p) < 0.075 */
		if (q > 0)
			r = 1 - p;
		else
			r = p; /* = R_DT_Iv(p) ^=  p */

		r = Math.sqrt(-Math.log(r)); /* r = sqrt(-log(r))  <==>  min(p, 1-p) = exp( - r^2 ) */

		if (r <= 5.) {
			/* <==> min(p,1-p) >= exp(-25) ~= 1.3888e-11 */
			r += -1.6;
			val = (((((((r * 7.7454501427834140764e-4 + 0.0227238449892691845833) * r + .24178072517745061177) * r +
					1.27045825245236838258) * r + 3.64784832476320460504) * r + 5.7694972214606914055) * r +
				4.6303378461565452959) * r + 1.42343711074968357734) / (((((((r * 1.05075007164441684324e-9 + 5.475938084995344946e-4) * r +
					.0151986665636164571966) * r + 0.14810397642748007459) * r + 0.68976733498510000455) * r + 1.6763848301838038494) * r +
				2.05319162663775882187) * r + 1);
		} else {
			/* very close to  0 or 1 */
			r += -5.;
			val = (((((((r * 2.01033439929228813265e-7 + 2.71155556874348757815e-5) * r + 0.0012426609473880784386) * r +
					0.026532189526576123093) * r + .29656057182850489123) * r + 1.7848265399172913358) * r + 5.4637849111641143699) * r +
				6.6579046435011037772) / (((((((r * 2.04426310338993978564e-15 + 1.4215117583164458887e-7) * r +
					1.8463183175100546818e-5) * r + 7.868691311456132591e-4) * r + .0148753612908506148525) * r +
				.13692988092273580531) * r + .59983220655588793769) * r + 1.);
		}

		if (q < 0.0)
			val = -val;
		/* return (q >= 0.)? r : -r ;*/
	}
	return mu + sigma * val;
}
function sign(x) {
	if (x == 0) return 0;
	return x > 0 ? 1 : -1;
}
function ShapiroWilkW(_x) {
	function poly(cc, nord, x) {
		// Calculates the algebraic polynomial of order nord-1 with array of coefficients cc.
		// Zero order coefficient is cc(1) = cc[0]
		var p;
		var ret_val;

		ret_val = cc[0];
		if (nord > 1) {
			p = x * cc[nord - 1];
			for (j = nord - 2; j > 0; j--)
				p = (p + cc[j]) * x;
			ret_val += p;
		}
		return ret_val;
	}
	x = [..._x].sort((a,b)=>a-b);
	var n = x.length;
	if (n < 3) return undefined;
	var nn2 = Math.floor(n / 2);
	var a = new Array(Math.floor(nn2) + 1); /* 1-based */


	// Calculates the Shapiro-Wilk W test and its significance level
	var small = 1e-19;

	/* polynomial coefficients */
	var g = [-2.273, 0.459];
	var c1 = [0, 0.221157, -0.147981, -2.07119, 4.434685, -2.706056];
	var c2 = [0, 0.042981, -0.293762, -1.752461, 5.682633, -3.582633];
	var c3 = [0.544, -0.39978, 0.025054, -6.714e-4];
	var c4 = [1.3822, -0.77857, 0.062767, -0.0020322];
	var c5 = [-1.5861, -0.31082, -0.083751, 0.0038915];
	var c6 = [-0.4803, -0.082676, 0.0030302];

	/* Local variables */
	var i, j, i1;

	var ssassx, summ2, ssumm2, gamma, range;
	var a1, a2, an, m, s, sa, xi, sx, xx, y, w1;
	var fac, asa, an25, ssa, sax, rsn, ssx, xsx;

	var pw = 1;
	an = n;

	if (n == 3)
		a[1] = 0.70710678; /* = sqrt(1/2) */
	else {
		an25 = an + 0.25;
		summ2 = 0.0;
		for (i = 1; i <= nn2; i++) {
			a[i] = normalQuantile((i - 0.375) / an25, 0, 1); // p(X <= x), 
			var r__1 = a[i];
			summ2 += r__1 * r__1;
		}
		summ2 *= 2;
		ssumm2 = Math.sqrt(summ2);
		rsn = 1 / Math.sqrt(an);
		a1 = poly(c1, 6, rsn) - a[1] / ssumm2;

		/* Normalize a[] */
		if (n > 5) {
			i1 = 3;
			a2 = -a[2] / ssumm2 + poly(c2, 6, rsn);
			fac = Math.sqrt((summ2 - 2 * (a[1] * a[1]) - 2 * (a[2] * a[2])) / (1 - 2 * (a1 * a1) - 2 * (a2 * a2)));
			a[2] = a2;
		} else {
			i1 = 2;
			fac = Math.sqrt((summ2 - 2 * (a[1] * a[1])) / (1 - 2 * (a1 * a1)));
		}
		a[1] = a1;
		for (i = i1; i <= nn2; i++)
			a[i] /= -fac;
	}

	/*	Check for zero range */

	range = x[n - 1] - x[0];
	if (range < small) {
		console.log('range is too small!')
		return undefined;
	}


	/*	Check for correct sort order on range - scaled X */

	xx = x[0] / range;
	sx = xx;
	sa = -a[1];
	for (i = 1, j = n - 1; i < n; j--) {
		xi = x[i] / range;
		if (xx - xi > small) {
			console.log("xx - xi is too big.", xx - xi);
			return undefined;
		}
		sx += xi;
		i++;
		if (i != j)
			sa += sign(i - j) * a[Math.min(i, j)];
		xx = xi;
	}
	if (n > 5000) {
		console.log("n is too big!")
		return undefined;
	}


	/*	Calculate W statistic as squared correlation
		between data and coefficients */

	sa /= n;
	sx /= n;
	ssa = ssx = sax = 0.;
	for (i = 0, j = n - 1; i < n; i++, j--) {
		if (i != j)
			asa = sign(i - j) * a[1 + Math.min(i, j)] - sa;
		else
			asa = -sa;
		xsx = x[i] / range - sx;
		ssa += asa * asa;
		ssx += xsx * xsx;
		sax += asa * xsx;
	}

	/*	W1 equals (1-W) calculated to avoid excessive rounding error
		for W very near 1 (a potential problem in very large samples) */

	ssassx = Math.sqrt(ssa * ssx);
	w1 = (ssassx - sax) * (ssassx + sax) / (ssa * ssx);
	var w = 1 - w1;

	/*	Calculate significance level for W */

	if (n == 3) {
		/* exact P value : */
		var pi6 = 1.90985931710274; /* = 6/pi */
		var stqr = 1.04719755119660; /* = asin(sqrt(3/4)) */
		pw = pi6 * (asin(sqrt(w)) - stqr);
		if (pw < 0.)
			pw = 0;
		return w;
	}
	y = Math.log(w1);
	xx = Math.log(an);
	if (n <= 11) {
		gamma = poly(g, 2, an);
		if (y >= gamma) {
			pw = 1e-99; /* an "obvious" value, was 'small' which was 1e-19f */
			return w;
		}
		y = -Math.log(gamma - y);
		m = poly(c3, 4, an);
		s = Math.exp(poly(c4, 4, an));
	} else {
		/* n >= 12 */
		m = poly(c5, 4, xx);
		s = Math.exp(poly(c6, 3, xx));
	}

	// Oops, we don't have pnorm
	// pw = pnorm(y, m, s, 0/* upper tail */, 0);

	return w;
}