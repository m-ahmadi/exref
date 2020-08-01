window.addEventListener('keyup', e => {
	console.log( e.key, e.code ); // Control ControlLeft
});

// ctrl + enter
window.addEventListener('keyup', e => {
	if (e.ctrlKey && e.key === 'Enter') {
		alert();
	}
});