function throttle(fn, wait=100) {
	let last;
	let deferTimer;
	return function (...args) {
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

function throttle(fn, wait=100) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      fn.apply(this, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= wait) {
          fn.apply(this, args);
          lastRan = Date.now();
        }
      }, wait - (Date.now() - lastRan))
    }
  }
}

function throttle(fn, wait=100) {
	let inThrottle;
	return function (...args) {
		if (!inThrottle) {
			fn.apply(this, args);
			inThrottle = true;
			setTimeout(() => inThrottle = false, wait);
		}
	};
}