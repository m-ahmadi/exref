// problem:
function iterate() {
	var fns = [];
	for (var i=0; i<5; i++) {
		fns.push(function () { console.log(i) });
	}
	return fns;
}
iterate().forEach( fn => fn() ) // always 5

// solution:
function iterate() {
	var fns = [];
	for (var i=0; i<5; i++) {
		(function (j) {
			fns.push(function () { console.log(j) });
		})(i);
	}
	return fns;
}
iterate().forEach( fn => fn() ) // 0 1 2 3 4