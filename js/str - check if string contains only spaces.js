// remove all whitespace, if length is 0, then the original only contained whitespace.

if ( str.trim().length ) {
	// contains only spaces
}

if ( str.replace(/\s/g, '').length ) {
	// contains only spaces
}

if ( !/\S/.test(str) ) {
	// contains only spaces
}

