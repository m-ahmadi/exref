/* includes:
chosen.css
chosen.jquery.js

chosen-sprite.png
chosen-sprite@2x.png */

$('#el').chosen({
	disable_search_threshold: 10,
	no_results_text: 'Oops, nothing found!',
	max_selected_options: 5,
	rtl: true,
	allow_single_deselect: true,
	width: '95%',
});
// <select id="foo"></select>
// <select data-placeholder="Choose a country..." multiple class="chosen-select">
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
$('#el').chosen({
	allow_single_deselect:           false,
	disable_search:                  false,
	disable_search_threshold:        0,
	enable_split_word_search:        true,
	inherit_select_classes:          false,
	max_selected_options:            Infinity,
	no_results_text:                 'No results match',
	placeholder_text_multiple:       'Select Some Options',
	placeholder_text_single:         'Select an Option',
	search_contains:                 false,
	group_search:                    true,
	single_backstroke_delete:        true,
	width:                           'initial',
	display_disabled_options:        true,
	display_selected_options:        true,
	include_group_label_in_selected: false,
	max_shown_results:               Infinity,
	case_sensitive_search:           false,
	hide_results_on_select:          true,
	rtl:                             false,
});
/* attrs
<select data-placeholder="" multiple>
	<option selected|disabled></option>
</select>
*/
// methods
$('#el').chosen('destroy')

// events
$('#el').on('change', function (e, params) {})
'change'
'chosen:ready'
'chosen:maxselected'
'chosen:showing_dropdown'
'chosen:hiding_dropdown'
'chosen:no_results'

// triggerable
'chosen:updated'
'chosen:activate'
'chosen:open'
'chosen:close'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@