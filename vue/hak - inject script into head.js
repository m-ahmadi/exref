// sol 1: factory component definition (cached automatically)
new Vue({
	components: {
		SomeComponent: () => new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.onload = () => resolve( import('./SomeComponent.js') );
			script.async = true;
			script.src = '/path/to/myscript.js';
			document.head.append(script);
		});
	},
})
// same in webpack
import SomeComponent from './SomeComponent.vue';
export default {
	components: {
		SomeComponent: () => new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.onload = () => resolve(SomeComponent);
			script.async = true;
			script.src = '/path/to/myscript.js';
			document.head.append(script);
		});
	},
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// sol 2: async lifecycle hook (must be guarded manually)
async function addHeadScript() {
	return new Promise((resolve, reject) => {
		if ( [...document.head.children].filter(i => i.tagName === 'SCRIPT').find(i => /myscript/.test(i.src)) ) {
			resolve();
		} else {
			const script = document.createElement('script');
			script.onload = () => resolve();
			script.async = true;
			script.src = '/path/to/myscript.js';
			document.head.append(script);
		}
	});
}
async mounted() {
	await addHeadScript();
	// doInitWork()
}

beforeCreate() {
	const script = document.createElement('script')
	script.setAttribute('src', '/path/to/myscript.js');
	document.head.append(script);
}