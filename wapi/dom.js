EventTarget <- Node
EventTarget.addEventListener()
EventTarget.removeEventListener()
EventTarget.dispatchEvent()

Node <- Document, Element, Attr, CharacterData(Text,Comment,CDATASection), ProcessingInstruction, DocumentFragment, DocumentType
Node.nodeName
Node.tagName
Node.attributes
Node.nodeValue
Node.nodeType
	1  Element               // <p>, <div>, ...
	3  Text                  // text inside an Element or Attr
	4  CDATASection          // <!CDATA[[ … ]]>
	7  ProcessingInstruction // <?xml-stylesheet … ?> in an xml document
	8  Comment               // <!-- ... -->.
	9  Document
	10 DocumentType          // <!DOCTYPE html>
	11 DocumentFragment
Node.childNodes: NodeList
Node.parentNode: Node|null
Node.nextSibling
Node.previousSibling
Node.firstChild
Node.lastChild
Node.isEqualNode(otherNode)
Node.isSameNode(node)
Node.contains(node)
Node.cloneNode(deep=false) // true: with children. event listeners are not copied, except inline ones: <div onclick="">. canvas image is not copied.
Node.appendChild(node) // old...
Node.removeChild(node)
Node.replaceChild(newNode, oldNode)
Node.insertBefore(newNode, referenceNode)

mixin ParentNode <- Element, Document, DocumentFragment
ParentNode.childElementCount
ParentNode.children: HTMLCollection
ParentNode.firstElementChild
ParentNode.lastElementChild 
ParentNode.append(...nodes|...strings)
ParentNode.prepend(...nodes|...strings)
ParentNode.querySelector()
ParentNode.querySelectorAll()

mixin ChildNode <- ELement, DocumentType, CharacterData
ChildNode.remove()
ChildNode.before(...nodes|...strings)
ChildNode.after(...nodes|...strings)
ChildNode.replaceWith()

mixin DocumentOrShadowRoot <- Document, ShadowRoot
DocumentOrShadowRoot.activeElement
DocumentOrShadowRoot.fullscreenElement
DocumentOrShadowRoot.styleSheets
DocumentOrShadowRoot.caretPositionFromPoint()
DocumentOrShadowRoot.elementFromPoint(x, y)
DocumentOrShadowRoot.elementsFromPoint()
DocumentOrShadowRoot.getSelection()

Document extends Node
Document implements DocumentOrShadowRoot
Document.title
Document.head
Document.body
Document.hidden
Document.documentElement
Document.readyState = 'loading'|'interactive'|'complete'
Document.querySelector()
Document.querySelectorAll()
Document.getElementById()
Document.getElementByClassName()
Document.getElementByName()
Document.getElementByTagName()
Document.getElementsByTagNameNS(namespace, name)
Document.createElement(tagName, ?options)
Document.createElementNS(namespaceURI, qualifiedName, ?options)
Document.createTextNode(str)
Document.createAttribute(name)
Document.createComment(str)
Document.hasFocus()
Document.write()
Document.writeln()

Element extends Node
Element implements ParentNode, ChildNode, NonDocumentTypeChildNode
Element <- HTMLElement, SVGElement
Element.attributes: NamedNodeMap
Element.classList: DOMTokenList
Element.className
Element.clientHeight
Element.clientLeft
Element.clientTop
Element.clientWidth
Element.id
Element.innerHTML
Element.outerHTML
Element.scrollHeight
Element.scrollLeft
! Element.scrollLeftMax
Element.scrollTop
! Element.scrollTopMax
Element.scrollWidth
Element.shadowRoot
! Element.openOrClosedShadowRoot
X Element.slot
! Element.tabStop
Element.tagName
Element.insertAdjacentHTML(position='beforebegin'|'afterbegin'|'beforeend'|'afterend', text)
Element.insertAdjacentElement(position, element)
Element.insertAdjacentText(position, str)
Element.getBoundingClientRect()
Element.setAttribute(name, value)
Element.getAttribute(name)
Element.removeAttribute(name)
Element.hasAttribute(name)
Element.getAttributeNames()
Element.closest(selectors)
Element.scrollIntoView(alignToTop|options={
	behavior: 'auto'|'smooth',
	block:    'start'|'center'|'end'|'nearest',
	inline:   'nearest'|'start'|'center'|'end'
})

