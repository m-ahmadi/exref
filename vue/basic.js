// basic
var app = new Vue({
	el: '#app',
	data: { message: 'Hello Vue!' }
});
// <div id="app">{{ message }}</div>
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// bind
var app = new Vue({
	el: '#app',
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString()
	}
});
/* 
<div id="app">
	<span v-bind:title="message">
		Hover your mouse over me for a few seconds
		to see my dynamically bound title!
	</span>
</div>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// conditional
var app = new Vue({
	el: '#app',
	data: {
		seen: true
	}
});
/*
<div id="app">
  <span v-if="seen">Now you see me</span>
</div>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// loop
var app = new Vue({
	el: '#app',
	data: {
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
});
/*
<div id="app">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// user input
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
});
/*
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// v-model directive two-way binding
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
});
/*
<div id="app">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@