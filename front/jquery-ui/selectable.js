$('#el').selectable();

// ref
$('#el').selectable({
	appendTo:    'body'|'selector',
	autoRefresh: true,
	cancel:      'input,textarea,button,select,option'|'selector',
	classes: {
		'ui-selectable':        '',
		'ui-selectee'           '',
		'ui-selecting'          '',
		'ui-selected'           '',
		'ui-unselecting':       '',
		'ui-selectable-helper': ''
	},
	disabled:    false,
	filter:      '*'|'selector',
	tolerance:   'touch'|'fit',
	delay:       0|int,    // 1.12 deprecated
	distance:    0|number, // 1.12 deprecated
	create: function (event, ui) {}, ... // events
});

// methods
$('#el').selectable('destroy')
$('#el').selectable('disable')
$('#el').selectable('enable')
$('#el').selectable('instance')
$('#el').selectable('option')
$('#el').selectable('refresh')
$('#el').selectable('option', 'disabled', true)
$('#el').selectable('option', {disabled: true})
var options    = $('#el').selectable('option')
var isDisabled = $('#el').selectable('option', 'disabled')
var widget     = $('#el').selectable('widget')

// events
$('#el').selectable({
	create:      function (event, ui) {},
	selected:    ...
	selecting:   ...
	start:       ...
	stop:        ...
	unselected:  ...
	unselecting: ...
})
$('#el').on('selectablecreate', function (event, ui) {} )
'selectableselected'
'selectableselecting'
'selectablestart'
'selectablestop'
'selectableunselected'
'selectableunselecting'