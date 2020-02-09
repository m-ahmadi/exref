// method 1:
function objSize(obj) {
    var size = 0, key;
    for ( key in obj ) {
        if ( obj.hasOwnProperty(key) ) {
			size += 1;
		}
    }
    return size;
}

// method 2:
Object.keys(obj).length