var intervalID = scope.setInterval(fn|str, ?delay=0, ?args...)
clearTimeout(intervalID)

function add(a,b) {console.log(a+b)}

setInterval(add, 300)               // unstoppable (runs forever)

var t = setInterval(add, 300, 4, 3) // stopable
setTimeout(()=> clearTimeout(t), 4000)

// flasher
var t = [];
t.push( setInterval(()=>console.log('----'), 1000) );
setTimeout(()=>
	t.push( setInterval(()=>console.log('####'), 1000) )
,500);
setTimeout(()=> t.forEach(clearTimeout), 6000);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// fn - custom setInterval() using recursive setTimeout()

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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@