// https://www.iranserver.com/domains/tld

// domains with discount
items = [...document.querySelectorAll('#dpanels_pro .row.tld-item')].map(el => ({
	domain: el.children.item(0).innerText,
	price: +el.children.item(1).innerText.replaceAll(',',''),
	renew: +el.children.item(2).innerText.replaceAll(',',''),
}));
items.sort(({renew:a},{renew:b}) => a-b);
items.sort(({price:a},{price:b}) => a-b);
console.table(items);


// normal domains
items = [...document.querySelectorAll('#dpanels .row.tld-item')].map(el => ({
	domain: el.children.item(0).innerText,
	price: +el.children.item(1).innerText.replaceAll(',',''),
}));
items.sort(({price:a},{price:b}) => a-b);
console.table(items);
