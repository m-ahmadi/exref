// includes:
// multiselect.css
// jquery.multi-select.js

$('#my-select').multiSelect({
	afterInit: function (container) {},	  // called after the multiSelect initilization.
	afterSelect: function (values) {},    // called after one item is selected.
	afterDeselect: function (values) {},  // called after one item is deselected.
	selectableHeader: null,               // text/html to display in selectable header.
	selectionHeader: null,	              // text/html to display in selection header.
	selectableFooter: null,	              // text/html to display in selectable footer.
	selectionFooter: null,	              // text/html to display in selection footer.
	disabledClass: 'disabled',            // css class for disabled items.
	selectableOptgroup: false,            // true: click on optgroup selects all nested options.
	keepOrder: false,                     // selected items are displayed in same order that were selected.
	dblClick: false,	                    // replace default click event to select items with dblclick.
	cssClass: ''                          // add custom css class to multiselect container.
})

$('#my-select').multiSelect({})
$('#my-select').multiSelect('select', String|Array)
$('#my-select').multiSelect('deselect', String|Array) // 'el_1' | ['el_1', 'el_42']
$('#my-select').multiSelect('select_all')
$('#my-select').multiSelect('deselect_all')
$('#my-select').multiSelect('refresh')
$('#my-select').multiSelect('addOption', {
	value: 'test',           // required
	text: 'test',            // required
	index: 0,                // optional. where to insert. (last if not specified)
	nested: 'optgroup_label' // optional. under which optgroup. (if there is any)
})

/*
<select id="my-select" multiple="multiple" name="my-select[]">
	<option value='elem_1' selected>elem 1</option>
	<option value='elem_2'>elem 2</option>
	<option value='elem_3'>elem 3</option>
	<option value='elem_4'>elem 4</option>
	<option value='elem_100'>elem 100</option>
	<optgroup label='Friends'>
    <option value='1'>Yoda</option>
    <option value='2' selected>Obiwan</option>
  </optgroup>
</select>
*/