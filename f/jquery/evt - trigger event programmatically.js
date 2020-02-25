$('#foo').trigger('click');             // faster, one less fn call
$('#foo').click();                      // (if no fn passed)
$('#foo').trigger('click', ['a', 'b']); // pass data to handlers
// trigger enter key:
$('#foo').trigger( jQuery.Event('keydown', {which: 13, keyCode: 13}) );