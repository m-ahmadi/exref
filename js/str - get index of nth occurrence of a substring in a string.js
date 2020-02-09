'salam, olaghe, aziz'.split(',', 2).join(',').length // 13

function nthIndexOf(str, substr, index) {
	return str.split(substr, index).join(substr).length;
}