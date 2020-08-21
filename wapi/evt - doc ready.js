document.addEventListener('DOMContentLoaded', function () {
	// when dom is ready.
});
// or
window.addEventListener('DOMContentLoaded', function () {});

window.addEventListener('load', function () {
	// when entire page is ready. (dom, images, iframes, ...?)
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
	document.addEventListener('DOMContentLoaded', fn);
}