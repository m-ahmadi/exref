function* mygen(a) {
	var a = yield a;
	var b = yield a;
	var c = yield a;
	console.log(a, b, c);
}

var f = mygen();
f.next();
f.next(1);
f.next(2);
f.next(3); // 1 2 3