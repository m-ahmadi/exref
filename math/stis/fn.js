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
	
	return median(secondHalf) - median(firstHalf)
}

function median(nums=[]) {
	const len = nums.length;
	if (len % 2 === 0) {
		return (nums[(len/2)-1] + nums[len/2]) / 2;
	} else {
		return nums[(len-1) / 2];
	}
}