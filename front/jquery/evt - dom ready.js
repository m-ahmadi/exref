// different syntaxes:
$(handler)                       // recommended. only use this
$(document).ready(handler)       // still works but deprecated
$(document).on('ready', handler) // deprecated in v1.8. removed in v3
$('document').ready(handler)     // works but deprecated (note that 'document' selects nothing)
$('img').ready(handler)          // still works but deprecated (incorrectly implies that it waits for images to become ready)
$().ready(handler)               // still works but deprecated

// ready vs load
$(handler)                       // runs when dom is ready.
$(window).load(handler)          // runs when entire page is ready. (dom/images/iframes)

// handler is not executed if dom becomes ready before event is attached.

// multiple document.ready (bad readability)
$(document).ready(function () { alert('salam') })
$(document).ready(function () { alert('olagh') })
// equal to:
$(document).ready(function () {
	alert('salam');
	alert('olagh');
})