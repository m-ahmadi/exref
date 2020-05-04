(async function () {
	const DOCROOT = '/x/public';
	const pathname = location.pathname.replace(DOCROOT, '');
	let route = pathname === '/' ? '/home' : pathname.replace(/\/+$/, '');
	const segs = route.split('/').filter(i=>!!i);
	const page = segs[0];
	route = segs.length > 1 ? route : page+'/'+page;
	
	console.log(route);
	// const template = Handlebars.templates[route];
	let res = await fetch(`${DOCROOT}/views/${route}.hbs`);
	
	if (res.status === 200) {
		const template = Handlebars.compile(await res.text(), {knownHelpersOnly: true});
		document.title = segs.length > 1 ? segs.map(toPascalCase).join(' - ') : toPascalCase(page);
		setContent( template({DOCROOT}, {partials: Handlebars._localPartials[page]}) );
	} else {
		document.title = 'Page not found';
		setContent( Handlebars.partials['404']({DOCROOT}) );
	}
	document.head.append( parseHTML(`<link rel="stylesheet" href="${DOCROOT}/views/${page}/style.css" />`) );
	document.body.append( parseHTML(`<script src="${DOCROOT}/views/${page}/main.js"></script>`) );
	
	function setContent(html) {
		document.readyState !== 'loading' ? document.getElementById('app').innerHTML = html : setTimeout(setContent, 50, html);
	}
	
	function toPascalCase(str) {
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	}
	
	function parseHTML(str) {
		const el = document.createElement('div');
		el.innerHTML = str;
		const res = el.children;
		return res.length > 1 ? res : res[0];
	}
})();