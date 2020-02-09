function splitArr(arr, size){
	return arr
		.map( (v, i) => i % size === 0 ? arr.slice(i, i+size) : undefined )
		.filter(i => i);
}

function splitArr(arr, size){
	const res = [];
	for (let i=0; i<arr.length; i+=size) {
		res.push( arr.slice(i, i+size) );
	}
	return res;
}

// mutating
function splitArr(arr, size){
	const res = [];
	while (arr.length > 0) res.push(arr.splice(0, size));
	return res;
}
