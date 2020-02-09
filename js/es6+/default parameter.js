// es5
var link = function (height, color, url) {
	var height = height || 50;
	var color = color   || 'red';
	var url = url       || 'http://azat.co';
	
	// less hazardous:
	height = height || 50;
	color = color   || 'red';
	url = url ? url : 'http://azat.co';
}

// es6
var link = function (height = 50, color = 'red', url = 'http://azat.co') {
	
}