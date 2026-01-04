function reciprocal(n=0) {
	return 1 / n;
}

function factorial(n=0) {
	return n > 1 ? range(n, 1, -1).reduce((r,i) => r * i) : 1;
}

function permutations(n=0, r=0, repetitionAllowed=false) {
	return !repetitionAllowed
		? factorial(n) / factorial(n-r)
		: Math.pow(n, r);
}

function combinations(n=0, r=0, repetitionAllowed=false) {
	return !repetitionAllowed
		? factorial(n) / ( factorial(r) * factorial(n-r) )
		: factorial(r+n-1) / ( factorial(r) * factorial(n-1) );
}

function diagonal(x=[]) {
	return x.map((v,i) => v[i]);
}

function hstack(...args) {
	let col = args[0];
	let r = args.map(a => col.map((_,j)=>a[j]).flat());
	let is2d = Array.isArray(col[0]);
	return is2d ? r : r.flat();
}

function sqr(n=0) {
	return Math.pow(n, 2);
}

function sum(nums=[]) {
	return nums.reduce((r,i) => r += i, 0);
}

function product(nums=[]) {
	return nums.reduce((r,i) => r *= i, 1);
}

function scale(nums=[], newbound=[0,1]) {/*linear algebra two-point transform*/
	let [a,b] = minmax(nums);
	if (a === b) {
		for (let i=17, j=1e-17; i>0; i--, j=parseFloat('1e-'+i)) if (b+j > a) { b+=j; break; }
		if (a === b) throw new Error('Equal bounds error!');
	}
	let [c,d] = newbound;
	let [dx,dy] = [b-a, d-c];
	return nums.map(x => (x-a) * dy / dx + c);
//return nums.map(x => (x-a) * (d-c) / (b-a) + c);
//return nums.map(x => (x-a) / (b-a) * (d-c) + c);
//return nums.map(x => (d-c) * (x-a) / (b-a) + c);
}

function scaleN(x=0, a=0, b=0, c=0, d=0) {/*↑...one number at a time*/
	return (x-a) * (d-c) / (b-a) + c;
}

function lerp(x=0, y=0, a=0) {/*value between two numbers at specified decimal midpoint*/
	return x * (1-a) + y * a;
}

function interpolate(x=[], xp=[], yp=[]) {/*naive*/
	let [xp0, xp1] = [ xp[0], xp[xp.length-1] ];
	let [yp0, yp1] = [ yp[0], yp[yp.length-1] ];
	
	return x.map(i => {
		if (i < xp0) return yp0;
		if (i > xp1) return yp1;
		
		let xa = xp.filter(j => j < i).slice(-1)[0] || xp0;
		let xb = xp.filter(j => j > i)[0]           || xp1;
		
		let ya = yp[ xp.indexOf(xa) ];
		let yb = yp[ xp.indexOf(xb) ];
		
		let [dx, dy] = [xb-xa, yb-ya];
		
		let y = ya + dy * (i-xa) / dx;
		
		return y;
	});
}

function convolve(a=[], b=[]) {
	if (!a.length || !b.length) return;
	const [volume, kernel] = [a, b];
	const [len1, len2] = [a, b].map(i => i.length);
	const r = new Float32Array((len1 + len2) - 1);
	
	let i = 0;
	for (let j=0; j<len1; j++) {
		r[j] = volume[0] * kernel[j];
	}
	
	for (let i=1; i<len1; i++) {
		for (let j=0; j<len2; j++) {
			r[i+j] += volume[i] * kernel[j];
		}
	}
	return [...r];
}
function convolve2(a=[], b=[]) {/*naive*/
	if (!a.length || !b.length) return;
	let len = a.length;
	let last = len - 1;
	let backHalf = false;
	let idxs = [];
	let r = [];
	for (let i=0; i<len; i++) {
		if (!backHalf) {
			idxs.push(i);
			let ia = idxs.slice(0,i+1);
			let ib = ia.toReversed();
			let va = ia.map(i=>a[i]);
			let vb = ib.map(i=>b[i]);
			r.push(dot(va,vb));
			if (i === last) {
				i = 0;
				backHalf = true;
			}
		} else {
			let ia = idxs.slice(i);
			let ib = ia.toReversed();
			let va = ia.map(i=>a[i]);
			let vb = ib.map(i=>b[i]);
			r.push(dot(va,vb));
		}
	}
	return r;
}

function searchsorted(ascSortedNums=[], inserts=[]) {/*naive*/
	let a = ascSortedNums;
	let b = [...new Set(inserts)];
	let m = new Map(b.map(i=> [i, 0]));
	
	a.forEach((n,i) =>
		b.filter(j => j > a[i-1] && j <= n)
			.forEach(j => m.set(j, i))
	);
	
	return inserts.map(i => m.get(i));
}

function areaUnderCurve(x=[], y=[]) {
	return sum(x.map((v,i,a)=> y[i] * (i > 0 ? Math.abs(v - a[i-1]) : 0)));
}

function mean(nums=[], trim=0, sample=false) {
	if (trim && trim > 0) {
		if (trim < 1) trim = Math.round(nums.length * trim);
		nums = [...nums].sort((a,b)=> a-b).slice(+trim, -trim);
	}
	return sum(nums) / (nums.length - (sample?1:0));
}

function meanWeighted(x=[], w=[]) {
	return sum(vecMul(w,x)) / sum(w);
}

function meanHarmonic(x=[]) {
	return reciprocal(mean(x.map(reciprocal)));
}

function statRange(nums=[]) {
	let [_min, _max] = minmax(nums);
	return _max - _min;
}

function mode(list=[]) {
	let tmp = {};
	for (let i of list) {
		if (!tmp[i]) tmp[i] = 0;
		tmp[i]++;
	}
	let counts = list.map(i => tmp[i]);
	let maxCount = max(counts);
	let maxIndex = counts.indexOf(maxCount);
	return list[maxIndex];
}

function median(_nums=[]) {
	let nums = [..._nums].sort((a,b)=> a-b);
	let len = nums.length;
	if (len % 2 === 0) {
		return (nums[(len/2)-1] + nums[len/2]) / 2;
	} else {
		return nums[(len-1) / 2];
	}
}

function percentile(_nums=[], n=0, exclusive=false) {
	let nums = [..._nums].sort((a,b)=>a-b);
	// return nums[Math.floor(nums.length*n)];
	let len = nums.length;
	let realIndex = n * (len + (exclusive?1:-1)) + (exclusive?0:1);
	let index = parseInt(realIndex);
	let frac = realIndex - index;
	if (index+1 < len) {
		return nums[index-1] + frac * (nums[index] - nums[index-1]);
	} else {
		return nums[index-1];
	}
}

