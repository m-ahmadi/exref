$('#el').sortable()
$('#el').disableSelection() // deprecated?
$('#el').sortable('disable')
	
$('#el').sortable({
	items: '> div.panel',
	handle: '.uk-sortable-handle',
	delay: 50,
	opacity: 0.5,
	distance: 5,
	revert: 300, // true
	scroll: false,
	tolerance: 'pointer',
	placeholder: 'ui-state-highlight',
	stop: function (e, ui) {},
	update: function (e, ui) {}
});

$('#el').on('sortstop', function (e, ui) {});
$('#el').on('sortupdate', function (e, ui) {});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// replicating uikit/tests/sortable
$('.first').sortable();
$('.second').sortable({connectWith: '.second'});
$('.third').sortable({connectWith: '.third'});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
$('#el').sortable({
	appendTo:            'parent' | $el | el | 'selector',
	axis:                 false|'x'|'y',
	cancel:               'input,textarea,button,select,option'|'selector',
	classes: {
		'ui-sortable':             '',
		'ui-sortable-handle':      '',
		'ui-sortable-placeholder': '',
		'ui-sortable-helper':      '',
	},
	connectWith:          false|'selector',
	containment:          false|el|'selector'|'parent'|'document'|'window',
	cursor:               'auto'|'move'|...,
	cursorAt:             false| {left:0, ...},
	delay:                0,
	disabled:             false,
	distance:             1,
	dropOnEmpty:          true,
	forceHelperSize:      false,
	forcePlaceholderSize: false,
	grid:                 false | [x=0, y=0],
	handle:               false|'selector'|el,
	helper:               'original'|'clone'| e => DOMElement,
	items:                '> *'|'selector',
	opacity:              false|0,
	placeholder:          false|'css class',
	revert:               false|0,
	scroll:               true,
	scrollSensitivity:    20,
	scrollSpeed:          20,
	tolerance:            'intersect'|'pointer',
	zIndex:               1000|int,
	activate: function (event, ui) {}, ... // events
})

// methods
$('#el').sortable('cancel')
$('#el').sortable('destroy')
$('#el').sortable('disable')
$('#el').sortable('enable')
$('#el').sortable('instance')
$('#el').sortable('refresh')
$('#el').sortable('refreshPositions')
$('#el').sortable('option', 'disabled', true)
$('#el').sortable('option', {disabled: true})
var options    = $('#el').sortable('option')
var isDisabled = $('#el').sortable('option', 'disabled')
var sorted     = $('#el').sortable('serialize', {key: 'sort'})
var sortedIDs  = $('#el').sortable('toArray')
var widget     = $('#el').sortable('widget')

// events
$('#el').sortable({
	activate:   function (event, ui) {},
	beforeStop: ...
	change:     ...
	create:     ...
	deactivate: ...
	out:        ...
	over:       ...
	receive:    ...
	remove:     ...
	sort:       ... // dragging
	start:      ...
	stop:       ...
	update:     ...
})
$('#el').on('sortactivate', function (event, ui) {} );
'sortactivate'
'sortbeforestop'
'sortchange'
'sortcreate'
'sortdeactivate'
'sortout'
'sortover'
'sortreceive'
'sortremove'
'sort'
'sortstart'
'sortstop'
'sortupdate'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@