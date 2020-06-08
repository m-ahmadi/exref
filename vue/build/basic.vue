<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" @click="doSome">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue';

	export default {
		name: 'app',
		components: {
			HelloWorld // components must be registered
		},
		methods: {
			doSome() {
				
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>