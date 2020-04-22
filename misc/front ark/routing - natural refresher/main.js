const { search } = location;

if (search) {
	(async function () {
		const container = document.querySelector('#content');
		const name = search.slice(1);
		const path = `_${name}.htm`;
		document.title = name[0].toUpperCase() + name.slice(1);
		
		container.innerHTML = await (await fetch(path)).text();
	})();
}