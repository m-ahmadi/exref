window.addEventListener('beforeunload', function () {
	return null|undefined // prompts the user

	// alert(), confirm(), prompt() methods may be ignored during this event
	// debugger; won't work during this event
})

// almost cross-browser:
window.addEventListener('beforeunload', function (e) {
	// e.returnValue = '\o/'    is equivalent to:    e.preventDefault()
	var msg = '\o/';
	
	// (e || window.event).returnValue = msg;	
	e.returnValue = msg; // gecko, trident, chrome 34+
	return msg;          // gecko, webkit, chrome <34
});

window.addEventListener('unload', fn) // deprecated