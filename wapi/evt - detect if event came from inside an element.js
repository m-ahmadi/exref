document.addEventListener('click', function (e) {
	if( e.target.closest('ul') ) {
		console.log('coming from inside')
	} else {
		console.log('coming from outside')
	}
})

// bad
document.body.addEventListener('click', function () {
	console.log('coming from outside')
})
document.querySelector('ul').addEventListener('click', function (e) {
	e.stopPropagation()
})

// example: hiding the menu when clicking outside it
$('body').on('click', function (e) { 
	if( !$(e.target).closest('ul').length ) {
		var el = $('#menu');
		if( el.is(':visible') ) el.hide();
	}
})