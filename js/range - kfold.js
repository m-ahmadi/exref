function kfold(splitsN=1, arr=[], byValue=false) {
	let a = byValue ? arr : [...Array(arr.length).keys()]; // range(a.length)
	let N = a.length;
	let n = Math.floor(N / splitsN);
	
	let rng = [...Array(splitsN).keys()].slice(1); // range(1,splitsN)
	
	return [0, ...rng].map(c => {
		let C = n * c;
		let [i0, i1] = [N-n-C, N-C];
		return {
			chunk: a.slice(i0,i1),
			rest: [ ...a.slice(0,i0), ...a.slice(i1) ]
		};
	});
}

kfold(5, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], true)
/*
[

	{
		chunk: [16, 17, 18, 19, 20]
		rest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
	},

	{
		chunk: [11, 12, 13, 14, 15]
		rest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 17, 18, 19, 20]
	}

	{
		chunk: [6, 7, 8, 9, 10]
		rest: [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
	}

	{
		chunk: [1, 2, 3, 4, 5]
		rest: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
	}
]

*/