''.replace(/(["/\b\f\n\r\t\\]+|\u[0-9a-fA-F]{4})/g, '\\$1') // !

function escapeJSON(str) {
	const escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	const subs = {
		'\b': '\\b',
		'\t': '\\t',
		'\n': '\\n',
		'\f': '\\f',
		'\r': '\\r',
		'"' : '\\"',
		'\\': '\\\\'
	};
	escapable.lastIndex = 0;
	
	let res = '';
	if ( escapable.test(str) ) {
		res = '"';
		res += str.replace(escapable, i =>
			typeof subs[i] === 'string'
				? subs[i]
				: '\\u' + ('0000' + i.charCodeAt(0).toString(16)).slice(-4)
		);
		res += '"';
	} else {
		res = '"' + str + '"';
	}
	
	return res;
};