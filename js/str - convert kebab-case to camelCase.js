function camelize(str) {
	return str
		.split('-')
		.map((v, i) => i ? v.charAt(0).toUpperCase() + v.slice(1).toLowerCase() : v)
		.join('');
}
// or
const camelize = str => str.split('-').map((v,i) => i ? v.charAt(0).toUpperCase() + v.slice(1).toLowerCase() : v).join('');

camelize('my-kebab-string')