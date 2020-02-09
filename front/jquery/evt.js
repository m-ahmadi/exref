.on(events, ?selector, ?data, handler) // events: str
.on(events, ?selector, ?data)          // events: obj
// event handlers are bound only to currently selected elements.
// they must exist on the page at the time your code makes the call to .on()
// (parent element must exists on dom ready)

$el.on('click', function (event) {
	return false === event.stopPropagation()
})
$el.on('focus focusout keyup keydown', fn)
$(document).on('keypress', fn)
$(window).on('resize', fn)

// delegated events
// handler is not called when the event occurs directly on the bound element,
// but only for descendants that match the selector.
$('#el').on('change', 'form[name="search_options"]', fn)
$('#el').on('click', 'div#search_options', fn)
$('#el').on('click', 'a.shop-nav-butt', fn)

// value of this
$el.on('evtName', function (event) {
	this === $el[0]
	event.delegateTarget === event.currentTarget
})

$el.on('evtName', 'delegateSelector', function (event) {:
	this === $el.find('delegateSelector')[0]
	this === event.delegateTarget
})

$el.addEventListener('change', e => {
	this  // undefined
})