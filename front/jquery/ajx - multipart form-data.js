contentType: false, // 'multipart/form-data',
processData: false,
data: buildFormdata()

function buildFormdata(o) {
	let res = new FormData();
	Object.keys(o).forEach(k => {
		res.append(k, o[k]);
	});
	return res;
}