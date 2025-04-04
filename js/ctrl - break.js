// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

outerBlock: {
	innerBlock: {
		console.log(1);
		break innerBlock;
		console.log(2);
	}
	console.log(3);
}
// 1 3

outerBlock: {
	innerBlock: {
		console.log(1);
		break outerBlock;
		console.log(2);
	}
	console.log(3);
}
// 1
