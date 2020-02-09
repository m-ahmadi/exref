form.serialize() // if input is disabled 'form.serialize' will not pick it up

form.serializeArray() /*
<input type='text' name='username' />
[
	{ name: 'username', value: ''},
	{ name: '',         value: '' },
	...
]
*/
let o = {};
form.serializeArray().forEach(i => o[i.name] = i.value)
JSON.stringify(o);