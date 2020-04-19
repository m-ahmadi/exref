function debounce(func, wait=0, options) {
	const maxing = 'maxWait' in options;
	const maxWait = options.maxWait && Math.max(options.maxWait, wait);
	const leading = options.leading || false;
	const trailing = options.trailing || true;
	
  let lastArgs;
	let lastThis;
	let result;
	let timerId;
	let lastCallTime;
	let lastInvokeTime = 0;
	
  function invokeFunc(time) {
    var args = lastArgs;
    var thisArg = lastThis;

    lastArgs = undefined;
		lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;                      // reset any `maxWait` time
    timerId = setTimeout(timerExpired, wait);   // start the timer for the trailing edge
    return leading ? invokeFunc(time) : result; // invoke the leading edge
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime;
    var timeSinceLastInvoke = time - lastInvokeTime;
    var result = wait - timeSinceLastCall;
    return maxing ? Math.min(result, maxWait - timeSinceLastInvoke) : result;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime;
		var timeSinceLastInvoke = time - lastInvokeTime;

    /* either this is the first call, activity has stopped and we're at the
    trailing edge, the system time has gone backwards and we're treating
    it as the trailing edge, or we've hit the `maxWait` limit. */
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }
  function timerExpired() {
    var time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time)); // restart the timer.
  }
  function trailingEdge(time) {
    timerId = undefined;

    // only invoke if we have `lastArgs` which means `func` has been debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now());
  }
	
  function debounced() {
    const time = Date.now();
		const isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

function throttle(func, wait, options) {
  const { leading, trailing } = options;
	
  return debounce(func, wait, {
    leading,
		trailing,
    maxWait: wait
  });
}