// using on
$('#el').on('mousewheel', function(event) {
	console.log(event.deltaX, event.deltaY, event.deltaFactor);
});

// using the event helper
$('#el').mousewheel(function(event) {
	console.log(event.deltaX, event.deltaY, event.deltaFactor);
});