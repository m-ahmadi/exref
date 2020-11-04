function objectify(map, r={}) {
	for (let [k,v] of map) {
		if (Map.prototype.toString.call(v) === '[object Map]') {
			r[k] = objectify(v, r[k]);
		} else {
			r[k] = v;
		}
	}
	return r;
}

var m = new Map([
	['hi', 1],
	['bye', 2],
	['ok', new Map([ ['x',4], ['y',6] ]) ]
]);

objectify(m) // { hi:1, bye:2, ok:{x:4, y:6} }
