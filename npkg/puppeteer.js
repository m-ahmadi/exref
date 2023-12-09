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
page.goto(url)
page.setViewport({width, height, ...})
page.type(selector, text)

// https://pptr.dev/api/puppeteer.elementhandle
var element = page.waitForSelector()
element.click()
element.dispose()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

let browser = await puppeteer.launch({headless:'new'});
let page = await browser.newPage();
await page.goto('https://jsonplaceholder.typicode.com/');
text = await page.evaluate(() => document.querySelector('.mt-two.text-lg').innerText);
await browser.close();


let browser = await puppeteer.launch();
let page = await browser.newPage();
await page.goto('https://developer.chrome.com/');
await page.setViewport({width: 1080, height: 1024}); // set screen size
await page.type('.search-box__input', 'automate beyond recorder'); // type into search box
// wait and click on first result
let searchResultSelector = '.search-box__link';
await page.waitForSelector(searchResultSelector);
await page.click(searchResultSelector);
// locate full title with a unique string
let textSelector = await page.waitForSelector('text/Customize and automate');
let fullTitle = await textSelector?.evaluate(el => el.textContent);
// print the full title
console.log('The title of this blog post is "%s".', fullTitle);
await browser.close();


let browser = await puppeteer.launch();
let page = await browser.newPage();
await page.goto('YOUR_SITE');
// get element handle
let element = await page.waitForSelector('div > .class-name');
await element.click();
await element.dispose(); // dispose of handle
await browser.close();
