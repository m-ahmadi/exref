new Awesomplete('#myinput'|document.getElementById('myinput'), {
	list:
		'#mylist' |
		document.getElementById('mylist') |
		['a', 'b', ...]
});

// set list later:
var awesomplete = new Awesomplete('#myinput');
/* more code... */
awesomplete.list = ['Ada', 'Java', 'JavaScript', 'Brainfuck', 'LOLCODE', 'Node.js', 'Ruby on Rails'];

// settings (also settable via data- attribute on the <input> element):
new Awesomplete('#myinput', {
	minChars: 3,
	maxItems: 15
});

/*
<input id="myinput" />
<ul id="mylist">
	<li>Ada</li>
	<li>Java</li>
	<li>JavaScript</li>
	<li>Brainfuck</li>
	<li>LOLCODE</li>
	<li>Node.js</li>
	<li>Ruby on Rails</li>
</ul>
*/