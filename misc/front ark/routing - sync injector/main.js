const req = new XMLHttpRequest();
req.open('GET', './_nav.html', false);
req.send(null);
const nav = req.responseText;

document.addEventListener('DOMContentLoaded', function () {
	const oldBody = document.body.innerHTML;
	document.body.innerHTML = nav + oldBody;
});


/* or async:
let rdy;
fetch('./_nav.html').then(async res => await res.text()).then(setContent);
document.addEventListener('DOMContentLoaded', () => rdy = true);
function setContent(html) {
	rdy ? document.body.innerHTML = html + document.body.innerHTML : setTimeout(setContent, 50, html);
}
*/