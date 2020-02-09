$('body').on('click', 2, function (e) {
	alert(e.data);
});

$('body').on('click', { foo: 'bar' }, function (e) {
	console.log(e);
});

// the data parameter can't be a string, otherwise jquery thinks it's a selector for delegated events.
.on(events, ?selector, ?data, handler)
.on(events, ?selector, ?data)
$('body').on( 'click', 'salam', e => alert(e.data) );