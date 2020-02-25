// include: jquery.debounce-1.0.5.js
$('input').on( 'change', $.debounce(onchange, 100) );

function onchange() {
	console.log(this.value)
}