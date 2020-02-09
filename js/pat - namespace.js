function namespace(name, chr='.') {
	const parts = name.split(chr);
	const res = {};
	
	let current = res;
	for (let i=0; i < parts.length; i+=1) {
		if ( !current[ parts[i] ] ) {
			current[ parts[i] ] = {};
		}
		current = current[ parts[i] ];
	}
	return res;
}