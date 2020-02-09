var timeoutID = scope.setTimeout(function () {}[, delay, param1, param2, ...]);
var timeoutID = scope.setTimeout(function () {}[, delay]);
var timeoutID = scope.setTimeout(code[, delay]);

clearTimeout(timeoutID);
/*
function							Required. The function that will be executed
milliseconds					Optional. The number of milliseconds to wait before executing the code. If omitted, the value 0 is used
param1, param2, ...		Optional. Additional parameters to pass to the function (Not supported in IE9 and earlier)

notes:
setTimeout() and setInterval() share the same pool of ids, and can technically be used interchangeably. (best not to ever do this for clarity of code)
a timeout id is never reused by a subsequent call to setTimeout/setInterval on the same object (window/worker). (different objects use separate pools of IDs.)
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// setTimeout in loop (closure)
// Method 1:
var i;
for (i=1; i<3; i+=1) {
	(function(index) {
		setTimeout(function () { alert(index); }, 1000);
	}(i));
}

// Method 2:
function doSetTimeout(i) {
	setTimeout(function () { alert(i); }, 1000);
}
var i;
for (i=1; i<=2; i+=1) {
	doSetTimeout(i);
}