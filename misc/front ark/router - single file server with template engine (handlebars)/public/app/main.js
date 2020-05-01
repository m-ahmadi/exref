(function () {
	let route = location.pathname.replace('/x/public', '');
	route = route === '/' ? 'home' : route.slice(1);
	
	document.title = route[0].toUpperCase() + route.slice(1).toLowerCase();
	fetch(`views/${route}.hbs`).then(async res => await res.text()).then(setContent);
	
	function setContent(str) {
		document.readyState !== 'loading'
			? document.getElementById('app').innerHTML = Handlebars.templates[route]()
			: setTimeout(setContent, 50, html);
	}
})();