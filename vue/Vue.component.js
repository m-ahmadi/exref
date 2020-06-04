Vue.component(id='', ?definition={} | fn);
// registers component globally
// every component must have a single root element.

// extended constructor
Vue.component('my-component', Vue.extend({}));

// register an options object: (automatically call Vue.extend)
Vue.component('my-component', {
	props: [],
	template: '', // or:
	render: function (createElement) {
		// render function has priority over the render function compiled from `this.template`.
		return createElement();
	},
	data: function () {}, // data must be a function
	methods: {
		something: function () {}
	}
});

// get registered component (its constructor)
var MyComponent = Vue.component('my-component');