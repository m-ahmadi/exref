function noJq() {
	return typeof jQuery === 'undefined'  &&  typeof $ === 'undefined';
}

function getCommentsInside(selector) {
	return $(selector).contents().filter( function () { return this.nodeType === 8; } );
}

function getFirstCommentInside(selector) {
	return getCommentsInside(selector)[0].nodeValue.trim();
}

function isValidSelector(selector) {
	var el;
	if ( typeof selector !== 'string' ) return false;
	try {
		el = $(selector);
	} catch (err) {
		return false;
	}
	return true;
}

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