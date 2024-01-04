// install
// set PUPPETEER_SKIP_DOWNLOAD=1 && npm i puppeteer
// npx puppeteer browsers install chrome
const puppeteer = require('puppeteer');

// https://pptr.dev/api/puppeteer.puppeteernode

// https://pptr.dev/api/puppeteer.browser
var browser = puppeteer.launch({headless: 'new'|false})
browser.close()

// https://pptr.dev/api/puppeteer.page
var page = browser.newPage()
page.$(selector):  ElementHandle
page.$$(selector): ElementHandle[]
page.$$eval(selector, pageFunction)
page.$eval(selector, pageFunction)
page.evaluate(pageFunction, ...args) // pageFunction runs in page context and cannot access script context
var response = page.goto(url).catch(err => `possible error causes:
1. ssl error (self-signed certificates)
2. target url is invalid
3. timeout is exceeded during navigation
4. remote server does not respond or is unreachable
5. main resource failed to load`)
page.setViewport({width, height, ...})
page.type(selector, text)
page.waitForNavigation({timeout:30000, waitUntil:'load|domcontentloaded|networkidle0|networkidle2'|['',..]})
page.click(selector)

// https://pptr.dev/api/puppeteer.elementhandle
var element = page.waitForSelector()
element.click()
element.dispose()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic flow
var browser = await puppeteer.launch({headless:'new'});
var page = await browser.newPage();
await page.goto('https://jsonplaceholder.typicode.com/');
text = await page.evaluate(() => document.querySelector('.mt-two.text-lg').innerText);
await browser.close();



// goto page
var resp = await page.goto('https://jsonplaceholder.typicode.com/').catch(()=>console.log('other errors'));
// or (wait to load)
let [resp] = await Promise.all([
	page.waitForNavigation(),
	page.goto('https://jsonplaceholder.typicode.com/'),
]).catch(()=> console.log('other errors'));
// or (... alt syntax)
var resp = await page.goto('https://jsonplaceholder.typicode.com/');
await page.waitForNavigation();

if (resp.status() === 200) {
	var text = await page.evaluate(() => document.querySelector('.mt-two.text-lg').innerText);
}



// dollars
var divCount = await page.$$eval('div', divs => divs.length);
var options = await page.$$eval('select > option', options => {
  return options.map(option => option.textContent);
});



// get element out of browser context (not sure)
var element = await page.waitForSelector('div > .class-name');
await element.click();
await element.dispose(); // dispose of handle



// do more
var browser = await puppeteer.launch();
var page = await browser.newPage();
await page.goto('https://developer.chrome.com/');
await page.setViewport({width: 1080, height: 1024}); // set screen size
await page.type('.search-box__input', 'automate beyond recorder'); // type into search box
// wait and click on first result
var searchResultSelector = '.search-box__link';
await page.waitForSelector(searchResultSelector);
await page.click(searchResultSelector);
// locate full title with a unique string
var textSelector = await page.waitForSelector('text/Customize and automate');
var fullTitle = await textSelector?.evaluate(el => el.textContent);
// print the full title
console.log('The title of this blog post is "%s".', fullTitle);
await browser.close();
