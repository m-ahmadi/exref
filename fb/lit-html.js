import {html, render} from 'https://unpkg.com/lit-html?module'; // <script type="module">

// ref
var templateResult = html``;
render(result, container=Element | DocumentFragment, ?options)

// basic static
var objTemplateResult = html`<div>Hello World</div>`;
render(objTemplateResult, document.body);

// for dynamic use functions
var template = name => html`<div>Hello ${name}</div>`;
render(template('world'), document.body);
render(template('lit-html'), document.body);

// using expressions
var template = (subtotal, tax) => html`<div>Total: ${subtotal + tax}</div>`;
var template = (name) => html`<div>${formatName(name.given, name.family, name.title)}</div>`;

// bind to attributes
var template = (data) => html`<div class=${data.cssClass}>Stylish text.</div>`;
var template = (data) => html`<div ?disabled=${!data.active}>Stylish text.</div>`;

// bind to properties
var template = (data) => html`<my-list .listItems=${data.items}></my-list>`;

// add event listeners
var clickHandler = function | {handleEvent(e) {}, capture: true};
var template = () => html`<button @click=${clickHandler}>Click Me!</button>`;

// nest and compose (kinda like hbs partials)
var myHeader = html`<h1>Header</h1>`;
var myPage = html`
  ${myHeader}
  <div>Here's my main page.</div>
`;

var myListView = (items) => html`<ul>...</ul>`;
var myPage = (data) => html`
  ${myHeader}
  ${myListView(data.items)}
`;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// conditional templates

// ternary
html`
  ${user.isloggedIn
      ? html`Welcome ${user.name}`
      : html`Please log in`
  }
`;

// if
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// repeating templates

// arr.map()
html`
  <ul>
    ${items.map((item) => html`<li>${item}</li>`)}
  </ul>
`;

// loop
var itemTemplates = [];
for (const i of items) {
  itemTemplates.push(html`<li>${i}</li>`);
}
html`
  <ul>
    ${itemTemplates}
  </ul>
`;

// repeat directive
const employeeList = (employees) => html`
<ul>
	${repeat(employees, (employee) => employee.id, (employee, index) => html`
		<li>${index}: ${employee.familyName}, ${employee.givenName}</li>
	`)}
</ul>
`;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// rendering nothing

// empty str
${user.isAdmin ? html`<button>DELETE</button>` : ''}

// nothing variable
import { nothing } from 'lit-html';
html`
<shadow-element>${user.isAdmin
	? html`<button>DELETE</button>`
	: nothing
}</shadow-element>
`;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// caching template results: the cache directive
const detailView = (data) => html`<div>...</div>`; 
const summaryView = (data) => html`<div>...</div>`;

html`${cache(data.showDetails
  ? detailView(data) 
  : summaryView(data)
)}`