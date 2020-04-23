(function () {
	const { pathname } = location;
	const path = pathname ===  '/' ? '/home' : pathname;
	let rdy;

	fetch('static'+path+'.htm').then(async res => await res.text()).then(setContent);

	document.addEventListener('DOMContentLoaded', () => rdy = true);

	function setContent(html) {
		rdy ? document.getElementById('content').innerHTML = html : setTimeout(setContent, 50, html);
	}
})();