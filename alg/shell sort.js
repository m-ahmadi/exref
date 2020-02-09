function shellSort(arr) {
	var increment = arr.length / 2;
	while (increment > 0) {
		for (i = increment; i < arr.length; i++) {
			var j = i;
			var temp = arr[i];
			
			while (j >= increment && arr[j-increment] > temp) {
				arr[j] = arr[j-increment];
				j = j - increment;
			}
			
			arr[j] = temp;
		}
    
		if (increment == 2) {
			increment = 1;
			} else {
			increment = parseInt(increment*5 / 11);
		}
	}
  return arr;
}

shellSort([3, 0, 2, 5, -1, 4, 1])
// [-1, 0, 1, 2, 3, 4, 5, 3.5: undefined, 4.5: undefined, 5.5: undefined, 6.5: undefined]