function ali(...asad) {
	console.log(asad);
}
ali(1,2,3,4,5) // [1, 2, 3, 4, 5]
//---------------------------------------------------------------------
function ali(ahmad, gholi, ...asad) {
	console.log(asad);
}
ali(1,2,3,4,5) // [3, 4, 5] 
//---------------------------------------------------------------------
function f(x, y, ...a) {
	return (x + y) * a.length
}
f(1, 2, 'hello', true, 7) // 9
// es5:
function f(x, y) {
	var a = Array.prototype.slice.call(arguments, 2);
	return (x + y) * a.length;
};
f(1, 2, 'hello', true, 7) // 9
//---------------------------------------------------------------------