// fisher–yates
function shuffleArr(arr=[]) {
	let i = arr.length;
	let j;
	
	while (i !== 0) {
		j = Math.floor(Math.random() * i);
		i--;
		[ arr[i], arr[j] ] = [ arr[j], arr[i] ]; // swap
	}
	
	return arr;
}
shuffle([1,2,3,'a','b','c',{x:true}])


// schwartzian transform
function shuffleArr(arr=[]) {
	return arr
		.map(val => ({ val, sort: Math.random() }))
		.sort((a, b) => a.sort-b.sort)
		.map(({ val }) => val);
}
shuffle([1,2,3,'a','b','c',{x:true}])