// include: jquery.ba-throttle-debounce.js
$('input').on( 'change', $.debounce(100, onchange) );

function onchange() {
	console.log(this.value)
}