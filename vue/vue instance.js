var data = { a: 1 };

var app = new Vue({
	el: '#app', // hook into dom.
	template: '<nav>Instance Template</nav>', // or
	render: createElement => createElement(),
	data: data
});

// instance and data are linked:
app.a === data.a // true
app.a = 2
data.a // 2
data.a = 3
app.a  // 3
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// instance lifecycle hooks
new Vue({
	data: {
		a: 1
	},
	created: function () {
		// `this` points to the vm instance
		console.log('a is: ' + this.a)
	},
	mounted: function () {},
	updated: function () {},
	destroyed: function () {}
})