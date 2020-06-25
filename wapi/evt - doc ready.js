document.addEventListener('DOMContentLoaded', function () {
	// when dom is ready.
});
// or
window.addEventListener('DOMContentLoaded', function () {});

window.addEventListener('load', function () {
	// when entire page is ready. (dom, images, iframes, ...?)
});

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
*/

// alt (kinda useless cuz `readyState` is always `loading` no matter where .js script tag is placed)
if (document.readyState !== 'loading') {
	fn();
} else {
	document.addEventListener('DOMContentLoaded', fn);
}