$('#el').resizable();

// ref
$('#el').resizable({
	alsoResize:      false|'selector'|$el|HTMLElement,
	animate:         false,
	animateDuration: 'slow'|'fast'|string|number, // number milliseconds
	animateEasing:   'swing'|'linear'|...,
	aspectRatio:     false|number,
	autoHide:        false,
	cancel:          'input,textarea,button,select,option'|'selector',
	classes: {
		'ui-resizable':             '',
		'ui-resizable-resizing':    '',
		'ui-resizable-autohide':    '', // if this.autoHide
		'ui-resizable-handle':      '', // one from this.handles
		'ui-resizable-{direction}': '',
		'ui-resizable-ghost':       '', // if this.ghost
		'ui-resizable-helper':      ''  // if this.animate && !this.helper
	},
	containment:     false|'selector'|HTMLElement|'parent'|'document',
	disabled:        false,
	ghost:           false,
	grid:            false | [x=0, y=0],
	handles:         'e, s, se', | 'n, e, s, w, ne, se, sw, nw, all' | { n:'selector'|HTMLElement|$el, e, s, w, ne, se, sw, nw }
	helper:          false|'css class',
	maxHeight:       null|number,
	maxWidth:        null|number,
	minHeight:       10|number,
	minWidth:        10|number,
	delay:           0, // 1.12 deprecated
	distance:        1, // 1.12 deprecated
	create: function (event, ui) {}, ... // events
});

// methods
$('#el').resizable('destroy')
$('#el').resizable('disable')
$('#el').resizable('enable')
$('#el').resizable('instance')
$('#el').resizable('option', 'disabled', true)
$('#el').resizable('option', {disabled: true})
var options    = $('#el').resizable('option')
var isDisabled = $('#el').resizable('option', 'disabled')
var widget     = $('#el').resizable('widget')

// events
$('#el').resizable({
	create: function (event, ui) {},
	resize: ...
	start:  ...
	stop:   ...
})
$('#el').on('resizecreate', function (event, ui) {} )
'resizecreate'
'resize'
'resizestart'
'resizestop'