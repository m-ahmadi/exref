Object.keys(object)
	// produces an array of strings which are:
	// the keys of owned enumerable properties. (not inherited properties)

Object.keys(object).forEach(key => {
	var prop = object[key];
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// for in

for (prop in obj) {
	// iterates over inherited members as well
	
	if ( obj.hasOwnPorperty(prop) ) {
		// only owned properties
	}
}

var obj = new class {constructor(){this.foo=2}};
for (let key in obj) console.log(key) // foo


// name conflict issue
var obj = {hasOwnProperty: 'salam'};
for (let key in obj) {
	if ( obj.hasOwnProperty(key) ) alert(key);                         // Uncaught TypeError
	if ( Object.prototype.hasOwnProperty.call(obj, key) ) alert(name); // quick fix
}

// other possible fixes
Object.create(null)
	// create object with 0 inherited members
	// objects created with {} or new, inherit 11 member

enumerable: false
	// set enumerable attribute to false when adding methods to prototypes
	// that keeps them out of "for in" enumeration
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@