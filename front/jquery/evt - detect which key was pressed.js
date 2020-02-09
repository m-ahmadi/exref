$('#something').on( 'keypress', function () {
	if (e.which === 13) {
		// enter was pressed
	}
});
$('#something').on( 'keydown', function (e) {
	// arrow keys are only triggered by keydown, not keypress
	e.which === 37 // left
	e.which === 38 // up
	e.which === 39 // right
	e.which === 40 // down
});
$('#something').on( 'click', function (e) {
	// mouse buttons
	e.which === 1 // left
	e.which === 2 // middle
	e.which === 3 // right
});