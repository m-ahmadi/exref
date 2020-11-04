if ( obj.hasOwnProperty(prop) ) {
	alert('yes, i have that property');
}

if (prop in obj) { // checks inherited props as well (do not use)
	alert('yes, i have that property');
}