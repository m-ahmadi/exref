class MyComponent extends HTMLElement {
	constructor() {
		super();
	}
	// lifecycle callbacks:
  connectedCallback() {
		this.innerHTML = `<h1>Hello world</h1>`;
  }
	disconnectedCallback() {
		
	}
	adoptedCallback() {
		
	}
	attributeChangedCallback() {
		
	}
}

window.customElements.define('my-component', MyComponent, {extends: 'p'});

/* html:
<my-component></my-component>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@