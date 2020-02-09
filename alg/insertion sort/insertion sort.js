function insertionSort() {
	var a = [5, 2, 4, 6, 1, 3];
	var j;
	var i;
	var key;

	for (j = 1; j < a.length; j+=1) {
		key = a[j];
		i = j - 1;
		console.log(i);
		while (i > 0 && a[i] > key) {
			a[i+1] = a[i];
			i -= 1;
		}
		a[i+1] = key;
	}
	
	console.log(a);
}