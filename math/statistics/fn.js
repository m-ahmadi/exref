function sqr(n=0) {
	return Math.pow(n, 2);
}

function sum(nums=[]) {
	return nums.reduce((r,i) => r += i, 0);
}

function product(nums=[]) {
	return nums.reduce((r,i) => r *= i, 1);
}

function mean(nums=[], trim=0, sample=false) {
	if (trim) nums = [...nums].sort((a,b)=> a-b).slice(+trim, -trim);
	return sum(nums) / (nums.length - (sample?1:0));
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
	let m = mean(x);
	let sqrDiffs = x.map(i=> sqr(i-m));
	return mean(sqrDiffs);
}

function meandv(nums=[]) {
	let m = mean(nums);
	return mean( nums.map(i => Math.abs(i-m)) );
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

function regressionLinear(x=[], y=[]) {
	let [xMean, yMean] = [mean(x), mean(y)];
	
	let xMeanDiff = x.map(n => n - xMean);
	let yMeanDiff = y.map(n => n - yMean);
	let xMeanDiffSquared        = xMeanDiff.map(sqr);
	let xMeanDiffTimesYMeanDiff = xMeanDiff.map((n, i) => n * yMeanDiff[i]);
	
	let b1 = sum(xMeanDiffTimesYMeanDiff) / sum(xMeanDiffSquared);
	let b0 = yMean - (b1 * xMean);
	
	let regresions = x.map(x => (x*b1) + b0);
	
	return regresions;
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
	let [m, s, n] = [mean(x), stdv(x), x.length];
	let sum = 0;
	for (let i=0; i<n; i++) sum += Math.pow((x[i] - m) / s, ith);
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
	
	let t = range(1,n).map(i=>(i-3/8) / (n+0.25));
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
		
		range(ct,(n-2)-ct+1).map(i=> w[i] = m[i] / sqrt(phi));
		
		let mu = mean(x);
		let xd = x.map(i=> i-mu);
		
		W = sqr(sum(vecMul(w,x))) / matMul([xd], matTranspose([xd]))[0][0];
	}

	return W;
	
	function range(b,e,s=1){let r=[];for(let i=b;i<=e;i+=s){r.push(i);}return r;}
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
	
	for(let i=cof.length-1; i>0; i--) {
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

function cusum(nums=[]) {
	let sum = 0;
	return nums.map(i => sum += i);
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

function ema(nums=[], period=5, fill) {
	let res = Array(period-1).fill(fill);
	
	res.push( mean(nums.slice(0,period)) );
	
	let m = 2 / (period+1);
	
	for (let i=period, len=nums.length; i<len; i++) {
		let n = (nums[i] * m) + (res[i-1] * (1-m));
		res.push(n);
	}
	
	return res;
}

function ema2(nums=[], period=5) {
	let res = [];
	let pi = period - 1;
	
	for (let i=0, len=nums.length; i<len; i++) {
		if (i < pi) {
			res.push(undefined);
			continue;
		}
		
		if (i === pi) {
			let r = nums.slice(0,i+1);
			r = r.reduce((r,i)=> r+=i,0) / r.length;
			res.push(r);
			continue;
		}
		
		let m = 2 / (period+1);
		let v = (nums[i] * m) + (res[i-1] * (1-m) );
		
		res.push(v);
	}
	
	return res;
}

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