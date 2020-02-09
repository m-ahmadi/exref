function twoSum(nums, target) {
	const res = []
	for (let i=0; i<nums.length; i+=1) {
		const diff = target - nums[i];
		const idx = nums.indexOf(diff);
		if (diff > 0 && idx !== 0) {
			res.push(i, idx);
			break;
		}
	}
	return res;
}

twoSum([4,5,3,2,1,6,7], 6) // [0, 3]
twoSum([2,7,11,15], 9)     // [0, 1]