var obj = {
	foo(a, b) {
	
	},
	async bar(x, y) {
		
	},
	*quux (x, y) {
	
	}
};

// same as:
var obj = {
	foo: function (a, b) {
	
	},
	bar: async function (x, y) {
	
	},
	// quux: no equivalent in ES5
};