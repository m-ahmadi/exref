$.ajaxSetup({
	accepts:             null,   // PlainObject (default: depends on DataType)
	async:               true,   // Boolean (default: true) ('async: false' deprecated as of jQuery 1.8)
	beforeSend:          null,   // Function ( jqXHR jqXHR, PlainObject settings )
	cache:               null,   // Boolean (default: true, false for dataType 'script' and 'jsonp')
	complete:            null,   // Function ( jqXHR jqXHR, String textStatus )
	contents:            null,   // PlainObject
	contentType:         null,   // String (default: 'application/x-www-form-urlencoded; charset=UTF-8')
	context:             null,   // PlainObject
	converters:          null,   // PlainObject (default: {'* text': window.String, 'text html': true, 'text json': jQuery.parseJSON, 'text xml': jQuery.parseXML})
	crossDomain:         null,   // Boolean (default: false for same-domain requests, true for cross-domain requests)
	data:                null,   // PlainObject or String
	dataFilter:          null,   // Function ( String data, String type )
	dataType:            'text', // String (default: Intelligent Guess (xml, json, script, or html))
	error:               null,   // Function ( jqXHR jqXHR, String textStatus, String errorThrown )
	global:              true,   // Boolean (default: true)
	headers:             {},     // PlainObject (default: {})
	ifModified:          null,   // Boolean (default: false)
	isLocal:             null,   // Boolean (default: depends on current location protocol)
	jsonp:               null,   // String { jsonp: false, jsonpCallback: 'callbackName' }
	jsonpCallback:       null,   // String or Function
	mimeType:            null,   // String
	password:            null,   // String
	processData:         null,   // Boolean (default: true)
	scriptCharset:       null,   // String
	statusCode:          null,   // PlainObject (default: {})
	success:             null,   // Function ( PlainObject data, String textStatus, jqXHR jqXHR )
	timeout:             null,   // Number
	traditional:         false,  // Boolean
	type:                null,   // String (default: 'GET')
	url:                 null,   // String  (default: The current page)
	username:            null,   // String
	xhr:                 null,   // Function (default: ActiveXObject when available (IE), the XMLHttpRequest otherwise)
	xhrFields:           null,   // PlainObject
});