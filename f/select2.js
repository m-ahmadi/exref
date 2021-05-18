/* includes
select2.css
select2.js */

$('select').select2({
	width: '100%',
	placeholder: 'Select an option',
	ajax: {
		url: 'path/to/some/where', // function () { return 'path/to/some/where' }
		dataType: 'json',
		delay: 250,
		data: params => {
			return {
				search: params.term || '',
				page: params.page || 1
			};
		},
		processResults: (data, params) => {
			params.page = params.page || 1;
			return {
				results: data.items,
				pagination: {
					more: params.page < data.total_page
				}
			};
		},
		cache: true
	},
	multiple: false,
	minimumInputLength: 0
});

/*
<select data-tags="true" data-allow-clear="true" ...>
	<option value="">text</option>
</select>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
$('#el').select2({
	adaptContainerCssClass:  ,
	adaptDropdownCssClass:   ,
	ajax:                    null|{},
	allowClear:              false,
	amdBase:                 './',
	amdLanguageBase:         './i18n/',
	closeOnSelect:           true,
	containerCss:            null|{},
	containerCssClass:       '',
	data:                    null | [{}, {}, ...],
	dataAdapter:             'SelectAdapter',
	debug:                   false,
	dir:                     ,
	disabled:                false,
	dropdownAdapter:         'DropdownAdapter',
	dropdownAutoWidth:       false,
	dropdownCss:             null|{},
	dropdownCssClass:        '',
	dropdownParent:          selector|HTMLElement,
	escapeMarkup:            Utils.escapeMarkup|()=>,
	initSelection:           ()=>,
	language:                'EnglishTranslation',
	matcher:                 ()=>,
	maximumInputLength:      0,
	maximumSelectionLength:  0,
	minimumInputLength:      0,
	minimumResultsForSearch: 0,
	multiple:                false,
	placeholder:             null|''|{},
	query:                   ()=>, // deprecated
	resultsAdapter:          'ResultsAdapter',
	selectionAdapter:        'SingleSelection'|'MultipleSelection',
	selectOnClose:           false,
	sorter:                  ()=>,
	tags:                    false,
	templateResult:          ()=>,
	templateSelection:       ()=>,
	theme:                   'default',
	tokenizer:               ()=>,
	tokenSeparators:         [],
	width:                   'resolve',
	scrollAfterSelect:       false,
});
// methods
var $el = $('#el').select2();
var $elMulti = $('#el').select2();

$el.data('select2')
$el.select2('open')
$el.select2('close')
$el.select2('destroy')

$el.select2('data')   // retrie selection
$el.find(':selected') // ...
$el.hasClass('select2-hidden-accessible') // is initialized?

$el.val('CA').trigger('change')
$elMulti.val(['CA', 'AL']).trigger('change')
$elMulti.val(null).trigger('change')

// ?
$el.select2('close', a,b,c);
close()
data()
destroy()
focus(data)
hasFocus()
isOpen()
open()
render()
toggleDropdown()
trigger(name, args)
enable(args) // deprecated 
val(args)    // deprecated 


// events
$('#el').on('select2:select', function (e) {
	e.params.data;
})
'change'
'change.select2'
'select2:closing'
'select2:close'
'select2:opening'
'select2:open'
'select2:selecting'
'select2:select'
'select2:unselecting'
'select2:unselect'
'select2:clearing'
'select2:clear'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
