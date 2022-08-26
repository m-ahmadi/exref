PAGES = 238;
URL = 'https://api.digikala.com/v1/categories/webcam/search/?has_selling_stock=1';
URL = 'https://api.digikala.com/v1/providers-products/?has_selling_stock=1&category_code=casual-shoes-for-men';
SLEEP = 500;

r = [];
for (let i=1; i<=PAGES; i++) {
	let res = await (await fetch(URL+'&page='+i)).json();
	let items = res.data.products.map(i=> i.default_variant);
	let availables = items.filter(i=> !Array.isArray(i)).map(i=> i.price.selling_price / 10);
	r.push(...availables);
	await new Promise(r => setTimeout(r, SLEEP));
}


// make frequency table for example
max = Math.max(...r);
step = 1_000_000; // 100_000  500_000  1_000_000
m = new Map();
for (let i=0, j=step; i<max; i+=step, j+=step) {
	let chunkSize = r.filter(q => q >= i && q <= j).length;
	let [_i, _j] = [i,j].map(_ => _.toLocaleString());
	let name = _i+' - '+_j;
	if (!m.has(name)) m.set(name, 0);
	m.set(name, m.get(name) + chunkSize);
}
notzeros = [...m].filter(i=> i[1] > 0);
table = Object.fromEntries(notzeros);
console.table(table);