function stdv(nums=[]) {
	return Math.sqrt( variance(nums) );
}
function stdvIncrPartial(state={}) {
	let { delta, mu=0, M2=0, N=0 } = state;
	
	return function (n, getState) {
		if (n === undefined) {
			if (N === 0) return undefined;
			if (N === 1) return Number.isNaN(M2) ? NaN : 0;
			if (getState === true) return {delta, mu, M2, N};
			return Math.sqrt(M2 / N);
		}
		N += 1;
		delta = n - mu;
		mu += delta / N;
		M2 += delta * (n - mu);
		if (N < 2) return Number.isNaN(M2) ? NaN : 0;
		return Math.sqrt(M2 / N);
	};
	/* usage:
	var x = [1,2,3,4,5,6,7,8,9];
	var f = stdvIncrPartial();
	x.map(f).at(-1) === stdv(x); // true
	
	var x = [...Array(1_000)].map(randn);
	var f = stdvIncrPartial();
	Math.abs(x.map(f).at(-1) - stdv(x)); // 2.220446049250313e-16
	
	usage with state:
	var nItems = 100;
	var xAll = [...Array(nItems)].map(randn);
	var x1 = xAll.slice(0,nItems*0.8);
	var x2 = xAll.slice(-(nItems*0.2));
	dequal([...x1, ...x2], xAll); // true
	var f;
	f = stdvIncrPartial();
	var p1 = x1.map(f);
	var state = f(undefined,true);
	f = stdvIncrPartial(state);
	var p2 = x2.map(f);
	f = stdvIncrPartial();
	var all = xAll.map(f);
	var all2 = [...p1, ...p2];
	dequal(all2, all); // true
	
	partial vs normal perf:
	var nItems = 1_000_000;
	var xAll = [...Array(nItems)].map(randn);
	var x1 = xAll.slice(0,nItems*0.8);
	var x2 = xAll.slice(-(nItems*0.2));
	console.time('partial');
	var f;
	f = stdvIncrPartial();
	var p1 = x1.map(f).at(-1);
	var state = f(undefined,true);
	f = stdvIncrPartial(state);
	var p2 = x2.map(f).at(-1);
	console.timeEnd('partial');
	console.time('normal');
	var r1 = stdv(x1);
	var r2 = stdv(xAll);
	console.timeEnd('normal');
	partial:  89 ms
	normal:  196 ms
	*/
}

function variance(x=[]) {
	let u = mean(x);
	let sqrDiffs = x.map(i=> sqr(i-u));
	return mean(sqrDiffs);
}

function meandv(nums=[]) {
	let u = mean(nums);
	return mean( nums.map(i => Math.abs(i-u)) );
}

function meddv(nums=[]) {
	let m = median(nums);
	return median( nums.map(i=> Math.abs(i-m)) );
}

function iqr(_nums=[]) {
	let nums = [..._nums].sort((a,b) => a-b);
	
	let firstHalf, secondHalf;
	let len = nums.length;
	
	if (len % 2 === 0) {
		let idx = len / 2;
		firstHalf  = nums.slice(0, idx);
		secondHalf = nums.slice(idx, nums.length);
	} else {
		let idx = (len - 1) / 2;
		firstHalf  = nums.slice(0, idx);
		secondHalf = nums.slice(idx+1, nums.length);
	}
	
	return median(secondHalf) - median(firstHalf);
}

function regressionLinear(x=[], y=[], withInfo=false) {
	if (x.length !== y.length) return;
	
	let [xMean, yMean] = [mean(x), mean(y)];
	
	let xMeanDiff = x.map(n => n - xMean);
	let yMeanDiff = y.map(n => n - yMean);
	let xMeanDiffSquared        = xMeanDiff.map(sqr);
	let xMeanDiffTimesYMeanDiff = xMeanDiff.map((n, i) => n * yMeanDiff[i]);
	
	let m = sum(xMeanDiffTimesYMeanDiff) / sum(xMeanDiffSquared);
	let b = yMean - (m * xMean);
	
	let yHat = x.map(x => m*x + b);
	
	return withInfo ? {yHat, intercept: b, slope: m} : yHat;
}

function covariance(x=[], y=[]) {
	let [xm, ym] = [mean(x), mean(y)];
	return mean(x.map((v,i)=> (v - xm) * (y[i] - ym)), 0, true);
}

function covarianceMatrix(matrix=[]) {
	let cols = [...Array(matrix.length)];
	return matrix.map(row =>
		cols.map((v,col) => covariance(row, matrix[col]) )
	);
}

function pearsonR(x=[], y=[]) {
	let { sqrt } = Math;
	let [xsum, ysum] = [sum(x), sum(y)];
	let n = x.length;
	let numerator   = sum(x.map((v,i)=> v*y[i])) - (xsum * ysum / n);
	let denominator = sqrt(sum(x.map(sqr)) - (sqr(xsum) / n)) * sqrt(sum(y.map(sqr)) - (sqr(ysum) / n));
	return numerator / denominator;
}

function crossCorrelation(x=[], y=[]) {/*needs refactor to use product() and sum(), but ok for now*/
	let n = x.length;
	let m = y.length;
	let resLen = n + m - 1;
	let res = Array(resLen).fill(0);
	let lags = range(-m+1, n);
	for (let lag of lags) {
		let sumProduct = 0;
		for (let i of range(n)) {
			let j = i + lag;
			if (j < 0 || j >= m) continue;
			sumProduct += x[i] * y[j];
		}
		res[lag+m-1] = sumProduct;
	}
	res.reverse();
	return res;
}

function acfNaive(x=[], nlags=1) {
	let res = [1];
	let lags = range(1, nlags+1);
	let n = x.length;
	let u = mean(x);
	for (let lag of lags) {
		let t1 = range(lag+1, n);
		let t2 = range(lag, n);
		let numerator = sum( t1.map(t => (x[t]-u) * (x[t-lag]-u)) );
		let denominator = sum( t2.map(t => sqr(x[t]-u)) );
		let autocorr = numerator / denominator;
		res.push(autocorr);
	}
	return res;
}

function acf(x=[], nlags=1) {/*statsmodels.tsa.stattools.acf()*/
	let avf = acovf(x);
	let avf0 = avf[0];
	let acf = avf.slice(0, nlags+1).map(i => i / avf0);
	return acf;
}

function pacf(x=[], nlags=1) {/*statsmodels.tsa.stattools.pacf(mode='ld')*/
	nlags = Math.max(nlags, 1);
	let acv = acovf(x, true);
	let ld = levinsonDurbin(acv, nlags, true);
	return ld.pacf;
}

function acovf(x=[], adjusted=false, nlag) {/*statsmodels.tsa.stattools.acovf()*/
	let n = x.length;
	
	if (!nlag) {
		nlag = n - 1;
	} else if (nlag > n - 1) {
		throw Error('nlag must be smaller');
	}
	
	let u = mean(x);
	let xo = x.map(i => i - u);
	
	let d = Array(2 * n-1).fill(n);
	
	if (adjusted) {
		let xi = range(1, n+1);
		d = xi.concat(xi.slice(0,-1).toReversed());
	}
	
	let cc = crossCorrelation(xo, xo);
	let acov = vecDiv(cc.slice(n-1), d.slice(n-1));
	
	return acov;
}

function levinsonDurbin(s=[], nlags=1, isacov=false) {/*statsmodels.tsa.statstools.levinson_durbin()*/
	let order = nlags;
	
	let sxxM = isacov ? s : acovf(s).slice(0, order+1);
	
	let phi = [...Array(order+1)].map(() => Array(order+1).fill(0) );
	let sig = Array(order+1).fill(0);
	
	// initial points for the recursion
	phi[1][1] = sxxM[1] / sxxM[0];
	sig[1] = sxxM[0] - phi[1][1] * sxxM[1];
	
	for (let k of range(2, order+1)) {
		let a = phi.slice(1,k).map(i=>i[k-1]);
		let b = sxxM.slice(1,k).toReversed();
		
		phi[k][k] = (sxxM[k] - dot(a,b)) / sig[k-1];
		
		for (let j of range(1, k)) {
			phi[j][k] = phi[j][k-1] - phi[k][k] * phi[k-j][k-1];
			sig[k] = sig[k-1] * (1 - phi[k][k] ** 2);
		}
	}
	
	let sigmaV = sig[sig.length-1];
	let arcoefs = phi.slice(1).map(i=>i[i.length-1]);
	let pacf = diagonal(phi);
	pacf[0] = 1.0;
	
	return {sigmaV, arcoefs, pacf, sig, phi};
}

