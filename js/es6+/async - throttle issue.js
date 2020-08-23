async function a(t=1) {
	return new Promise(resolve => setTimeout(()=> resolve('hi '+t), t*500))
}

async function b() {
	return await Promise.allSettled( [1,2,3,5].map(a) );
}

function throttle(fn, wait=100) {
	let last;
	let deferTimer;
	return async function (...args) {
		const now = Date.now();
		if (last && now < last + wait) { // hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(this, args);
			}, wait);
		} else {
			last = now;
			fn.apply(this, args);
		}
	};
}

(async function () {
	const _b = throttle(b);
	
	const res1 = await b();  // fine
	const res2 = await _b(); // all hell breaks loose
	
	console.log(res2);
})()

// just forget throttling async functions (for now)