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
	const _mean = mean(nums);
	const sqrDiffs = nums.map(n => Math.pow(n - _mean, 2));
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
	const xs = points.map(point => point.x);
	const ys = points.map(point => point.y);
	const xsMean = sum(xs) / xs.length;
	const ysMean = sum(ys) / ys.length;
	
	const xMeanDiff = xs.map(n => n - xsMean);
	const yMeanDiff = ys.map(n => n - ysMean);
	const xMeanDiffSquared        = xMeanDiff.map(n => n * n); // Math.pow(n, 2)
	const xMeanDiffTimesYMeanDiff = xMeanDiff.map((n, i) => n * yMeanDiff[i]);
	
	const b1 = sum(xMeanDiffTimesYMeanDiff) / sum(xMeanDiffSquared);
	const b0 = ysMean - (b1 * xsMean);
	
	const regresions = xs.map(x => b0 + (b1 * x));
	
	return regresions;
}

function mean(nums=[]) {
	return sum(nums) / nums.length;
}

function sum(nums=[]) {
	return nums.reduce((a,c) => a += c, 0);
}