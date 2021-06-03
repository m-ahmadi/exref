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
	return Math.max(...nums) - Math.min(...nums);
}

function mode(list=[]) {
	let tmp = {};
	for (let i of list) {
		if (!tmp[i]) tmp[i] = 0;
		tmp[i]++;
	}
	let counts = list.map(i => tmp[i]);
	let maxCount = Math.max(...counts);
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
	let [xm, ym] = [x,y].map(mean);
	return mean(x.map((v,i)=> (v - xm) * (y[i] - ym)), true);
}

function pearsonR(x=[], y=[]) {
	let { sqrt } = Math;
	let n = x.length;
	let numerator   = sum(x.map((v,i)=>v*y[i])) - (sum(x) * sum(y) / n);
	let denominator = sqrt(sum(x.map(sqr)) - (sqr(sum(x)) / n)) * sqrt(sum(y.map(sqr)) - (sqr(sum(y)) / n));
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

function cusum(nums=[]) {
	let sum = 0;
	return nums.map(i => sum += i);
}

function sma(nums=[], period=5, fill) {
	let pi = period - 1;
	let res = Array(pi).fill(fill);
	
	for (let i=pi, len=nums.length; i<len; i++) res.push(
		mean( nums.slice(i-pi, i+1) )
	);
	
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