/*
attach a click event to the document body which closes the window.
attach a separate click event to the window which stops propagation to the document body.
warning: read dangers of stopping propagation: https://css-tricks.com/dangers-stopping-event-propagation/
*/

$('html').click(function () {

});
$('#menucontainer').click(function (event) {
	event.stopPropagation();
});

// you can hook up to the click event of document and then make sure #menucontainer is not an ancestor of the clicked element (jQuery.closest()).
// if it is not, then the clicked element is outside of the #menucontainer and you can safely hide it.
$(document).click(function (event) { 
	if(!$(event.target).closest('#menucontainer').length) {
		if($('#menucontainer').is(':visible')) {
			$('#menucontainer').hide()
		}
	}        
})

// if click was outside of an  element:	hide that element
// if click was inside  of the element:	do nothing
$('body').on('click', function (e) {
	var el = $('.monthpicker');
	if( !$(e.target).closest('.monthpicker').length ) {
		if( el.is(':visible') ) { // :visible == !display:none
			el.removeClass('visible opacity-full');
			el.addClass('opacity-none hidden');
		}
	}
});