function durbinWatson(x=[], y=[]) {
	let e = regressionLinear(x,y).map((v,i)=> y[i]-v);
	return sum(x.map((v,t)=> t>0 ? sqr(e[t] - e[t-1]) : 0)) / sum(e.map(sqr));
}

function kurtosis(x=[], pearson=false) {
	return stdMoment(x, 4) - (pearson ? 0 : 3);
}

function skewness(x=[]) {
	return stdMoment(x, 3);
}

function stdMoment(x=[], ith=1) {
	let [u, s, n] = [mean(x), stdv(x), x.length];
	let sum = 0;
	for (let i=0; i<n; i++) sum += Math.pow((x[i] - u) / s, ith);
	return sum / n;
}

function jarqueBera(x=[]) {
	let { pow } = Math;
	let [n, xm] = [x.length, mean(x)];
	let [dif, cube, quad] = [i=>i-xm, n=>pow(n,3), n=>pow(n,4)];
	let xd = x.map(dif);
	let xdsqrd = xd.map(sqr);
	let s = (1/n) * sum(xd.map(cube)) / pow((1/n) * sum(xdsqrd), 3/2);
	let k = (1/n) * sum(xd.map(quad)) / sqr( (1/n) * sum(xdsqrd) );
	return (n/6) * ( sqr(s) + ((1/4) * sqr(k-3)) );
}

function shapiroWilk(_x=[]) {
	let x = [..._x].sort((a,b)=>a-b);
	let n = x.length;
	if (n < 3) throw new Error('Sample vector must have at least 3 valid observations.');
	if (n > 5000) console.warning('Shapiro-Wilk statistic might be inaccurate due to large sample size ( > 5000).');
	
	let t = range(1,n+1).map(i=>(i-3/8) / (n+0.25));
	let m = t.map(i=> norminv(i));
	let w = Array(n).fill(0);
	let W;
	
	let {sqrt} = Math;
	
	if (kurtosis(x,1) > 3) {
		let _t = 1 / sqrt( matMul([m], matTranspose([m]))[0][0] );
		w = m.map(i=> _t * i);
		
		let mu = mean(x);
		let xd = x.map(i=> i-mu);
		
		W = sqr(sum(vecMul(w,x))) / matMul([xd], matTranspose([xd]))[0][0];
	} else {
		let c = m.map(i=> i * (1 / sqrt(matMul([m], matTranspose([m]))[0][0])) );
		let u = 1 / sqrt(n);
		
		let p1 = [-2.706056,4.434685,-2.071190,-0.147981,0.221157,c[c.length-1]];
		let p2 = [-3.582633,5.682633,-1.752461,-0.293762,0.042981,c[c.length-2]];
		
		let l = w.length - 1;
		
		w[l] = polyval(p1, u);
		w[0] = -w[l];
		
		let phi, ct;
		
		if (n === 3) {
			w[0] = 0.707106781;
			w[l] = -w[0];
			phi = 1;
		}
		
		if (n >= 6) {
			w[l-1] = polyval(p2, u);
			w[1] = -w[l-1];
			
			ct = 3 -1;
			phi = ( matMul([m], matTranspose([m]))[0][0] - 2 * sqr(m[m.length-1]) - 2 * sqr(m[m.length-2]) ) /
				(1 - 2 * sqr(w[l]) - 2 * sqr(w[l-1]) );
			
		} else {
			ct = 2 -1;
			phi = ( matMul([m], matTranspose([m]))[0][0] - 2 * sqr(m[m.length-1]) ) / (1 - 2 * sqr(w[l]));
		}
		
		range(ct,(n-2)-ct+2).map(i=> w[i] = m[i] / sqrt(phi));
		
		let mu = mean(x);
		let xd = x.map(i=> i-mu);
		
		W = sqr(sum(vecMul(w,x))) / matMul([xd], matTranspose([xd]))[0][0];
	}

	return W;
}

function norm(x=[]) {/*normal probability distribution*/
	let { sqrt, exp, PI } = Math;
	let denom = sqrt(2 * PI);
	return x.map(i => exp(-sqr(i)/2) / denom);
}

function normpdf(x=[], mean=0, stdv=1) {/*probability density function*/
	let { sqrt, exp, PI } = Math;
	let expr1 = 1 / (stdv * sqrt(2 * PI));
	return x.map(i => expr1 * exp(-(1/2) * sqr((i - mean) / stdv)));
}

function normcdf(x=[], mean=0, stdv=1) {/*cumulative distribution function*/
	let denom1 = Math.sqrt(2) * stdv;
	return x.map(i => (1 - erf((mean-i) / denom1)) / 2);
}

function norminv(p, mean=0, stdv=1) {
	return -1.41421356237309505 * stdv * erfcinv(2 * p) + mean;
}

function erfc(x=0) {
	return 1 - erf(x);
}

function erfcinv(p=0) {
	if (p >= 2) return -100;
	if (p <= 0) return 100;
	
	let pp = p < 1 ? p : 2-p;
	let t = Math.sqrt(-2 * Math.log(pp / 2));
	let x = -0.70711 * ((2.30753+t*0.27061) / (1+t*(0.99229+t*0.04481)) - t);
	
	let err;
	for (let i=0; i<2; i++) {
		err = erfc(x) - pp;
		x += err / (1.12837916709551257 * Math.exp(-x*x) - x*err);
	}
	
	return p < 1 ? x : -x;
}

function erf(x=0) {
	let cof = [
		-1.3026537197817094, 6.4196979235649026e-1, 1.9476473204185836e-2,
		-9.561514786808631e-3, -9.46595344482036e-4, 3.66839497852761e-4,
		4.2523324806907e-5, -2.0278578112534e-5, -1.624290004647e-6,
		1.303655835580e-6, 1.5626441722e-8, -8.5238095915e-8,
		6.529054439e-9, 5.059343495e-9, -9.91364156e-10,
		-2.27365122e-10, 9.6467911e-11, 2.394038e-12,
		-6.886027e-12, 8.94487e-13, 3.13092e-13,
		-1.12708e-13, 3.81e-16, 7.106e-15,
		-1.523e-15, -9.4e-17, 1.21e-16,
		-2.8e-17
	];
	let [isneg, d, dd] = [false, 0, 0];
	
	if (x < 0) {
		x = -x;
		isneg = true;
	}
	
	let t = 2 / (2 + x);
	let ty = 4 * t - 2;
	let tmp;
	
	for (let i=cof.length-1; i>0; i--) {
		tmp = d;
		d = ty * d - dd + cof[i];
		dd = tmp;
	}
	
	let res = t * Math.exp(-x * x + 0.5 * (cof[0] + ty * d) - dd);
	
	return isneg ? res - 1 : 1 - res;
}

function polyval(p=[], x=0) {/*horner*/
	let res = p[0];
	for (let i=1, n=p.length; i<n; i++) res = res * x + p[i];
	return res;
}

function matMul(a=[], b=[]) {
	let bcols = [...Array(b.length)].map((v,col)=> b.map(row=> row[col]));
	return a.map(row =>
		bcols.map(col => sum(
			row.map((v,i)=> v * col[i])
		))
	);
}

