(function () {
	let route = location.pathname.replace('/put_folder_name_here', '');
	route = route === '/' ? 'home' : route.slice(1);
	
	document.title = route[0].toUpperCase() + route.slice(1).toLowerCase();
	setContent( Handlebars.templates[route]() );
	
	function setContent(html) {
		document.readyState !== 'loading' ? document.getElementById('app').innerHTML = html : setTimeout(setContent, 50, html);
	}
})();