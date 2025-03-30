// by chunk size
// `size` specifies length of each chunk

function splitArr(arr=[], size=0) {
	return arr
		.map( (v, i) => i % size === 0 ? arr.slice(i, i+size) : undefined )
		.filter(i => i);
}

function splitArr(arr=[], size=0) {
	let r = [];
	for (let i=0; i<arr.length; i+=size) {
		r.push( arr.slice(i, i+size) );
	}
	return r;
}

function splitArr(arr=[], size=0) {/*mutating*/
	let res = [];
	while (arr.length > 0) res.push(arr.splice(0, size));
	return res;
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// by division size
// `size|splits` specifies total chunks that array is splitted into

function arraySplit(arr=[], splits=3) {
	const len = arr.length;
	const n = Math.floor(len / splits);
	const isOdd = len % splits;
	const res = [];
	for (let i=0; i<splits; i++) {
		const start = n * i;
		let end = start + n;
		if (i === splits - 1 && isOdd) end = len;
		const chunk = arr.slice(start, end);
		res.push(chunk);
	}
	return res;
}
arraySplit([...Array(9).keys()], 3)  // [ [0,1,2], [3,4,5], [6,7,8] ]
arraySplit([...Array(10).keys()], 3) // [ [0,1,2], [3,4,5], [6,7,8,9] ]


function arraySplit(arr=[], size=0) {/*dynamic chunk size, exactly like `np.array_split()`*/
	let a = [...arr];
	let r = [];
	for (let i=0; i<size; i++) {
		let k = Math.ceil(a.length / (size-i));
		let chunk = a.slice(0, k);
		r.push(chunk);
		a = a.slice(k);
	}
	return r;
}
arraySplit([...Array(9).keys()], 3)  // [ [0,1,2], [3,4,5], [6,7,8] ]
arraySplit([...Array(10).keys()], 3) // [ [0,1,2,3], [4,5,6], [7,8,9] ]


function arraySplit(arr=[], size=0) {/*static chunk size*/
	let k = Math.ceil(arr.length / size);
	let r = [];
	for (let c=0,i=0,j=k; c<size; c++,i+=k,j+=k) r.push(arr.slice(i,j));
	//range(size).reduce(([i,j]) => (r.push(arr.slice(i,j)), [i+k,j+k]), [0,k]); // another way
	return r;
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
