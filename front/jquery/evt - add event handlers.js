// one handler for multiple events:
$('#el').on('click mouseover keydown', fn);

// multiple handlers for one event 
$('#content').on('click', fn1)
$('#content').on('click', fn2) // you cannot 'extend' the already defined handler

// multiple events with different handlers
$('#el').on({
	'mouseenter': fn,
	'click': anotherFn
});

// bind to window events
$(window).on('popstate', function () {})
$(window).on('storage', function () {})