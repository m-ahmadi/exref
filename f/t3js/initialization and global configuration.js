Box.Application.init();

Box.Application.init({
	apiKey: 'abcxyz123'
});

Box.Application.init({
	debug: true
});

Box.Application.on('error', function (event) {

	var exception = event.exception;

	// do something with the exception
});