function matVecMul(mat=[], vec=[]) {
	if ( mat.some(i=>i.length !== vec.length) ) return;
	return mat.map(row => sum(
		row.map((v,i)=> v * vec[i])
	));
}

function vecMatMul(vec=[], mat=[]) {
	if (vec.length !== mat.length) return;
	let cols = [...Array(mat[0].length)].map((v,j)=> mat.map(i=> i[j]));
	return cols.map((col,i) => sum(
		col.map((v,i)=> vec[i] * v)
	));
}

function matScaMul(mat=[], s=1) {
	return mat.map(row => row.map(cell=> cell * s));
}

function matPow(mat=[], n=2) {
	n = Math.abs(n);
	let orig = mat.map(i=>[...i]);
	let res = mat.map(i=>[...i]);
	for (let i=1; i<n; i++) res = matMul(res, orig);
	return res;
}

function matTranspose(mat=[]) {
	let [n,m] = [mat.length, mat[0].length];
	let res = mat[0].map(()=> Array(n));
	for (let i=0; i<n; i++) for (let j=0; j<m; j++) res[j][i] = mat[i][j];
	return res;
}

function matAdd(a=[], b=[]) {
	return a.map((v,i)=> v.map((vv,j)=> vv + b[i][j] ));
}

function matSubtract(a=[], b=[]) {
	return a.map((v,i)=> v.map((vv,j)=> vv - b[i][j] ));
}

function vecPow(a=[], n=2) {
	let pow = i => Math.pow(i,n);
	if ( Array.isArray(a[0]) ) {
		return a.map(i=> i.map(pow));
	} else {
		return a.map(pow);
	}
}

function vecMul(a=[], b=[]) {
	if ( Array.isArray(a[0]) ) {
		return a.map((v,i)=> v.map((w,j)=> w * b[i][j]) );
	} else {
		return a.map((v,i)=> v * b[i]);
	}
}

function vecDiv(a=[], b=[]) {
	if ( Array.isArray(a[0]) ) {
		return a.map((v,i)=> v.map((w,j)=> w / b[i][j]) );
	} else {
		return a.map((v,i)=> v / b[i]);
	}
}

function dot(a=[], b=[]) {
	return sum(vecMul(a, b));
}

function cumsum(nums=[]) {
	let sum = 0;
	return nums.map(i => sum += i);
}
function cumsumPartial(nums=[], sum=0) {
	return {r: nums.map(i => sum += i), sum};
	/* usage:
	var nItems = 10_000;
	var xAll = [...Array(nItems)].map(randn);
	var x1 = xAll.slice(0,nItems*0.8);
	var x2 = xAll.slice(-(nItems*0.2));
	var {r:p1,sum} = cumsumPartial(x1);
	var {r:p2} = cumsumPartial(x2, sum);
	dequal([...p1, ...p2], cumsum(xAll)); // true
	*/
}

function cusum(x=[], _h=0) {
	let res = [];
	let [pos, neg] = [0, 0];
	
	for (let [i, v] of x.entries()) {
		let h = _h[i] || _h;
		pos = Math.max(0, pos + v);
		neg = Math.min(0, neg + v);
		if (neg < -h) {
			neg = 0;
			res.push(i);
		} else if (pos > h) {
			pos = 0;
			res.push(i);
		}
	}
	
	return res;
}

function slope(x=[], y=[]) {
	let m = [];
	for (let i0=0, i1=1, N=x.length;  i1<N;  i0++, i1++) {
		let dx = x[i1] - x[i0];
		let dy = y[i1] - y[i0];
		m.push(dy / dx);
	}
	return m;
}

function diff(_x=[], _d=1) {
	let x = [..._x];
	
	for (let d of range(1, _d+1)) {
		let L = 0;
		let k = Math.pow(1-L, d);
		x = range(1, x.length).map(i=> k*x[i] - k*x[i-1] );
	}
	
	return x;
}

function rocCurve(yTrue=[], yPred=[], thresholds=10, posLabel=1) {
	let pos = new Set(yTrue.map((v,i)=> v === posLabel ? i : -1).filter(i=>i>-1));
	let negSize = yTrue.length - pos.size;
	
	if (typeof thresholds === 'number') {
		thresholds = [...Array(thresholds + 1)].map((_,i) => i / thresholds).reverse();
		//thresholds === py`sklearn.metrics.roc_curve(yTrue, yPred)[2][1:]`
	}
	
	let tprs = [];
	let fprs = [];
	
	for (let threshold of thresholds) {
		let posPreds = yPred.map((v,i)=> v >= threshold ? i : -1).filter(i=>i>-1);
		
		let tp = posPreds.filter(i=> pos.has(i)).length;
		let fp = posPreds.filter(i=> !pos.has(i)).length;
		
		let fn = pos.size - tp;
		let tn = negSize - fp;
		
		let tpr = tp / (tp + fn);
		let fpr = fp / (fp + tn);
		
		tprs.push(tpr);
		fprs.push(fpr);
	}
	
	return [fprs, tprs, thresholds];
}

function sma(nums=[], period=2, fill) {
	let pi = period > 0 ? period - 1 : 0;
	let res = Array(pi).fill(fill);
	
	if (period > 0) {
		for (let i=pi, len=nums.length; i<len; i++) res.push( mean(nums.slice(i-pi,i+1)) );
	} else {
		res = nums.map((v,i,a)=> mean(a.slice(0,i+1)) );
	}
	
	return res;
}

function cma(nums=[]) {
	return nums.map((v,i,a) => mean(a.slice(0,i+1)) );
}

function ema(nums=[], period=2, fill) {
	let res = Array(period-1).fill(fill);
	
	res.push( mean(nums.slice(0,period)) );
	
	let a = 2 / (period + 1);
	
	for (let i=period, len=nums.length; i<len; i++) {
		let n = (nums[i] * a) + (res[i-1] * (1-a));
		res.push(n);
	}
	
	return res;
}
function ema2(nums=[], period=2) {/*alt code 1*/
	let res = [];
	let pi = period - 1;
	
	let a = 2 / (period + 1);
	
	for (let i=0, len=nums.length; i<len; i++) {
		if (i < pi) {
			res.push(undefined);
			continue;
		}
		
		if (i === pi) {
			res.push( mean(nums.slice(0,i+1)) );
			continue;
		}
		
		let v = (nums[i] * a) + (res[i-1] * (1-a) );
		
		res.push(v);
	}
	
	return res;
}
function ema3(nums=[], period=2) {/*alt code 2*/
	let S = [];
	
	S.push( mean(nums.slice(0,period)) );
	
	let a = 2 / (period + 1);
	
	nums.slice(period).map((num, j) => {
		let s = a * num + (1-a) * S[j];
		S.push(s);
	});
	
	return S;
}
function ema_formal(nums=[], alpha=1) {/*alt init*/
	if (alpha < 0 || alpha > 1) return;
	
	let S = [];
	
	S.push(nums[0]);
	
	nums.slice(1).map((num, j) => {
		let s = alpha * num + (1-alpha) * S[j];
		S.push(s);
	});
	
	return S;
}

