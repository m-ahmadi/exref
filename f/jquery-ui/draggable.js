$('#draggable').draggable();

$('#draggable').draggable({
	scroll: true,
	scrollSensitivity: 100,
	scrollSpeed: 100,
	axis: 'x'|'y',
	containment: '#containment-wrapper',
	cursor: 'move'|'crosshair'|...,
	cursorAt: { top: 56, left: 56, bottom: 0 },
	handle: 'p',
	cancel: 'p.ui-widget-header',
	stack: '#set div',
	helper: 'original'|'clone'| e => $("<div class='ui-widget-header'>I'm a custom helper</div>")
	opacity: 0.7,
	revert: true,
	snap: '.ui-widget-header',
	snapMode: 'outer',
	grid: [ 20, 20 ]
});

// draggable with sortable
$('#sortable').sortable({
	revert: true
});
$('#draggable').draggable({
	connectToSortable: '#sortable',
	helper: 'clone',
	revert: 'invalid'
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
$('#draggable').draggable({
	//                 default|opt|opt|...
	addClasses:        true,
	appendTo:          this.helper !== 'original' ? 'parent' : undefined,
	axis:              false|'x'|'y',
	cancel:            'input,textarea,button,select,option'|'selector',
	classes: {
		'ui-draggable':          '',
		'ui-draggable-disabled': '',
		'ui-draggable-dragging': '',
		'ui-draggable-handle':   '',
	},
	connectToSortable: false|'selector',
	containment:       false | 'selector' | $el | ('parent'|'document'|'window') | [x1,y1,x2,y2],
	cursor:            'auto'|'move'|'crosshair'|...,
	cursorAt:          false | { top: 56, left: 56, bottom: 0 },
	disabled:          false,
	grid:              false | [x, y], // [20,80]
	handle:            false|'selector'|$el,
	helper:            'original' | 'clone' | e => HTMLElement
	iframeFix:         false|'selector'
	opacity:           false|0.7,
	refreshPositions:  false,
	revert:            false|'invalid'|'valid'|()=>boolean,
	revertDuration:    500,
	scope:             'default',
	scroll:            true,
	scrollSensitivity: 20,
	scrollSpeed:       20,
	snap:              false|'selector',
	snapMode:          this.snap ? 'both'|'inner'|'outer' : undefined,
	snapTolerance:     20,
	stack:             false|'selector',
	zIndex:            false,
	delay:             0, // 1.12 deprecated
	distance:          1, // 1.12 deprecated
	create: function (event, ui) {}, ... // events
});

// methods
$('#el').draggable('destroy')
$('#el').draggable('disable')
$('#el').draggable('enable')
$('#el').draggable('instance')
$('#el').draggable('option')
$('#el').draggable('widget')
$('#el').draggable('option', 'disabled', true)
$('#el').draggable('option', {disabled: true})
var options    = $('.selector').draggable('option')
var isDisabled = $('.selector').draggable('option', 'disabled')
var widget     = $('.selector').draggable('widget')

// events
$('#el').droppable({
	create: function (event, ui) {},
	drag:   ...
	start:  ...
	stop:   ...
})
$('#el').on('dragcreate', function (event, ui) {} )
'dragcreate'
'drag'
'dragstart'
'dragstop'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@