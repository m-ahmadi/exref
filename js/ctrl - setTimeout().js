var timeoutID = scope.setTimeout(fn|str, ?delay=0, ?args...)
clearTimeout(timeoutID)/*
args... is passed to fn
setTimeout() and setInterval() share the same pool of ids, and can technically be used interchangeably. (best not to ever do this for clarity of code)
a timeout id is never reused by a subsequent call to setTimeout/setInterval on the same object (window/worker). (different objects use separate pools of IDs.) */

function add(a,b) {console.log(a+b)}

setTimeout(add, 50)          // NaN
setTimeout(add, 500, 2, 3)   // 5

var t = setTimeout(add, 500) // never runs
clearTimeout(t)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// setTimeout in loop (closure)

var i;
for (i=1; i<3; i+=1) {
	(function (index) {
		setTimeout(function () { console.log(index); }, 1000);
	})(i);
}

// or

function doSetTimeout(i) {
	setTimeout(function () { alert(i); }, 1000);
}
var i;
for (i=1; i<=2; i+=1) {
	doSetTimeout(i);
}

// cumulative delay
for (let i=0, j=0; i<10; i++, j+=500) {
	setTimeout(console.log, j, i);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@