function ewmNoNa(nums=[], span=2, adjust=true) {/*ewm_pandas_conceptual() optimized, no NA handling (input mustn't have NA)*/
	const n = nums.length;
	const a = 2 / (span + 1);
	const ar = 1 - a;
	
	const mean = new Array(n);
	const variance = new Array(n);
	const std = new Array(n);
	
	// sufficient statistics
	let W = 1;                 // sum w
	let S = nums[0];           // sum w*x
	let Q = nums[0] * nums[0]; // sum w*x^2
	let R = 1;                 // sum w^2
	
	mean[0] = nums[0];
	variance[0] = 0;
	std[0] = 0;
	
	for (let i=1; i<n; i++) {
		const x = nums[i];
		
		if (adjust) {
			// weights: w_j = ar^(i-j)
			W = ar * W + 1;
			S = ar * S + x;
			Q = ar * Q + x * x;
			R = ar * ar * R + 1;
		} else {
			// weights:
			// j=0: ar^i
			// j>=1: a * ar^(i-j)
			W = ar * W + a;
			S = ar * S + a * x;
			Q = ar * Q + a * x * x;
			R = ar * ar * R + a * a;
		}
		
		const m = S / W;
		const bias = (W * W) / (W * W - R);
		const v = bias * (Q / W - m * m);
		
		mean[i] = m;
		variance[i] = v;
		std[i] = Math.sqrt(v);
	}

	return {mean, var: variance, std};
	
	/* vs orig
	if adjust=true is all you need, ewmAdjNoNa() output is closer to orig
	
	// equality test
	var s = cumsum([...Array(100_000)].map(randn));
	var sumErr = (a,b) => sum(a.map((v,i) => Math.abs(v-b[i])).slice(1));
	function test(adjust) {
		var a = ewm_pandas_conceptual(s, 100, adjust);
		var b = ewmNoNa(s, 100, adjust);
		return Object.keys(a).map(k => sumErr(a[k], b[k]));
	}
	test(true)  // [2.2156114701590846e-8, 0.0000034532865886283126, 4.0956911839806764e-7]
	test(false) // [1.7079510876774617e-8, 0.0000021375455018235456, 2.4482874061426685e-7]
	*/
}
function ewmAdj(nums=[], span=2, ignoreNa=false) {/*ewmAdjNoNa() with full NA handling*/
	/*
	ignoreNa =true
		NAs are completely invisible
		time does not advance
		never enter gap-safe logic
		use fast recursion only
	ignoreNa=false
		NAs advance time
		first NA breaks fast recursion
		from that point on, must use gap-safe (W,S,Q,R)
	*/
	const n = nums.length;
	const a = 2 / (span + 1);
	const ar = 1 - a;
	
	const mean = new Array(n);
	const variance = new Array(n);
	const std = new Array(n);
	
	//====================
	// UNINITIALIZED STATE
	//====================
	let initialized = false;
	
	// fast state
	let m, v, w, w2;
	
	// gap-safe state
	let W, S, Q, R;
	let gapSafe = false;
	
	for (let i=0; i<n; i++) {
		const x = nums[i];
		const isNa = !Number.isFinite(x);
		
		// ==============
		// PRE-INIT PHASE
		// ==============
		if (!initialized) {
			if (isNa) {
				[mean[i], variance[i], std[i]] = [NaN, NaN, NaN]; // mathematically should be NA (could be 0 for convenience)
				continue;
			}
			
			// first finite observation initializes everything
			initialized = true;
			
			[m, v, w, w2] = [x, 0, 1, 1];
			[W, S, Q, R] = [1, x, x*x, 1];
			
			gapSafe = false;
			
			[mean[i], variance[i], std[i]] = [m, 0, 0];
			continue;
		}
		
		// ===============
		// ignoreNa = true
		// ===============
		if (ignoreNa) {
			if (isNa) {
				mean[i] = m;
				variance[i] = variance[i - 1];
				std[i] = std[i - 1];
				continue;
			}
			
			w  = w  * ar + 1;
			w2 = w2 * ar * ar + 1;
			
			const delta = x - m;
			m += delta / w;
			v = ar * v + (delta * delta) * (w - 1) / w;
			
			const bias = (w * w) / (w * w - w2);
			const var_ = bias * v / w;
			
			mean[i] = m;
			variance[i] = var_;
			std[i] = Math.sqrt(var_);
			continue;
		}
		
		//=========================
		// CASE 2: ignoreNa = false
		//=========================
		
		/* ---- GAP-SAFE MODE ---- */
		if (gapSafe) {
			if (isNa) {
				W = ar * W;
				S = ar * S;
				Q = ar * Q;
				R = ar * ar * R;

				mean[i] = mean[i - 1];
				variance[i] = variance[i - 1];
				std[i] = std[i - 1];
				continue;
			}
			
			W = ar * W + 1;
			S = ar * S + x;
			Q = ar * Q + x * x;
			R = ar * ar * R + 1;
			
			const mu = S / W;
			const bias = (W * W) / (W * W - R);
			const var_ = bias * (Q / W - mu * mu);

			mean[i] = mu;
			variance[i] = var_;
			std[i] = Math.sqrt(var_);
			continue;
		}
		
		/* ---- FAST MODE ---- */
		if (isNa) {
			// decay fast state
			w  = w  * ar;
			w2 = w2 * ar * ar;
			
			// switch to gap-safe
			gapSafe = true;
			
			W = w;
			S = m * W;
			R = w2;
			
			const prevVar = variance[i - 1];
			const bias = (W * W) / (W * W - R);
			Q = (prevVar / bias + m * m) * W;
			
			mean[i] = m;
			variance[i] = variance[i - 1];
			std[i] = std[i - 1];
			continue;
		}
		
		// normal fast update
		w  = w  * ar + 1;
		w2 = w2 * ar * ar + 1;
		
		const delta = x - m;
		m += delta / w;
		v = (ar * v) + (delta * delta) * (w - 1) / w;
		
		const bias = (w * w) / (w * w - w2);
		const var_ = bias * v / w;
		
		mean[i] = m;
		variance[i] = var_;
		std[i] = Math.sqrt(var_);
	}
	
	return {mean, var: variance, std};
}
function ewmAdjIgnoreNaFalse(nums=[], span=2) {/*ewmAdjNoNa() with ignore_na=False handling*/
	const n = nums.length;
	const a = 2 / (span + 1);
	const ar = 1 - a;
	
	const mean = new Array(n);
	const variance = new Array(n);
	const std = new Array(n);
	
	let m = 0;
	let v = 0;
	let w = 0;  // sum of weights
	let w2 = 0; // sum of squared weights
	
	let initialized = false;
	
	for (let i=0; i<n; i++) {
		const x = nums[i];
		
		// weights always decay once initialized
		if (initialized) {
			w  = w  * ar;
			w2 = w2 * ar * ar;
			v  = v  * ar;
		}
		
		if (Number.isFinite(x)) {
			// first finite observation initializes state
			if (!initialized) {
				[m, v, w, w2] = [x, 0, 1, 1];
				initialized = true;
				[mean[i], variance[i], std[i]] = [m, 0, 0];
				continue;
			}
			
			// normal update
			w  += 1;
			w2 += 1;
			
			const delta = x - m;
			m += delta / w;
			v += delta * delta * (w - 1) / w;
		}
		
		if (!initialized) {
			[mean[i], variance[i], std[i]] = [NaN, NaN, NaN]; // mathematically should be NA (could be 0 for convenience)
			continue;
		}
		
		const bias = (w * w) / (w * w - w2);
		const var_ = bias * v / w;
		
		mean[i] = m;
		variance[i] = var_;
		std[i] = Math.sqrt(var_);
	}
	
	return {mean, var: variance, std};
}
function ewmAdjIgnoreNaTrue(nums=[], span=2) {/*ewmAdjNoNa() with ignore_na=True handling*/
	const n = nums.length;
	const a = 2 / (span + 1);
	const ar = 1 - a;
	
	const mean = new Array(n);
	const variance = new Array(n);
	const std = new Array(n);
	
	let m = 0;
	let v = 0;
	let w = 0;
	let w2 = 0;
	
	let initialized = false;
	
	for (let i=0; i<n; i++) {
		const x = nums[i];
		
		if (Number.isFinite(x)) {
			// first finite observation initializes state
			if (!initialized) {
				[m, v, w, w2] = [x, 0, 1, 1];
				initialized = true;
				[mean[i], variance[i], std[i]] = [m, 0, 0];
				continue;
			}
			
			// decay only when real observation arrives
			w  = w  * ar + 1;
			w2 = w2 * ar * ar + 1;
			v  = v  * ar;
			
			const delta = x - m;
			m += delta / w;
			v += delta * delta * (w - 1) / w;
		}
		
		if (!initialized) {
			[mean[i], variance[i], std[i]] = [NaN, NaN, NaN]; // mathematically should be NA (could be 0 for convenience)
			continue;
		}
		
		// NAs do nothing once initialized
		const bias = (w * w) / (w * w - w2);
		const var_ = bias * v / w;
		
		mean[i] = m;
		variance[i] = var_;
		std[i] = Math.sqrt(var_);
	}
	
	return {mean, var: variance, std};
}
function ewmAdjNoNa(nums=[], span=2) {/*ewm_pandas_conceptual(..., adjust=true) optimized, no NA handling*/
	// This function assumes no NA values in the series
	// null will be interpreted as 0
	// NaN will break all output items after where it's at
	const n = nums.length;
	const a = 2 / (span + 1);
	const ar = 1 - a;
	
	const mean = new Array(n);
	const variance = new Array(n);
	const std = new Array(n);
	
	let m = nums[0];
	let v = 0;
	
	let w = 1;  // cumulative weight
	let w2 = 1; // cumulative squared weight
	
	mean[0] = m;
	variance[0] = 0;
	std[0] = 0;
	
	for (let i=1; i<n; i++) {
		const x = nums[i];
		
		w = w * ar + 1;
		w2 = w2 * ar * ar + 1;
		
		const delta = x - m;
		m += delta / w;
		v = (ar * v) + (delta * delta) * (w - 1) / w;
		
		const bias = (w * w) / (w * w - w2);
		const var_ = bias * v / w;
		
		mean[i] = m;
		variance[i] = var_;
		std[i] = Math.sqrt(var_);
	}
	
	return {mean, var: variance, std};
	
	/* vs orig
	
	// equality test
	var s = cumsum([...Array(100_000)].map(randn));
	var a = ewm_pandas_conceptual(s, 100, true);
	var b = ewmAdjNoNa(s, 100);
	var sumErr = (a,b) => sum(a.map((v,i) => Math.abs(v-b[i])).slice(1));
	Object.keys(a).map(k => sumErr(a[k], b[k]));
	// [2.7886955519871963e-9, 8.449641611396608e-9, 8.129117934352337e-10]
	
	// perf test
	var s = cumsum([...Array(100_000)].map(randn));
	console.time('orig');
	ewm_pandas_conceptual(s, 100, true);
	console.timeEnd('orig');
	console.time('opt');
	ewmAdjNoNa(s, 100);
	console.timeEnd('opt');
	// orig  45359 ms
	// opt:  22    ms  (2000x faster)
	*/
}
function ewm_pandas_conceptual(nums=[], span=2, adjust=true) {/*pandas*/
	const r = {mean: [], var: [], std: []};
	
	const a = 2 / (span + 1); // alpha
	const ar = 1 - a; // reciprocal of alpha
	const len = nums.length;
	
	const wInv = []; // weights inversed
	
	for (let i=0; i<len; i++) {
		wInv.push(adjust ? ar**i : a*ar**i);
		
		let wSum = 0;
		let sumVecMul = 0;
		let wSqrdSum = 0;
		for (let j=0; j<=i; j++) {
			let weight = wInv[i-j];
			if (!adjust && j===0) weight = ar ** i;
			wSum += weight;
			sumVecMul += weight * nums[j];
			wSqrdSum += weight ** 2;
		}
		
		const wSumSqr = wSum ** 2;
		const ewma = sumVecMul / wSum; // exponentially weighted mean
		const bias = wSumSqr / (wSumSqr - wSqrdSum); // bias
		
		let sumVecMul2 = 0;
		for (let j=0; j<=i; j++) {
			let weight = wInv[i-j];
			if (!adjust && j===0) weight = ar ** i;
			sumVecMul2 += weight * ((nums[j] - ewma) ** 2) / wSum;
		}
		
		const ewmvar = bias * sumVecMul2; // exponentially weighted variance
		const ewmstd = Math.sqrt(ewmvar); // exponentially weighted standard deviation
		
		r.mean.push(ewma);
		r.var.push(ewmvar);
		r.std.push(ewmstd);
	}
	
	return r;
}
function ewmAdjIgnoreNaFalseIncrPartial(span=2, singleRes='std', state) {/*ewmAdjIgnoreNaFalse() incremental-style with state like ewmAdjNoNaIncrPartial()*/
	if (singleRes && !['mean','var','std'].includes(singleRes)) throw Error('`singleRes` must be "mean" | "var" | "std"');
	
	const a  = 2 / (span + 1);
	const ar = 1 - a;
	
	let {m=0, v=0, w=0, w2=0, initialized=false} = state || {};
	
	let [mean, variance, std] = [0, 0, 0];
	
	const ret = () => singleRes
		? ({mean, var: variance, std})[singleRes]
		: [mean, variance, std];
	
	return function (x, getState=false) {
		if (getState === true) return {m, v, w, w2, initialized};
		
		const isNa = !Number.isFinite(x);
		
		// time always advances
		if (initialized) {
			w  = w  * ar;
			w2 = w2 * ar * ar;
			v  = v  * ar;
		}
		
		// first finite observation initializes state
		if (!initialized) {
			if (!isNa) [m, v, w, w2, initialized] = [x, 0, 1, 1, true];
			[mean, variance, std] = initialized
				? [m, 0, 0]
				: [NaN, NaN, NaN]; // mathematically should be NA (could be 0 for convenience)
			return ret();
		}
		
		// normal ignoreNa=false update
		if (!isNa) {
			w  += 1;
			w2 += 1;
			const delta = x - m;
			m += delta / w;
			v += delta * delta * (w - 1) / w;
		}
		
		const bias = (w * w) / (w * w - w2);
		variance = bias * v / w;
		
		mean = m;
		std = Math.sqrt(variance);
		
		return ret();
	};
	/*
	// usage:
	var x = [...Array(400_000)].map(randn);
	var a = ewmAdjIgnoreNaFalse(x,100).std;
	var f = ewmAdjIgnoreNaFalseIncrPartial(100,'std');
	var b = x.map(f);
	dequal(a,b); // true
	
	// usage with state:
	var nItems = 400_000;
	var xAll = [...Array(nItems)].map(randn);
	var x1 = xAll.slice(0,nItems*0.8);
	var x2 = xAll.slice(-(nItems*0.2));
	dequal([...x1, ...x2], xAll); // true
	var f;
	f = ewmAdjIgnoreNaFalseIncrPartial(100,'std');
	var p1 = x1.map(f);
	var aState = f(undefined,true);
	f = ewmAdjIgnoreNaFalseIncrPartial(100,'std',aState);
	var p2 = x2.map(f);
	f = ewmAdjIgnoreNaFalseIncrPartial(100,'std');
	var all = xAll.map(f);
	var all2 = [...p1, ...p2];
	dequal(all2, all); // true
	*/
}
function ewmAdjNoNaIncrPartial(span=2, singleRes='', state) {/*ewmAdjNoNa() incremental-style with state*/
	if (singleRes && !['mean','var','std'].includes(singleRes)) throw Error('`singleRes` param can only be "mean" | "var" | "std"');
	
	const a = 2 / (span + 1);
	const ar = 1 - a;
	
	let {m=0, v=0, w=1, w2=1} = state || {};
	
	let [mean, variance, std] = [m, 0, 0];
	
	let i = state ? 1 : 0;
	
	const ret = () => singleRes
		? ({mean, var:variance, std})[singleRes]
		: [mean, variance, std];
	
	return function (x, getState=false) {
		if (getState === true) return {m, v, w, w2};
		if (i === 0) { i++; m=x; return ret(); }
		
		w = w * ar + 1;
		w2 = w2 * ar * ar + 1;
		
		const delta = x - m;
		m += delta / w;
		v = (ar * v) + (delta * delta) * (w - 1) / w;
		
		const bias = (w * w) / (w * w - w2);
		variance = bias * v / w;
		
		mean = m;
		std = Math.sqrt(variance);
		
		return ret();
	};
	
	/*
	this function serves more as a solution for some use cases rather than for perf purposes
	pro:  small state, perfect for saving state between calls
	con:  perf is around half the normal ewmAdjNoNa()
	
	// usage:
	var x = [...Array(400_000)].map(randn);
	var a = ewmAdjNoNa(x,100).std;
	var f = ewmAdjNoNaIncrPartial(100,'std');
	var b = x.map(f);
	dequal(a,b); // true
	
	// usage with state:
	var nItems = 400_000;
	var xAll = [...Array(nItems)].map(randn);
	var x1 = xAll.slice(0,nItems*0.8);
	var x2 = xAll.slice(-(nItems*0.2));
	dequal([...x1, ...x2], xAll); // true
	var f;
	f = ewmAdjNoNaIncrPartial(100,'std');
	var p1 = x1.map(f);
	var aState = f(undefined,true);
	f = ewmAdjNoNaIncrPartial(100,'std',aState);
	var p2 = x2.map(f);
	f = ewmAdjNoNaIncrPartial(100,'std');
	var all = xAll.map(f);
	var all2 = [...p1, ...p2];
	dequal(all2, all); // true
	
	// partial vs normal perf:
	var nItems = 20_000_000;
	var xAll = [...Array(nItems)].map(randn);
	var x1 = xAll.slice(0,nItems*0.6);
	var x2 = xAll.slice(-(nItems*0.4));
	console.time('partial');
	var f;
	f = ewmAdjNoNaIncrPartial(100,'std');
	var p1 = x1.map(f);
	var aState = f(undefined,true);
	f = ewmAdjNoNaIncrPartial(100,'std',aState);
	var p2 = x2.map(f);
	console.timeEnd('partial');
	console.time('normal');
	var r1 = ewmAdjNoNa(x1,100).std;
	var r2 = ewmAdjNoNa(xAll,100).std;
	console.timeEnd('normal');
	// partial: 3.39 s
	// normal:  1.56 s
	*/
}
function ewmIncrPartial(span=2, _adjust=true, singleRes='', state={}) {/*ewm_pandas_conceptual() incremental-style with state*/
	if (singleRes && !['mean','var','std'].includes(singleRes)) throw Error('`singleRes` param can only be "mean" | "var" | "std"');
	
	const a = 2 / (span + 1);
	const ar = 1 - a;
	
	let { i=0 } = state;
	const { nums=[], wInv=[], adjust=_adjust } = state;
	
	const getWeight = adjust
		? (i,j) => wInv[i-j]
		: (i,j) => j === 0 ? ar**i : wInv[i-j];
	
	return function (n, getState=false) {
		if (getState === true) return {i, nums, wInv, adjust};
		
		nums.push(n);
		wInv.push(adjust ? ar**i : a*ar**i);
		
		let wSum = 0;
		let sumVecMul = 0;
		let wSqrdSum = 0;
		for (let j=0; j<=i; j++) {
			const weight = getWeight(i,j);
			wSum += weight;
			sumVecMul += weight * nums[j];
			wSqrdSum += weight ** 2;
		}
		
		const ewma = sumVecMul / wSum;
		const wSumSqr = wSum ** 2;
		const bias = wSumSqr / (wSumSqr - wSqrdSum);
		
		let sumVecMul2 = 0;
		for (let j=0; j<=i; j++) {
			const weight = getWeight(i,j);
			sumVecMul2 += weight * ((nums[j] - ewma) ** 2) / wSum;
		}
		
		const ewmvar = bias * sumVecMul2;
		const ewmstd = Math.sqrt(ewmvar);
		
		i++;
		
		if (singleRes) {
			return ({mean:ewma, var:ewmvar, std:ewmstd})[singleRes];
		} else {
			return [ewma, ewmvar, ewmstd];
		}
	};
	
	/* usage:
	var x = [...Array(1000)].map(randn);
	var a = ewm_pandas_conceptual(x,5).std;
	var f = ewmIncrPartial(5,true,'std');
	var b = x.map(f);
	dequal(a,b); // true
	
	// usage with state:
	var nItems = 20_000;
	var xAll = [...Array(nItems)].map(randn);
	var x1 = xAll.slice(0,nItems*0.8);
	var x2 = xAll.slice(-(nItems*0.2));
	dequal([...x1, ...x2], xAll); // true
	var f;
	f = ewmIncrPartial(5,true,'std');
	var p1 = x1.map(f);
	var aState = f(undefined,true);
	f = ewmIncrPartial(5,true,'std',aState);
	var p2 = x2.map(f);
	f = ewmIncrPartial(5,true,'std');
	var all = xAll.map(f);
	var all2 = [...p1, ...p2];
	dequal(all2, all);
	
	// partial vs normal perf:
	var nItems = 20_000;
	var xAll = [...Array(nItems)].map(randn);
	var x1 = xAll.slice(0,nItems*0.8);
	var x2 = xAll.slice(-(nItems*0.2));
	console.time('partial');
	var f;
	f = ewmIncrPartial(5,true,'std');
	var p1 = x1.map(f);
	var aState = f(undefined,true);
	f = ewmIncrPartial(5,true,'std',aState);
	var p2 = x2.map(f);
	console.timeEnd('partial');
	console.time('normal');
	var r1 = ewm_pandas_conceptual(x1,5,true).std;
	var r2 = ewm_pandas_conceptual(xAll,5,true).std;
	console.timeEnd('normal');
	// partial: 2387 ms
	// normal:  2800 ms
	*/
}

