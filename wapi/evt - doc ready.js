document.addEventListener('DOMContentLoaded', function () {
	// when dom is ready.
});
// or
document.addEventListener('DOMContentLoaded', function () {});

window.addEventListener('load', function () {
	// when entire page is ready. (dom, images, iframes, ...?)
});

document.addEventListener('readystatechange', function () {
	// when
	document.readyState // changes from
	'loading'           // to
	'interactive'       // to
	'complete'
});

document.readyState = 'loading | interactive | complete'
/* .mjs vs .js `readyState` in different places
<head>
	<script></script>                loading
	<script type="module"></script>  interactive
</head>
<body>
	<script></script>                loading
	<script type="module"></script>  interactive
	
	
	<script></script>                loading
	<script type="module"></script>  interactive
</body>

note: `readyState` always `loading` no matter where <script> tag is placed
*/

// very useful
if (document.readyState !== 'loading') { // or === 'complete'
	fn();
} else {
	document.addEventListener('readystatechange', fn);
	// or
	document.addEventListener('DOMContentLoaded', fn);
	// or
	window.addEventListener('load', fn);
}

// doc visibility
document.visibilityState: 'visible|hidden'
document.hidden:          boolean

document.addEventListener('visibilitychange', function() {
	if (document.visibilityState === 'visible') {
		backgroundMusic.play();
	} else {
		backgroundMusic.pause();
	}
});