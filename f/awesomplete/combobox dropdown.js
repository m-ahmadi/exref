const el = document.getElementById('myinput');

const comboplete = new Awesomplete(el, {
	minChars: 0,
});

el.addEventListener('click', function () {
	if (comboplete.ul.childNodes.length === 0) {
		comboplete.minChars = 0;
		comboplete.evaluate();
	} else if (comboplete.ul.hasAttribute('hidden')) {
		comboplete.open();
	} else {
		comboplete.close();
	}
});