function ewmstd(x=[], period=2) {/*formal init values*/
	let ema   = [ x[0] ];
	let emvar = [ 0 ];
	let delta = [ undefined ];
	let emsd  = [ undefined ];
	
	let a = 2 / (period + 1);
	
	for (let i=1, len=x.length; i<len; i++) {
		delta.push(x[i] - ema[i-1]);
		ema.push(ema[i-1] + a * delta[i]);
		emvar.push( (1-a) * (emvar[i-1] + a * delta[i]**2) );
		emsd.push( Math.sqrt(emvar[i]) );
	}
	
	return emsd;
}
function ewmstdIncr(alpha) {/*formal init values - alt code (from stdlib)*/
	if (alpha < 0 || alpha > 1) throw new Error('alpha must be nonnegative number in [0,1] range');
	
	let incr;
	let s2;
	let s;
	let r;
	let m;
	let c = 1 - alpha;
	
	return (x) => {
		if (arguments.length === 0) return s === undefined ? null : s;
		
		if (s === undefined) {
			m = x;
			s2 = 0;
		} else {
			r = x - m;
			incr = alpha * r;
			m += incr;
			s2 = c * (s2 + (r*incr));
		}
		
		s = Math.sqrt(s2);
		
		return s;
	};
	/* usage:
	var alpha = 2 / (5 + 1); // smoothing factor
	var accumulator = ewmstdIncr(alpha);
	[...Array(9).keys()].slice(1).map(accumulator);
	*/
}

