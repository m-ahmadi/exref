function find(arr, x) {
	let start = 0;
	let end = arr.length - 1;
	let found;
	let iterations = 0;
	
	while (!found) {
		iterations++;
		const mid  = Math.floor(start + (end - start) / 2);
		if (arr[mid] === x) {
			found = arr[mid];
			break;
		} else {
			if (arr[mid] < x) {
				start = mid + 1;
			} else if (arr[mid] > x) {
				end = mid - 1;
			}
			if (end < start) break; // doesn't exist
		}
	}
	console.log('iterations: ', iterations);
	return found;
}

function bad(arr, x) {
	let found;
	let iterations = 0;
	
	for (let i=0,n=arr.length; i<n; i++) {
		iterations++;
		const item = arr[i];
		if (item === x) {
			found = item;
			break;
		}
	}
	console.log('iterations: ', iterations);
	return found;
}

// var arr = [10,14,19,26,27,31,33,35,42,44];
var arr = [...Array(1000)].map((v,i) => i+1);

find(arr, 31)  // iterations:  5
find(arr, 65)  // iterations:  8
find(arr, 21)  // iterations:  9
find(arr, 950) // iterations:  9

bad(arr, 31)   // iterations:  31
bad(arr, 65)   // iterations:  65
bad(arr, 21)   // iterations:  21
bad(arr, 950)  // iterations: 950

