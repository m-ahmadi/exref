MAKE_HTML = true;
MAKE_CSV = false;
UTF8_BOM_CSV = true;
ADD_ROWNUM_COLUMN = true;
MAKE_GRID_PAGE = true;
FILENAME = 'out';

COLUMN_HEADERS = ['قیمت (میلیون تومان)', 'رنک تراشه', 'تراشه حدس زده شده', 'تراشه واقعی', 'برند', 'لینک',];
COLUMN_SORTS   = [  ['قیمت (میلیون تومان)',1], ['رنک تراشه'],  ]; // [header='', ascend=0|1]

ranks = await (await fetch('ranks.json')).json();
chips = ranks.map(i=>i[0]);

r = await (await fetch('products.json')).json();
// Object.keys(r).map(k=>r[k].specs.find(i=>i.title=='پردازنده')?.attributes.find(i=>i.title=='تراشه')?.values[0]).filter(i=>i)

for (let k of Object.keys(r)) {
	// let chip = r[k].specs.find(i=>i.title=='تراشه')?.values[0]; // prev structure
	let chip = r[k].specs.find(i=>i.title=='پردازنده')?.attributes.find(i=>i.title=='تراشه')?.values[0];
	
	if (!chip) continue;
	
	let cchip = chip
		.replace(/(chipset)|(chispet)|(chipest)/gi, '')
		.replace(/\(.*\)/g, '')
		.replace(/(4|5)G/g, '')
		.trim();
	
	let distances = chips.map((v,i) => [wordmatch(cchip, v), i]);
	let sortedDistances = distances.sort((a,b)=>b[0]-a[0]);
	
	let bestMatchIdx = sortedDistances[0][1];
	let bestMatch = ranks[bestMatchIdx];
	
	let [name, rank] = bestMatch;
	
	r[k].chip_bestmatch_rank = rank;
	r[k].chip_bestmatch_name = name;
	
	r[k].chip = cchip;
}


rows = Object.keys(r).map(k => {
	let p = r[k];
	
	let price = +(p.price_selling / 1e7).toFixed(1);
	let url   = 'https://digikala.com' + p.url;
	let rank  = p.chip_bestmatch_rank || -1;
	let acc   = p.chip_bestmatch_accuracy || -1;
	let match = p.chip_bestmatch_name || '';
	let real  = p.chip || '';
	let brand = p.brand_title_en;
	
	return [price, rank, match, real, brand, url];
});

COLUMN_SORTS.forEach(([header, ascend]) => {
	let j = COLUMN_HEADERS.indexOf(header);
	ascend
		? rows.sort((a,b)=> a[j] - b[j])
		: rows.sort((a,b)=> b[j] - a[j]);
});

if (MAKE_GRID_PAGE) {
	let ranks = [...new Set(rows.map(i=>i[1]))]
	let rowsByRanks = ranks.map(i => rows.filter(j=> j[1] === i));
	
	let gridItems = rowsByRanks.map(rows => {
		let rank = rows[0][1];
		
		let trs = rows.map(row => {
			let price = row[0];
			let link  = row[row.length-1];
			let tr = ''
				+'<tr>'
				+	`<td>${ price }</td>`
				+	'<td>'
				+		`<a href="${link}" target="_blank"><strong>➚</strong></a>`
				+	'</td>'
				+'</tr>';
			return tr;
		}).join('');
		
		let item =  ''
			+'<div>'
			+`<h3>${ rank }</h3>`
			+	'<table>'
			+		`${ trs }`
			+	'</table>'
			+'</div>';
		
		return item;
	}).join('');
	
	let html = `<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
<meta charset="utf-8" />
<style>
table { border-collapse: collapse; }
tr { border-bottom: 1px solid black; }

#_g > div {
	float: left;
	margin: 2px 3px;
	border: 1px solid black;
}

#_g > div > h3 {
	margin: 0;
	text-align: center;
	background: black;
	color: white;
}
</style>

<div id="_g">
	${ gridItems }
</div>`;
	
	download(FILENAME+'.grid.html', html);
}

