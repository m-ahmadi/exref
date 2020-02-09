function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {
		let left = [];
		let right = [];
		let newArray = [];
		let pivot = origArray.pop();
		let length = origArray.length;
		
		for (let i=0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}
		
		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

quickSort([3, 0, 2, 5, -1, 4, 1 ]) // [-1, 0, 1, 2, 3, 4, 5]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another implementation
function swap(items, leftIndex, rightIndex){
	var temp = items[leftIndex];
	items[leftIndex] = items[rightIndex];
	items[rightIndex] = temp;
}
function partition(items, left, right) {
	var pivot   = items[Math.floor((right + left) / 2)], //middle element
	i       = left, //left pointer
	j       = right; //right pointer
	while (i <= j) {
		while (items[i] < pivot) {
			i++;
		}
		while (items[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(items, i, j); //sawpping two elements
			i++;
			j--;
		}
	}
	return i;
}

function quickSort(items, left, right) {
	var index;
	if (items.length > 1) {
		index = partition(items, left, right); //index returned from partition
		if (left < index - 1) { //more elements on the left side of the pivot
			quickSort(items, left, index - 1);
		}
		if (index < right) { //more elements on the right side of the pivot
			quickSort(items, index, right);
		}
	}
	return items;
}

quickSort([5,3,7,6,2,9], 0, items.length - 1) // [2,3,5,6,7,9]
