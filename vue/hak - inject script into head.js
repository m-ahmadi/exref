components: {
	SomeComponent: () => {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.onload = () => {
				resolve( import(someComponent) );
			};
			script.async = true;
			script.src = '/charting_library/charting_library.js';
			document.head.appendChild(script);
		});
	}
},

async function addHeadScript() {
	return new Promise((resolve, reject) => {
		const headScripts = [...document.head.children].filter(i=>i.tagName === 'SCRIPT');
		if ( headScripts.find(i => /charting_library/.test(i.src)) ) {
			resolve();
		} else {
			const script = document.createElement('script');
			script.onload = () => resolve();
			script.async = true;
			script.src = '/charting_library/charting_library.js';
			document.head.appendChild(script);
		}
	});
}

async mounted() {
	await addHeadScript();
}

beforeCreate() {
	const script = document.createElement('script')
	script.setAttribute('src', '/charting_library/charting_library.js');
	document.head.append(script);
}