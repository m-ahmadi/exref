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

function diff(_x=[], _d=1) {
	let x = [..._x];
	
	for (let d of range(1, _d+1)) {
		let L = 0;
		let k = Math.pow(1-L, d);
		x = range(1, x.length).map(i=> k*x[i] - k*x[i-1] );
	}
	
	return x;
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

function polyval(p=[], x=0) {/*Horner*/
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
		return a.map(i=> i.map(pow))
	} else {
		return a.map(pow);
	}
}

function vecMul(a=[], b=[]) {
	if ( Array.isArray(a[0]) ) {
		return a.map((v,i)=> v.map((w,j)=> w * b[i][j]) )
	} else {
		return a.map((v,i)=> v * b[i]);
	}
}

function vecDiv(a=[], b=[]) {
	if ( Array.isArray(a[0]) ) {
		return a.map((v,i)=> v.map((w,j)=> w / b[i][j]) )
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
function ewm(nums=[], span=2, adjust=true) {/*pandas*/
	let means = [];
	let vars = [];
	let stds = [];
	
	let a = 2 / (span + 1);
	
	nums.forEach((num, j) => {
		let z = nums.slice(0, j+1);
		let n = z.length;
		
		let w = [];
		if (adjust) {
			for (let i=n-1; i>-1; i--) w.push((1-a) ** i);
		} else {
			for (let i=n-1; i>-1; i--) w.push(i<j ? a*(1-a)**i : (1-a)**i);
		}
		
		let wSum = sum(w);
		let wSumsqr = wSum ** 2;
		
		// exponentially weighted mean
		let ewma = sum(vecMul(w,z)) / wSum;
		
		// bias
		let bias = wSumsqr / ( wSumsqr - sum(w.map(sqr)) );
		
		// exponentially weighted variance
		let ewmvar = bias * sum(  vecMul(w, z.map(i=> (i-ewma)**2)).map(i=> i/wSum)  );
		
		// exponentially weighted standard deviation
		let ewmstd = Math.sqrt(ewmvar);
		
		means.push(ewma);
		vars.push(ewmvar);
		stds.push(ewmstd);
	});
	
	return [means, vars, stds];
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

// exponentially weighted standard deviation (from stdlib)
function increwstdev(alpha) {
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
			s2 = c * ( s2 + (r*incr) );
		}
		
		s = Math.sqrt(s2);
		
		return s;
	};
}
/* var alpha = 2 / (5 + 1); // smoothing factor
var accumulator = increwstdev(alpha);
[...Array(9).keys()].slice(1).map(accumulator); */

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
function randn() {/*random from gaussian distribution*/
	let [u, v] = [0, 0];
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function randomChoice(events=[], size=0, p=[], epsMultp=1) {/*numpy.random.choice*/
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