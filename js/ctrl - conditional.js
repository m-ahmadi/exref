if (condition) {
	
}

if (condition) {
	
} else {
	
}

if (condition1) {
	
} else if (condition2) {
	
} else {
	
}

switch(expression) {
	case x:
		// code block
		break;
	case y:
		// code block
		break;
	default:
		// code block
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// switch fallthrough
var t = 1;

// Fall-through:
switch (t) {
	case 1:
		alert('One');
	case 2:
		alert('Two');
	case 3:
		alert('Three');
	default:
		alert('Not in Range.');
}

// Correct Way:
switch (t) {
	case 1:
		alert('One');
		break;
	case 2:
		alert('Two');
		break;
	case 3:
		alert('Three');
		break;
	default:
		alert('Not in Range.');
}

// `break` is not necessary in `default` clause
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@