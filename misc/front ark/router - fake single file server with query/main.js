(function () {
	const { search } = location;

	if (search) {
		const name = search.slice(1);
		document.title = name[0].toUpperCase() + name.slice(1);
		fetch(`_${name}.htm`).then(async res => await res.text()).then(setContent);
	}

	function setContent(html) {
		document.readyState !== 'loading' ? document.getElementById('content').innerHTML = html : setTimeout(setContent, 50, html);
	}
})();