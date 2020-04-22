const container = document.getElementById('container');

window.addEventListener('popstate', async function (e) {
	const { hash } = location;
	
	if (hash) {
		const name = hash.slice(2);
		const path = `_${name}.htm`;
		document.title = name[0].toUpperCase() + name.slice(1);
		
		// container.innerHTML = await (await fetch(path)).text();
		
		let file = sessionStorage[path];
		if (!file) {
			file = await (await fetch(path)).text();
			sessionStorage[path] = file;
		}
		container.innerHTML = file;
	}
});