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