var input = document.getElementById('myinput');

// show label but insert value into the input:
new Awesomplete(input, {
	list: [
		{ label: 'Belarus', value: 'BY' },
		{ label: 'China', value: 'CN' },
		{ label: 'United States', value: 'US' }
	]
});

// same with arrays:
new Awesomplete(input, {
	list: [
		['Belarus', 'BY'],
		['China', 'CN'],
		['United States', 'US']
	]
});

// show label and insert label into the input:
new Awesomplete(input, {
	list: [
		{ label: 'Belarus', value: 'BY' },
		{ label: 'China', value: 'CN' },
		{ label: 'United States', value: 'US' }
	],
	// insert label instead of value into the input.
	replace: function(suggestion) {
		this.input.value = suggestion.label;
	}
});