var elem = document.getElementById('myCanvas');
var elemLeft = elem.offsetLeft;
var elemTop = elem.offsetTop;
var context = elem.getContext('2d');
var elements = [];

// add event listener for `click` events
elem.addEventListener('click', function (event) {
	var x = event.pageX - elemLeft,
		y = event.pageY - elemTop;

	// collision detection between clicked offset and element.
	elements.forEach(function (element) {
		if (y > element.top &&
			y < element.top + element.height &&
			x > element.left &&
			x < element.left + element.width) {
			console.log('clicked an element');
		}
	});

}, false);

// add element
elements.push({
	colour: '#05EFFF',
	width: 150,
	height: 100,
	top: 20,
	left: 15
});

// render elements
elements.forEach(function (element) {
	context.fillStyle = element.colour;
	context.fillRect(element.left, element.top, element.width, element.height);
});