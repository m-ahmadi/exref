(function () {
	const { search } = location;
	let rdy;

	if (search) {
		const name = search.slice(1);
		document.title = name[0].toUpperCase() + name.slice(1);
		document.addEventListener('DOMContentLoaded', () => rdy = true);
		fetch(`_${name}.htm`).then(async res => await res.text()).then(setContent);
	}

	function setContent(html) {
		rdy ? document.getElementById('content').innerHTML = html : setTimeout(setContent, 50, html);
	}
})();