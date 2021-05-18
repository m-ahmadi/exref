window.customElements.define(name='*-*', constructor, ?options={extends:''})

class Autonomous extends HTMLElement {
	constructor() { super(); }
	// lifecycles:
	connectedCallback() {}
	disconnectedCallback() {}
	adoptedCallback() {}
	attributeChangedCallback() {}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// autonomous
class MyComponent extends HTMLElement {
	constructor() { super(); }
	connectedCallback() {
		this.innerHTML = `<h1>Hello world</h1>`;
		this.style.color = 'red';
	}
}
window.customElements.define('my-component', MyComponent);
/* html:
<my-component></my-component>
*/


// customized built-in
class ExpandingList extends HTMLUListElement {
  constructor() { super(); }
}
customElements.define('expanding-list', ExpandingList, {extends: 'ul'});
/* html:
<ul is="expanding-list">ul>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// shadow dom example
class NewsArticle extends HTMLElement {
	constructor() {
		super();
		this.atachShadow({mode: 'open'});
	}
	set article(article) {
		this.root.innerHTML = `
			<a href="${article.url}">
				<h2>${article.title}</h2>
				<img src="${article.imgUrl}" />
				<p>${article.body}</p>
			</a>
		`;
	}
}
window.customElements.define('news-article', NewsArticle);
var el = document.createElement('news-article');
el.article = {url: '', title: '', body: ''};
document.appendChild(el);

/* html:
<news-article>
	#shadow-root (open)
</news-article>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@