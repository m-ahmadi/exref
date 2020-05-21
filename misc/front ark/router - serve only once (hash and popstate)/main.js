window.addEventListener('popstate', async function (e) {
	const route = location.hash.slice(1);
	
	if (route) {
		const filePath = `_${route}.htm`;
		document.title = route[0].toUpperCase() + route.slice(1).toLowerCase();
		
		// simple:
		// const file = await (await fetch(filePath)).text();
		// setContent(file);
		
		// with cache:
		let file = sessionStorage[filePath];
		if (!file) {
			file = await (await fetch(filePath)).text();
			sessionStorage[filePath] = file;
		}
		setContent(file);
	}
});

window.dispatchEvent(new Event('popstate'));

function setContent(html) {
	document.readyState !== 'loading' ? document.getElementById('container').innerHTML = html : setTimeout(setContent, 50, html);
}