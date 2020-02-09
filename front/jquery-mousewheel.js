// using on
$('#my_elem').on('mousewheel', function(event) {
	console.log(event.deltaX, event.deltaY, event.deltaFactor);
});

// using the event helper
$('#my_elem').mousewheel(function(event) {
	console.log(event.deltaX, event.deltaY, event.deltaFactor);
});