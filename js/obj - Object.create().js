Object.create(proto[, propertiesObject])
/*
	Browser compatibility
	
	Desktop
		Chrome					Firefox (Gecko)				Internet Explorer		Opera				Safari
		5						4.0 (2)						9						11.60				5
		
	Mobile
		Android					Firefox Mobile (Gecko)		IE Mobile				Opera Mobile		Safari Mobile
		Chrome for Android		4.0 (2)						(Yes)					11.5				(Yes)
		(Yes)
*/

var o;
o = Object.create(Object.prototype) // o = {}
o = Object.create(null);
o = Object.create({});

o = Object.create(Object.prototype, {
	// foo is a regular 'value property'
	foo: {
		value: 'hello',
		writable: true,
		enumarable: true,
		configurable: true
	},
	// by default properties ARE NOT writable, enumerable or configurable:
	far: {
		value: 'go'
		// writable:        defaults to false
		// enumarable:      defaults to false
		// configurable:    defaults to false
	},
	// bar is a getter-and-setter (accessor) property
	bar: {
		configurable: false,
		get: function() {
			return 10;
		},
		set: function(value) {
			console.log('Setting `o.bar` to', value);
		}
	}
});
// second parameter maps keys to "property descriptors"

//--------------------------------------------------------------------------------------------------

o = Object.create({}, {
	p: {
		value: 42
	}
});

o.p = 24;
o.p; // 42

o.q = 12;
for (var prop in o) {
	alert(prop);
}
// 'q'

delete o.p;	// false

// to specify an ES3 property
o2 = Object.create({}, {
	p: {
		value: 42,
		writable: true,
		enumerable: true,
		configurable: true
	}
});
