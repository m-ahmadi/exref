function test() {
	console.log(a);
	console.log( foo() );

	var a = 1;
	
	function foo() {
		return 2;
	}
	
	return 'the end';
}

test();


// another example
let x = 10;

function test() {
	console.log(x);
	
	if (false) {
		var x = 5;
	}
}

test();