mixin HTMLOrForeignElement <- HTMLElement, SVGElement, MathMLElement
HTMLOrForeignElement.dataset
HTMLOrForeignElement.tabIndex
HTMLOrForeignElement.blur()
HTMLOrForeignElement.focus(?options={preventScroll: false})

HTMLElement extends Element
HTMLElement implements HTMLOrForeignElement, DocumentAndElementEventHandlers, ElementCSSInlineStyle, GlobalEventHandlers, TouchEventHandlers
HTMLElement.contentEditable
HTMLElement.isContentEditable 
HTMLElement.dir
HTMLElement.draggable
HTMLElement.dropzone
HTMLElement.hidden
HTMLElement.innerText
HTMLElement.lang
HTMLElement.noModule
X HTMLElement.offsetHeight
X HTMLElement.offsetLeft
X HTMLElement.offsetParent
X HTMLElement.offsetTop
X HTMLElement.offsetWidth
HTMLElement.style
HTMLElement.title
HTMLOrForeignElement.blur()
HTMLElement.click()
HTMLOrForeignElement.focus()

abstract NonDocumentTypeChildNode <- Element, CharacterData
NonDocumentTypeChildNode.nextElementSibling
NonDocumentTypeChildNode.previousElementSibling

abstract CharacterData extends Node
CharacterData implements ChildNode, NonDocumentTypeChildNode
CharacterData <- Text, Comment, CDATASection

NodeList: {Node, ..., length}
NodeList.forEach|keys|values|item()
Array.from(NodeList).map|reduce|filter|...()

HTMLCollection: {HTMLElement, ..., length}

DOMTokenList <- Element.classList, HTMLLinkElement.relList, HTMLAnchorElement.relList, HTMLAreaElement.relList
DOMTokenList.add(token1, ?token2, ...)
DOMTokenList.remove(token1, ?token2, ...)
DOMTokenList.toggle(token)
DOMTokenList.contains(token)
DOMTokenList.replace(oldToken, newToken)
DOMTokenList.item(index)

DocumentFragment extends Node
DocumentFragment implements ParentNode
var fragment = new DocumentFragment()
fragment.append(elemA)
fragment.append(elemB)
elemC.append(fragment)

function parseHTML(str) {
	var el = document.createElement('div');
	el.innerHTML = str;
	return el.children;
}

if (x instanceof HTMLElement) // dom el

// direct child
el.querySelectorAll('> *') // error
el.querySelectorAll(':scope > *')

// $el .width() .height()
+getComputedStyle(el,null).width.replace('px','')
el.getBoundingClientRect().width

// $el.index()
function index(el) {
	return [...el.parentElement.children].indexOf(el);
}

// selected value of single select
ranges.selectedOptions[0].value
select.options[select.options.selectedIndex].value

// selected values of multiple select
[...select.selectedOptions].map(i => i.value)
[...select.options].filter(i => i.selected).map(i => i.value)
[...select.querySelectorAll(':checked')].map(i => i.value)
[...select.options].reduce((a,c) => (c.selected ? a.push(c.value) : 1) && a, [])

// get els from bounding rect
function getElementsFromRect(selector, x1, y1, x2, y2, ctx=document) {
	const res = [];
	ctx.querySelectorAll(selector).forEach(el => {
		const { x, y, width, height } = el.getBoundingClientRect();
		if (x >= x1 && y >= y1 && x+width <= x2 && y+height <= y2) {
			res.push(el);
		}
	});
	return res;
}

// set multiple styles
var myel = document.querySelector('h1');
el.style.cssText = 'background: black; color: red';
Object.assign(el.style, {background:'black', color:'red'});


// get iframe document or window
var iframe = document.querySelector('iframe');
iframe.contentDocument
iframe.contentWindow
iframe.contentWindow.document

// $()
function $(selector='', ctx=document) {
	const res = ctx.querySelectorAll(selector);
	if (!res.length) return;
	return res.length > 1 ? [...res] : res[0];
}

// ps
A <- B, C, D // B,C,D implements A (implemented by)
! = non-standard
X = experimental