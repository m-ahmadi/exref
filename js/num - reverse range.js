function reverse(nums=[]) {
	let [min,max] = [Math.min(...nums), Math.max(...nums)];
	let t = max + min;
	return nums.map(n => t - n);
}
reverse([1,2,3]) // [3,2,1]