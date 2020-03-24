// func.apply(valueForThis, arrayOfArgs);
// func.call(valueForThis, arg1, arg2, arg3);

var a = [2, 9, 6],
	x = 7,
	y = 4,
	z = 1;

function t(a, b, c) {

	console.log(a, b, c);
	
	console.log(this);
	
}

t.call(undefined, x, y, z);
t.apply(undefined, a);



