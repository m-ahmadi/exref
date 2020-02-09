var o = {
	a : 7,
	
	get b() {
		return this.a + 1;
	},
	
	set c(x) {
		this.a = x / 2;
	}
};

Object.getOwnPropertyDescriptor(o, 'a'); // Object {value: 7, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(o, 'b'); // Object {set: undefined, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(o, 'c'); // Object {get: undefined, enumerable: true, configurable: true}