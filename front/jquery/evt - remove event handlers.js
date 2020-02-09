// all handlers for all events
$('#el').off();

// all handlers for an event
$('#el').off('click')

// specific handlers (possible only with named functions) for a specific event
$('#el').off('click', fn)
$('#el').off('click', 'p', fn)
$('#el').off('click', 'a.shop-nav-butt', fn)