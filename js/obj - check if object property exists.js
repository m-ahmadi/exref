if ( obj.hasOwnProperty(prop) ) {
	alert("yes, i have that property");
}

if ( prop in obj ) {	// check for inherited properties (do not use)
	alert("yes, i have that property");
}