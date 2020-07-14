function __temps(name='') {
	const res = {};
	Object.keys(_templates)
		.filter( i => new RegExp(name).test(i) )
		.forEach( i => res[i.replace(name+'/', '')] = _templates[i] );
	return res;
}

function __els(root=document, obj, overwrite=false) {
	if (typeof root === 'string') root = document.querySelector(root); // $(root)
	if (!root) return;
	const res = {};
	const el = root.querySelectorAll('[ref]');   // $('[ref]', root)
	const els = root.querySelectorAll('[refs]'); // $ ('[refs]', root)
	[...el].forEach(i => res[ i.attributes.ref.value ] = i);   // $(i)
	[...els].forEach(i => {
		i.attributes.refs.value.split(' ').forEach(k => {
			if (!res[k]) res[k] = []; // $()
			res[k].push(i); // res[k] = res[k].add(i);
		});
	});
	res.root = root;
	if (obj) {
		Object.keys(res).forEach(k => {
			if (!obj[k] || overwrite) obj[k] = res[k];
		});
	} else {
		return res;
	}
}

// old
function __els(root, obj, overwrite=false) {
	if (!root) return;
	const res = {};
	let el, els;
	if (typeof root === 'string') {
		res.root = $(root);
		el = $(root+' [data-el]');
		els = $(root+' [data-els]');
	} else if (root instanceof jQuery) {
		res.root = root;
		el = root.find('[data-el]');
		els = root.find('[data-els]');
	}
	el.each(function (i, domEl) {
		const $el = $(domEl);
		res[ $el.data('el') ] = $el;
	});
	els.each(function (i, domEl) {
		const $el = $(domEl);
		$el.data('els').split(' ').forEach(k => {
			if (!res[k]) res[k] = $();
			res[k] = res[k].add($el);
		});
	});
	if (obj) {
		Object.keys(res).forEach(k => {
			if (!obj[k] || overwrite) obj[k] = res[k];
		});
	} else {
		return res;
	}
}