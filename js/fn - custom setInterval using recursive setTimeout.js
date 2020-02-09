var h = (function () {
	var timeout;//,timeoutHandle;
	return {
		//timeoutHandle,
		setInterval: function (func, time, handle) {
			timeout = setTimeout(function () {
				if (timeout > 0) {
					h.setInterval(func, time, handle);
					try {
						func();
					} catch (e) {
						throw e.toString();
					}
					//return this.timeoutHandle;
					return handle.timeoutHandle;
				}
			}, time);
			//this.timeoutHandle = timeout;
			handle.timeoutHandle = timeout;
		},
		clearInterval: function (handle) {
			clearTimeout(handle);
		}
	};
}());
