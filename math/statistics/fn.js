function mean(nums=[]) {
	return sum(nums) / nums.length;
}

function sum(nums=[]) {
	return nums.reduce((a,c) => a += c, 0);
}

function range(nums=[]) {
	return Math.max(...nums) - Math.min(...nums);
}

function mode(list=[]) {
	const tmp = {};
	for (const i of list) {
		if (!tmp[i]) tmp[i] = 0;
		tmp[i]++;
	}
	const counts = list.map(i => tmp[i]);
	const maxCount = Math.max(...counts);
	const maxIndex = counts.indexOf(maxCount);
	return list[maxIndex];
}

function median(nums=[]) {
	const len = nums.length;
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
	const avg = mean(nums);
	const sqrDiffs = nums.map(n => Math.pow(n - avg, 2));
	return mean(sqrDiffs);
}

function iqr(_nums=[]) {
	const nums = [..._nums];
	nums.sort((a,b) => a-b)
	
	let firstHalf, secondHalf;
	
	const len = nums.length;
	if (len % 2 === 0) {
		const idx = len / 2;
		firstHalf  = nums.slice(0, idx);
		secondHalf = nums.slice(idx, nums.length);
	} else {
		const idx = (len - 1) / 2;
		firstHalf  = nums.slice(0, idx);
		secondHalf = nums.slice(idx+1, nums.length);
	}
	
	return median(secondHalf) - median(firstHalf);
}

function regressionLinear(points=[]) {
	const x = points.map(point => point.x);
	const y = points.map(point => point.y);
	const xMean = mean(x);
	const yMean = mean(y);
	
	const xMeanDiff = x.map(n => n - xMean);
	const yMeanDiff = y.map(n => n - yMean);
	const xMeanDiffSquared        = xMeanDiff.map(n => n * n); // Math.pow(n, 2)
	const xMeanDiffTimesYMeanDiff = xMeanDiff.map((n, i) => n * yMeanDiff[i]);
	
	const b1 = sum(xMeanDiffTimesYMeanDiff) / sum(xMeanDiffSquared);
	const b0 = yMean - (b1 * xMean);
	
	const regresions = x.map(x => (x*b1) + b0);
	
	return regresions;
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
	
	res.push(
		mean( nums.slice(0,period) )
	);
	
	let m = 2 / (period+1);
	
	for (let i=period, len=nums.length; i<len; i++) {
		let n = (nums[i] * m) + (res[i-1] * (1-m) );
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