if (ADD_ROWNUM_COLUMN) {
	COLUMN_HEADERS = ['ردیف', ...COLUMN_HEADERS];
	rows = rows.map((v,i) => [i+1, ...v]);
}

if (MAKE_HTML) {
	let linkIdx = COLUMN_HEADERS.length - 1;
	
	let html = `<!DOCTYPE html>
<meta charset="utf-8" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tabulator-tables/dist/css/tabulator.min.css" />
<div id="mytable"></div>
<script type="module">
import {
	Tabulator, SortModule, FormatModule, ResizeColumnsModule
} from 'https://cdn.jsdelivr.net/npm/tabulator-tables@5.4.2/dist/js/tabulator_esm.min.js';
Tabulator.registerModule([SortModule, FormatModule, ResizeColumnsModule]);

let columns = ${ JSON.stringify(
	COLUMN_HEADERS.map((v,i)=> {
		let o = {title: v, field: ''+i};
		if (i === linkIdx) o.formatter = 'html';
		return o;
	})
) };

let data = ${ JSON.stringify(
	rows.map(i => Object.fromEntries(
		i.map((v,j) => [j, j===linkIdx ? '<a href="'+v+'" target="_blank">لینک</a>' : v])
	))
) };

new Tabulator('#mytable', {columns, data, layout:'fitData'});
</script>`;
	
	download(FILENAME+'.html', html);
}

if (MAKE_CSV) {
	let text = [COLUMN_HEADERS, ...rows].map(i =>
		i.map(j => typeof j === 'string' && j.includes(',') ? JSON.stringify(j) : j).join(',')
	).join('\n');
	
	download(FILENAME+'.csv', text, MAKE_CSV && UTF8_BOM_CSV);
}

function wordmatch(a='', b='') {
	[a, b] = [a, b].map(i=> i.split(' '));
	return a.map(i=> b.map(j=>i.match(new RegExp(j,'i'))).filter(i=>i).length).filter(i=>i).length / b.length;
}

function download(filename,text,utf8bom) {let a=document.createElement('a');a.setAttribute('href',
'data:text/plain;charset=utf-8,'+(utf8bom?'\ufeff':'')+encodeURIComponent(text));a.setAttribute('download',filename);
a.style.display='none';document.body.append(a);a.click();a.remove();}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// get data

// get rank data
// https://nanoreview.net/en/soc-list/rating
ranks = [...document.querySelector('.table-list tbody').querySelectorAll('tr')].map(i=> [
	i.querySelector('span.text-gray-small').innerText,
	i.querySelector('a[style]').innerText,
	+i.querySelector('div.table-list-score-box').innerText,
]).map(([a,b,c])=> [a+' '+b, c]);
ranks.push(...[

["Samsung Exynos 1200",50],
["MediaTek Dimensity 810",46],
["هشت هسته‌ای",39],
["Qualcomm Snapdragon 680",37],
["MediaTek Helio P70",29],
["MediaTek Helio P20",28],
["Samsung Exynos 850",28],
["Unisoc T606",26],
["Unisoc T610",26],
["MediaTek Helio P35 MT6765",24],
["MediaTek Helio G35",24],
["MediaTek Helio G25",23],
["HiSilicon Kirin 950",23],
["Qualcomm Snapdragon 630",23],
["JLQ JR510",23],
["MediaTek Helio A25",22],
["MediaTek Helio A22 MT6761",21], ["MT6761VWB",21],
["Mediatek Helio P23",21],
["Mediatek Helio P22",21],
["Qualcomm Snapdragon 450",21],
["Qualcomm Snapdragon 429",20],
["Mediatek Helio A20 MT6761D",19],
["Unisoc SC9863A",19],
["Qualcomm Snapdragon 430",18],
["Qualcomm Snapdragon 616 MSM8939",16],
["Qualcomm Snapdragon 615 MSM8939",14],
["Qualcomm Snapdragon 425",14],
["Mediatek MT6739",14],
["Unisoc SC7731E",13],
["Unisoc SC7331E",12],
["Mediatek MT6735",12],
["Qualcomm Snapdragon 210 MSM8909",9],
["Mediatek MT6260A",5],
["Unisoc SC6553",2],
["Unisoc SC6531E",2], ["6531E",2],
["Unisoc 6531F",2],
["Unisoc T107",2],
["Mediatek MT6261",1],
["Qualcomm Snapdragon 215",1]

]);
download('ranks.json', JSON.stringify(ranks));


