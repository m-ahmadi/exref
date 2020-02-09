function mergeSort(left_part,right_part) {
	var i = 0;
	var j = 0;
	var result = [];
	
	while (i < left_part.length || j < right_part.length) {
		if (i === left_part.length) {
			// j is the only index left_part
			result.push(right_part[j]);
			j++;
		} else if (j === right_part.length || left_part[i] <= right_part[j]) {
			result.push(left_part[i]);
			i++;
		} else {
			result.push(right_part[j]);
			j++;
		}
	}
	return result;
}

mergeSort([1,3,4], [3,7,9]) //  [1, 3, 3, 4, 7, 9]