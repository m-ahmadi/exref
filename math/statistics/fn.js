function sqr(n=0) {
	return Math.pow(n, 2);
}

function sum(nums=[]) {
	return nums.reduce((r,i) => r += i, 0);
}

function product(nums=[]) {
	return nums.reduce((r,i) => r *= i, 1);
}

function mean(nums=[], sample=false) {
	return sum(nums) / (nums.length - (sample?1:0));
}

function range(nums=[]) {
	return max(nums) - min(nums);
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

function median(nums=[]) {
	let len = nums.length;
	if (len % 2 === 0) {
		return (nums[(len/2)-1] + nums[len/2]) / 2;
	} else {
		return nums[(len-1) / 2];
	}
}

function stdv(nums=[]) {
	return Math.sqrt( variance(nums) );
}

function variance(nums=[]) {
	let _mean = mean(nums);
	let sqrDiffs = nums.map(n => sqr(n - _mean));
	return mean(sqrDiffs);
}

function iqr(_nums=[]) {
	let nums = [..._nums];
	nums.sort((a,b) => a-b)
	
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
	let [xMean, yMean] = [x,y].map(mean);
	
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
	let [xm, ym] = [x, y].map(mean);
	return mean(x.map((v,i)=> (v - xm) * (y[i] - ym)), true);
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
	let numerator   = sum(x.map((v,i)=>v*y[i])) - (xsum * ysum / n);
	let denominator = sqrt(sum(x.map(sqr)) - (sqr(xsum) / n)) * sqrt(sum(y.map(sqr)) - (sqr(ysum) / n));
	return numerator / denominator;
}

function durbinWatson(x=[], y=[]) {
	let e = regressionLinear(x,y).map((v,i)=> y[i]-v);
	return sum(x.map((v,t)=> t>0 ? sqr(e[t] - e[t-1]) : 0)) / sum(e.map(sqr));
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

function matMul(a=[], b=[]) {
	let bcols = [...Array(b.length)].map((v,col)=> b.map(row=> row[col]));
	return a.map(row =>
		bcols.map(col => sum(
			row.map((v,i)=> v * col[i])
		))
	);
}

function matvecMul(mat=[], vec=[]) {
	if ( mat.some(i=>i.length !== vec.length) ) return;
	return mat.map(row => sum(
		row.map((v,i)=> v * vec[i])
	));
}

function vecmatMul(vec=[], mat=[]) {
	if (vec.length !== mat.length) return;
	let cols = [...Array(mat[0].length)].map((v,j)=> mat.map(i=> i[j]));
	return cols.map((col,i) => sum(
		col.map((v,i)=> vec[i] * v)
	));
}

function matPow(mat=[], n=2) {
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

function min(nums=[]) {
	return nums.reduce((n,i)=> Math.min(n,i), Number.POSITIVE_INFINITY);
}

function max(nums=[]) {
	return nums.reduce((x,i)=> Math.max(x,i), Number.NEGATIVE_INFINITY);
}