$('*').contents().filter( function () { return this.nodeType == 8; } )

$('#somediv').contents().filter( function () { return this.nodeType == 8; } ) // only if a direct children is commented
$('#somediv').contents().filter( function () { return this.nodeType == 8; } )[0].nodeValue

$('#somediv').contents().filter( function () { return this.nodeType == 8; } )[0].nodeValue.trim()