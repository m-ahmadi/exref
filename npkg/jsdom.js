const jsdom = require('jsdom');

let dom = new jsdom.JSDOM(html='', ?options={
	// https://github.com/jsdom/jsdom#customizing-jsdom
	url:                  '',
	referrer:             '',
	contentType:          'text/html',
	includeNodeLocations: false,
	storageQuota:         5000000,
	runScripts:           'dangerously',
	pretendToBeVisual:    false,
	resources:            ResourceLoader{},
	virtualConsole:       VirtualConsole{},
	cookieJar:            CookieJar{},
	beforeParse(window) {
		window.document.childNodes.length === 0;
	}
});

dom.virtualConsole
dom.cookieJar
dom.getInternalVMContext()
dom.reconfigure(settings={});
dom.serialize()
dom.nodeLocation(HTMLElement)

let dom = await jsdom.JSDOM.fromURL(url=''|URL, ?options={});
let dom = await jsdom.JSDOM.fromFile(url=''|URL, ?options={});

let rl = new jsdom.ResourceLoader({proxy:'', strictSSL:false, userAgent:''});

let vc = new jsdom.VirtualConsole();
vc.on('error|warn|info|dir', ()=>)
vc.sendTo(console)

let cj = new jsdom.CookieJar(store, options);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples
let { JSDOM } = require('jsdom');

// basic
let html = '<!DOCTYPE html><h1><p>Hello world</p></h1>';
let dom = new JSDOM(html);
let el = dom.window.document.querySelector('p');
// different from browser
el.innerText   // undefined
el.textContent // 'Hello world'
el.innerHTML   // 'Hello world'
dom.window.close() // https://github.com/jsdom/jsdom#closing-down-a-jsdom

// fragment
let frag = JSDOM.fragment(`<p>Hello</p><p><strong>Hi</strong>`);
frag.childNodes.length                   // 2
frag.querySelector('strong').textContent // 'Hi'

// encoding
// https://github.com/jsdom/jsdom#encoding-sniffing
let { window: {document: d1} } = JSDOM.fromFile('file.html', {contentType:'text/html; charset=utf-8'});
let { window: {document: d2} } = new JSDOM('<!DOCTYPE html><h1>سلام</h1>');
d1.querySelector('h1').textContent // سلام
d2.querySelector('h1').textContent // سلام