// get mobile prices, specs, etc
// https://www.digikala.com/search/category-mobile-phone/product-list/
PAGES = 100;
sorts = {HIGHEST_PRICE: 21, MOST_SELLS: 7, NEWEST: 1};
sort = sorts.HIGHEST_PRICE;
r = {};
for (let i=1; i<=PAGES; i++) {
	let url = new URL('https://api.digikala.com/v1/categories/mobile-phone/search/');
	url.searchParams.set('sort', sort);
	//url.searchParams.set('has_selling_stock', 1);
	url.searchParams.set('page', i);
	let res = await (await fetch(url)).json();
	
	let products = res.data.products;
	//let productsWithPrice = products.filter(i=> !Array.isArray(i.default_variant));
	
	for (let i of products) {
		let id = i.id;
		let dv = i.default_variant;
		
		if (!Array.isArray(dv)) {/*currently in stock*/
			let price_selling_firstpage = dv.price.selling_price;
			r[id] = {price_selling_firstpage};
			continue;
		}
		// currently not in stock
		
		let targ = i.properties.min_price_in_last_month;
		let hasHadPriceInLastMonth = typeof targ !== 'undefined' && targ !== 0;
		
		if (hasHadPriceInLastMonth) {
			// but has been in stock in last month
			r[id] = {};
		}
	}
}

avg = a => a.reduce((r,i) => r+i) / a.length;
sleep = ms => new Promise(r=> setTimeout(r,ms));

for (let id of Object.keys(r)) {
	//let res = await (await fetch(`https://api.digikala.com/v1/product/${id}/`)).json();
	let res = await (await fetch(`https://api.digikala.com/v2/product/${id}/`)).json();
	
	let p = res.data.product;
	
	let o = {
		price_rrp:      p?.default_variant?.price?.rrp_price,
		price_selling:  p?.default_variant?.price?.selling_price,
		rate_num:       p?.default_variant?.statistics?.total_rate,
		rate_count:     p?.default_variant?.statistics?.total_count,
	
		brand_title_en: p?.brand?.title_en,
		brand_title_fa: p?.brand?.title_fa,
		
		title_en:       p?.title_en,
		title_fa:       p?.title_fa,
		
		url: p?.url?.uri,
		
		// specs: p?.specifications[0]?.attributes, // prev structure
		specs: p?.specifications,
	};
	
	let dv = p.default_variant;
	let inStock = !Array.isArray(dv);
	
	if (inStock) {
		r[id] = {...r[id], ...o};
		continue;
	}
	
	if (!inStock) {
		//let res = await (await fetch(`https://api.digikala.com/v1/product/${id}/price-chart/`)).json();
		// let pc = res.data.price_chart;
		let mkReq = async () => (await (await fetch(`https://api.digikala.com/v1/product/${id}/price-chart/`)).json());
		let res = await mkReq();
		while (res.status === 400 && res.message === 'بیش از حد مجاز تلاش کرده‌اید') {
			await sleep(20_000);
			res = await mkReq();
		}
		let pc;
		try { pc = res.data.price_chart } catch (e) { console.log(e) };
		
		if (pc.length) {
		
			let prices = pc.map(i => {
				let hist = i.history;
				if (!hist.length) return '';
				let histPrices = hist.map(i=> +i.selling_price);
				let price = avg(histPrices); // hist[hist.length-1].selling_price;
				return +price;
			}).filter(i=>i!=='');
			
			if (prices.length) {
				let finalPrice = avg(prices);
				o.price_selling = finalPrice;
				r[id] = {...r[id], ...o};
				continue;
			}
		}
	}
	
	delete r[id];
}

download('products.json', JSON.stringify(r));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@