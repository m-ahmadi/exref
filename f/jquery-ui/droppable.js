$('#el').droppable();
$('#el').droppable({
	accept: '.draggable',
	greedy: true,
});

// ref
$('#el').droppable({
	accept:      '*'|'selector'|el=>boolean,
	addClasses:  true,
	classes: {
		'ui-droppable':        '',
		'ui-droppable-active': '',
		'ui-droppable-hover':  ''
	},
	disabled:    false,
	greedy:      false,
	scope:       'default'|string,
	tolerance:   'intersect'|'fit'|'pointer'|'touch',
	activeClass: false|'css class', // 1.12 deprecated
	hoverClass:  false|'css class', // 1.12 deprecated
	activate: function (event, ui) {}, ... // events
});

// methods
$('#el').droppable('destroy')
$('#el').droppable('disable')
$('#el').droppable('enable')
$('#el').droppable('instance')
$('#el').droppable('option', 'disabled', true)
$('#el').droppable('option', {disabled: true})
var options    = $('#el').droppable('option')
var isDisabled = $('#el').droppable('option', 'disabled')
var widget     = $('#el').droppable('widget')

// events
$('#el').droppable({
	activate:   function (event, ui) {},
	create:     ...
	deactivate: ...
	drop:       ...
	out:        ...
	over:       ...
})
$('#el').on('dropactivate', function (event, ui) {} )
'dropactivate'
'dropcreate'
'dropdeactivate'
'drop'
'dropout'
'dropover'