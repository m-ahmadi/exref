/*
	"for in" statment iterates through all the members of an objec.
	Note that it iterates through the inherited properties as well.
	So if you want to only iterate over owned properties,
	you have to filter it yourself:
*/
for (prop in obj) {
	// all properties (including all inherited ones)
	if ( obj.hasOwnPorperty(prop) ) {
		// only owned properties
	}
}