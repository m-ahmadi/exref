import {html, render} from 'https://unpkg.com/lit-html?module'; // in a <script type="module">

// basic
const myTemplate = html`<div>Hello World</div>`;
render(myTemplate, document.body);

// dynamic
const myTemplate = (name) => html`<div>Hello ${name}</div>`;
render(myTemplate('world'), document.body);
render(myTemplate('lit-html'), document.body);

// using expressions
const myTemplate = (subtotal, tax) => html`<div>Total: ${subtotal + tax}</div>`;
const myTemplate2 = (name) => html`<div>${formatName(name.given, name.family, name.title)}</div>`;

// bind to attributes
const myTemplate = (data) => html`<div class=${data.cssClass}>Stylish text.</div>`;
const myTemplate2 = (data) => html`<div ?disabled=${!data.active}>Stylish text.</div>`;

// bind to properties
const myTemplate3 = (data) => html`<my-list .listItems=${data.items}></my-list>`;

// add event listeners
const clickHandler = function | {handleEvent(e) {}, capture: true};
const myTemplate = () => html`<button @click=${clickHandler}>Click Me!</button>`;

// nest
const myHeader = html`<h1>Header</h1>`;
const myPage = html`
  ${myHeader}
  <div>Here's my main page.</div>
`;

const myListView = (items) => html`<ul>...</ul>`;
const myPage = (data) => html`
  ${myHeader}
  ${myListView(data.items)}
`;

// conditional templates
html`
  ${user.isloggedIn
      ? html`Welcome ${user.name}`
      : html`Please log in`
  }
`;

// conditionals with if statements
getUserMessage() {
  if (user.isloggedIn) {
    return html`Welcome ${user.name}`;
  } else {
    return html`Please log in`;
  }
}
html`
  ${getUserMessage()}
`

// repeating templates
html`
  <ul>
    ${items.map((item) => html`<li>${item}</li>`)}
  </ul>
`;

const itemTemplates = [];
for (const i of items) {
  itemTemplates.push(html`<li>${i}</li>`);
}
html`
  <ul>
    ${itemTemplates}
  </ul>
`;

const employeeList = (employees) => html`
<ul>
	${repeat(employees, (employee) => employee.id, (employee, index) => html`
		<li>${index}: ${employee.familyName}, ${employee.givenName}</li>
	`)}
</ul>
`;

// rendering nothing
${user.isAdmin ? html`<button>DELETE</button>` : ''}

import {nothing} from 'lit-html';
html`
<shadow-element>${user.isAdmin
	? html`<button>DELETE</button>`
	: nothing
}</shadow-element>
`;

// caching template results: the cache directive
const detailView = (data) => html`<div>...</div>`; 
const summaryView = (data) => html`<div>...</div>`;

html`${cache(data.showDetails
  ? detailView(data) 
  : summaryView(data)
)}`