function rsi(prices=[], period=14, decimals=2) {
	if (prices.length - 1 < period) return [];
	const result = [];
	const calc = (ag, al) => +(100 - (100 / (1 + (ag / al)))).toFixed(decimals);
	
	const upmoves = [];
	const dwmoves = [];
	for (let i=1, n=period; i<=n; i++) {
		const chg = prices[i] - prices[i-1];
		upmoves.push(chg > 0 ? chg : 0);
		dwmoves.push(chg < 0 ? Math.abs(chg) : 0);
	}
	let avgGain = sum(upmoves) / period;
	let avgLoss = sum(dwmoves) / period;
	
	result.push( calc(avgGain, avgLoss) );
	
	for (let i=period+1, n=prices.length; i<n; i++) {
		const chg = prices[i] - prices[i-1];
		const gain = chg > 0 ? chg : 0;
		const loss = chg < 0 ? Math.abs(chg) : 0;
		
		avgGain = ((avgGain * (period-1)) + gain) / period;
		avgLoss = ((avgLoss * (period-1)) + loss) / period;
		
		result.push( calc(avgGain, avgLoss)  );
	}
	
	return result;
}

function ad(prices={high: [], low: [], close: [], volume: []}, decimals=4) {
	const { high } = prices;
	const len = high.length;
	if (!len) return [];
	const keys = Object.keys(prices);
	if (keys.join(' ') !== 'high low close volume') return [];
	if ( keys.find(k => prices[k].length !== len) ) return [];
	
	const result = [];
	const { isNaN } = Number;
	
	let _ad = 0;
	for (let i=0; i<len; i++) {
		const [ iHigh, iLow, iClose, iVol ] = keys.map(k => prices[k][i]);
		
		let mfm = ((iClose - iLow) - (iHigh - iClose)) / (iHigh - iLow);
		if ( isNaN(mfm) ) mfm = 0;
		const cmfv = mfm * iVol;
		_ad += cmfv;
		
		result.push( +_ad.toFixed(decimals) );
	}
	
	return result
}

