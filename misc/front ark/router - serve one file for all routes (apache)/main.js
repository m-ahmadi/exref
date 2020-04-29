(async function () {
	const route = location.pathname.replace('/put_folder_name_here', '').slice(1);
	
	if (route) {
		document.title = route[0].toUpperCase() + route.slice(1);
		const filePath = `_${route}.htm`;
		
		// cache
		let file = sessionStorage[filePath];
		if (!file) {
			file = await (await fetch(filePath)).text();
			sessionStorage[filePath] = file;
		}
		setContent(file);
		
		// no cache
		// const file = await (await fetch(filePath)).text();
		// setContent(file);
	}
	
	function setContent(html) {
		document.readyState !== 'loading' ? document.getElementById('content').innerHTML = html : setTimeout(setContent, 50, html);
	}
})();