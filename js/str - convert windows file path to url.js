function pathReplaceAll(str, find, replace) {
	return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
}
function filePathToUrl(path) {
	var result;
	result = pathReplaceAll(path, '\\', '/');
	result = pathReplaceAll(path, ' ', '%20');
	const drive = /(.)\:\//
	return result.replace(drive, 'file:///$1:/');
}

filePathToUrl('./algorithms & data structures/@math characters')
'./algorithms%20&%20data%20structures/@math%20characters'