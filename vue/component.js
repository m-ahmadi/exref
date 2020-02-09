// basic example
Vue.component('button-counter', {
	data: function () {
		return { count: 0 };
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});
new Vue({ el: '#components-demo' })
/*
<div id="components-demo">
  <button-counter></button-counter>
</div>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another basic example
Vue.component('todo-item', {
	template: '<li>{{ todo.text }}</li>',
	props: ['todo']
});

var app = new Vue({
	el: '#app',
	data: {
		groceryList: [
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'Whatever else humans are supposed to eat' }
		]
	}
});
/*
<div id="app">
  <ol>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// passing data to components (props)
Vue.component('blog-post', {
	props: ['title'],
	template: '<h3>{{ title }}</h3>'
});

new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})
/*
<div id="blog-post-demo">
	<blog-post title="My journey with Vue"></blog-post>
	<blog-post title="Blogging with Vue"></blog-post>
	<blog-post title="Why Vue is so fun"></blog-post>
</div>

same as:

<div id="blog-post-demo">
	<blog-post
		v-for="post in posts"
		v-bind:key="post.id"
		v-bind:title="post.title"
	></blog-post>
</div>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// listen on component events
Vue.component('blog-post', {
	props: ['post'],
	template: '#blog-post'
})
var app = new Vue({
	el: '#app',
	template: '#blog-posts-events-demo',
	data: {
		posts: [
			{id: 1, title: 'post1', content: 'content1'},
			{id: 2, title: 'post2', content: 'content2'},
			{id: 3, title: 'post3', content: 'content3'}
		],
		postFontSize: 1
	},
	methods: {
		onEnlargeText: function (enlargeAmount) {
			this.postFontSize += enlargeAmount;
		}
	}
});
/*
<div id="app"></div>

<script type="text/x-template" id="blog-post">
	<div class="blog-post">
		<h3>{{ post.title }}</h3>
		<button
			<!--either: -->
			v-on:click="$emit('enlarge-text')"     <!--emit an event-->
			v-on:click="$emit('enlarge-text', 0.1) <!--emit event and a value-->
		>Enlarge text</button>
		<div v-html="post.content"></div>
	</div>
</script>

<script type="text/x-template" id="blog-posts-events-demo">
	<div id="blog-posts-events-demo">
		<div :style="{ fontSize: postFontSize + 'em' }">
			<blog-post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"
				<!--either: -->
				v-on:enlarge-text="postFontSize += 0.1"     <!--listen to `enlarge-text` event on the child-->
				v-on:enlarge-text="postFontSize += $event"  <!--access the emitted event's value-->
				v-on:enlarge-text="onEnlargeText"           <!--event handler is a method-->
			></blog-post>
		</div>
	</div>
</script>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
Vue.component(stringId[, definitionObject]); /*
registers component globally
id string:   string.
definition:  optional. function | object
every component must have a single root element. */

// register an extended constructor:
Vue.component('my-component', Vue.extend({ /* ... */ }));

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

// retrieve a registered component: (always return constructor)
var MyComponent = Vue.component('my-component');

// lifecycle hooks
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
activated
deactivated
beforeDestroy
destroyed
errorCaptured
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@