scale( [0,100,200,300,400,500,600] )     // [0, 66.67, 133.33, 200, 266.67, 333.33, 400]
scale( [0,100,200,300,400,500,600,650] ) // [0, 61.54, 123.08, 184.62, 246.15, 307.69, 369.23, 400]


function scale(nums, newMin=0, newMax=400) {
	const min = Math.min(...nums);
	const max = Math.max(...nums);
	const diff = max - min;
	const newDiff = newMax - newMin;
	
	return nums.map(i =>
		+(newDiff * (i-min) / diff + newMin).toFixed(2)
	);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// me (broken)
function scale(nums, height=400, round=true) {
	let percent = (height / (nums.length-1)) * 0.01;
	if (round) percent = +Big(percent).round(2,0);
	return nums.map(i => percent * i);
}
// or
function scale(nums, height=400, round=true) {
	let percent = (100 - (height / (nums.length-1))) * 0.01;
	if (round) percent = +Big(percent).round(2,3);
	return nums.map( i => i - (percent * i) );
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@