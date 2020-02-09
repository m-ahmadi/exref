const source = `
<p>
	Hello, my name is {{name}}. I am from {{hometown}}.
	I have {{kids.length}} kids:
</p>
<ul>
	{{#kids}}
		<li>{{name}} is {{age}}</li>
	{{/kids}}
</ul>`;

const template = Handlebars.compile(source);

const data = {
	name: 'Alan',
	hometown: 'Somewhere, TX',
	kids: [
		{name: 'Jimmy', age: '12'},
		{name: 'Sally', age: '4'}
	]
};
const result = template(data); /*
<p>
	Hello, my name is Alan. I am from Somewhere, TX.
	I have 2 kids:
</p>
<ul>
  <li>Jimmy is 12</li>
  <li>Sally is 4</li>
</ul>
*/