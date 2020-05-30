function __temps(name='') {
	const res = {};
	Object.keys(_templates)
		.filter( i => new RegExp(name).test(i) )
		.forEach( i => res[i.replace(name+'/', '')] = _templates[i] );
	return res;
}

function __els(root=document, obj, overwrite=false) {
	if (typeof root === 'string') root = document.querySelector(root);
	if (!root) return;
	const res = {};
	const el = root.querySelectorAll('[data-el]');
	const els = root.querySelectorAll('[data-els]');
	[...el].forEach(i => res[ i.dataset.el ] = i);
	[...els].forEach(i => {
		i.dataset.els.split(' ').forEach(k => {
			if (!res[k]) res[k] = [];
			res[k].push(i);
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