const req = new XMLHttpRequest();
req.open('GET', './_nav.html', false);
req.send(null);
const nav = req.responseText;

document.addEventListener('DOMContentLoaded', function () {
	const oldBody = document.body.innerHTML;
	document.body.innerHTML = nav + oldBody;
});