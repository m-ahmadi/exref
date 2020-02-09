var elem = document.getElementById('myCanvas'),
	elemLeft = elem.offsetLeft,
	elemTop = elem.offsetTop,
	context = elem.getContext('2d'),
	elements = [];

// Add event listener for `click` events.
elem.addEventListener('click', function (event) {
	var x = event.pageX - elemLeft,
		y = event.pageY - elemTop;

	// Collision detection between clicked offset and element.
	elements.forEach(function (element) {
		if (y > element.top &&
			y < element.top + element.height &&
			x > element.left &&
			x < element.left + element.width) {
			console.log('clicked an element');
		}
	});

}, false);

// Add element.
elements.push({
	colour: '#05EFFF',
	width: 150,
	height: 100,
	top: 20,
	left: 15
});

// Render elements.
elements.forEach(function (element) {
	context.fillStyle = element.colour;
	context.fillRect(element.left, element.top, element.width, element.height);
});