// random
function rand(min=0, max=1, decimal=false, inclusiveMax=true) {/*random from uniform distribution*/
	if (decimal) {
		return Math.random() * (max - min) + min;
	} else {
		[min, max] = [Math.ceil(min), Math.floor(max)];
		return Math.floor( Math.random() * (max - min + (inclusiveMax?1:0)) ) + min;
	}
}

function randn() {/*random from gaussian distribution*/
	let [u, v] = [0, 0];
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function randomChoice(events=[], size=0, p=[], epsMultp=1) {/*numpy.random.choice()*/
	let [N, M] = [events.length, p.length];
	let EPS = Number.EPSILON * epsMultp;
	
	if (M) {
		if (N !== M)                   throw Error('Events have to be same length as probability.');
		if (!p.every(Number.isFinite)) throw Error('Probability can contain only numbers.');
		if (p.some(i => i < 0))        throw Error('Probability cannot contain negative numbers.');
		
		let pSum = p.reduce((r,i) => r+i, 0);
		if (pSum < 1-EPS || pSum > 1+EPS) throw Error('Probabilities do not sum to 1.');
	} else {
		p = Array(N).fill(1 / N);
	}
	
	let pRanges = p.reduce((ranges, v, i) => {
		let start = i > 0 ? ranges[i-1][1] : 0 - EPS;
		ranges.push([start, v + start + EPS]);
		return ranges;
	}, []);
	
	let choices = [];
	for (let i=0; i<size; i++) {
		let n = Math.random();
		let rangeIndex = pRanges.findIndex((v, i) => n > v[0] && n <= v[1]);
		choices.push(events[rangeIndex]);
	}
	
	return choices;
}

// util
function minmax(nums=[]) {
	let {min,max} = Math;
	return nums.reduce(([n,x],i)=> [min(n,i), max(x,i)], [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]);
}
function min(nums=[]) {
	return nums.reduce((n,i)=> Math.min(n,i), Number.POSITIVE_INFINITY);
}
function max(nums=[]) {
	return nums.reduce((x,i)=> Math.max(x,i), Number.NEGATIVE_INFINITY);
}
function range(...a) {
	let start, stop, step;
	let r = [];
	if (a.length < 2) {
		[stop=0, start=0, step=1] = a;
	} else {
		[start=0, stop=0, step=1] = a;
	}
	if (start < stop) {
		if (step <= 0) return r;
		for (let i=start; i<stop; i+=step) r.push(i);
	} else if (start > stop) {
		if (step >= 0) return r;
		for (let i=start; i>stop; i+=step) r.push(i);
	}
	return r;
}
function arraySplit(arr=[], size=0) {/*np.array_split()*/
	let a = [...arr];
	let r = [];
	for (let i=0; i<size; i++) {
		let k = Math.ceil(a.length / (size-i));
		let chunk = a.slice(0, k);
		r.push(chunk);
		a = a.slice(k);
	}
	return r;
}

// tmp
function polyval2(x=[], y=[], order=3) {
	if (x.length <= order) console.warn('Warning: Polyfit may be poorly conditioned.');

	let xMatrix = []
	let yMatrix = numeric.transpose([y])

	for (let i=0; i<x.length; i++) {
		let temp = []
		for (let j=0; j<=order; j++) temp.push(Math.pow(x[i], j))
		xMatrix.push(temp)
	}
	
	let xMatrixT = numeric.transpose(xMatrix);

	let dot1 = numeric.dot(xMatrixT, xMatrix);
	let dot2 = numeric.dot(xMatrixT, yMatrix);

	let dotInv = numeric.inv(dot1);

	let coefficients = numeric.dot(dotInv, dot2);
	
	return coefficients;
}
function polyval3(x=[], y=[], order=3) {
	let xMatrix = [];
	let xTemp = [];
	let yMatrix = numeric.transpose([y]);

	for (let i=0; i<x.length; i++) {
		xTemp = [];
		for(let j=0; j<=order; j++) xTemp.push(1*Math.pow(x[i],j));
		xMatrix.push(xTemp);
	}
	
	let xMatrixT = numeric.transpose(xMatrix);
	let dot1 = numeric.dot(xMatrixT,xMatrix);
	let dotInv = numeric.inv(dot1);
	let dot2 = numeric.dot(xMatrixT,yMatrix);
	let solution = numeric.dot(dotInv,dot2);
	
	return solution;
}