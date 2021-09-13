// basic
Math.max(...[1,2,3,4]) // 4 
Math.min(...[1,2,3,4]) // 1
// limitation
Math.max(...Array(125525).keys()) // 125523
Math.max(...Array(125526).keys()) // RangeError: Maximum call stack size exceeded

// solution
max([...Array(125526).keys()])    // 125525

function min(nums=[]) {
	let {min} = Math;
	return nums.reduce((n,i)=> min(n,i), Number.POSITIVE_INFINITY);
}

function max(nums=[]) {
	let {max} = Math;
	return nums.reduce((x,i)=> max(x,i), Number.NEGATIVE_INFINITY);
}

function minmax(nums=[]) {
	let {min,max} = Math;
	return nums.reduce(([n,x],i)=> [min(n,i), max(x,i)], [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]);
}

// another solution
[1,2,3,4].sort((a,b)=>b-a)[0] // 4
[1,2,3,4].sort((a,b)=>a-b)[0] // 1