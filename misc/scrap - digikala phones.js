MAKE_HTML = true;
MAKE_CSV = true;
UTF8_BOM_CSV = true;
FILENAME = 'out';

COLUMN_HEADERS = ['قیمت (میلیون تومان)', 'رنک تراشه', 'دقت رنک', 'تراشه حدس زده شده', 'تراشه واقعی', 'برند', 'لینک',];
COLUMN_SORTS   = [  ['دقت رنک'], ['قیمت (میلیون تومان)',1], ['رنک تراشه'],  ]; // [header='', ascend=0|1]

ranks = await (await fetch('ranks.json')).json();
chips = ranks.map(i=>i[0]);

r = await (await fetch('products.json')).json();
// Object.keys(r).map(k=>r[k].specs.find(i=>i.title=='تراشه')?.values[0]).filter(i=>i)

for (let k of Object.keys(r)) {
	let chip = r[k].specs.find(i=>i.title=='تراشه')?.values[0];
	
	if (!chip) continue;
	
	let cchip = chip
		.replace(/(chipset)|(chispet)|(chipest)/gi, '')
		.replace(/\(.*\)/g, '')
		.trim();
	
	let distances = chips.map((v,i) => [levdistance(cchip, v), i]);
	let sortedDistances = distances.sort((a,b)=>a[0]-b[0]);
	
	let least = sortedDistances[0][0];
	let leastCount = sortedDistances.filter(i => i[0] === least).length;
	let accuracy = least === 0 ? 1 : 1 / (least * leastCount);
	let finalAccuracy = Math.round(accuracy * 100);
	
	let bestMatchIdx = sortedDistances[0][1];
	let bestMatch = ranks[bestMatchIdx];
	
	let [name, rank] = bestMatch;
	
	r[k].chip_bestmatch_rank = rank;
	r[k].chip_bestmatch_name = name;
	r[k].chip_bestmatch_accuracy = finalAccuracy;
	
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
	
	return [price, rank, acc, match, real, brand, url];
});

COLUMN_SORTS.forEach(([header, ascend]) => {
	let j = COLUMN_HEADERS.indexOf(header);
	ascend
		? rows.sort((a,b)=> a[j] - b[j])
		: rows.sort((a,b)=> b[j] - a[j]);
});

if (MAKE_HTML) {
	linkIdx = COLUMN_HEADERS.length - 1;
		
	html = `<meta charset="utf-8" />
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



function download(filename,text,utf8bom) {let a=document.createElement('a');a.setAttribute('href',
'data:text/plain;charset=utf-8,'+(utf8bom?'\ufeff':'')+encodeURIComponent(text));a.setAttribute('download',filename);
a.style.display='none';document.body.append(a);a.click();a.remove();}

function levdistance(r,f){if(r===f)return 0;if(r.length>f.length){let t=r;r=f,f=t}let[t,e]=[r.length,f.length];
for(;t>0&&r.charCodeAt(t-1)===f.charCodeAt(e-1);)t--,e--;let n=0;for(;n<t&&r.charCodeAt(n)===f.charCodeAt(n);)n++;
if(t-=n,e-=n,0===t||e<3)return e;let o,i,l,u,c,a,d,s,v,b,g,h,j=0,k=[];for(o=0;o<t;o++)k.push(o+1),
k.push(r.charCodeAt(n+o));let m=k.length-1;for(;j<e-3;)for(v=f.charCodeAt(n+(i=j)),b=f.charCodeAt(n+(l=j+1)),
g=f.charCodeAt(n+(u=j+2)),h=f.charCodeAt(n+(c=j+3)),a=j+=4,o=0;o<m;o+=2)d=k[o],s=k[o+1],i=p(d,i,l,v,s),
l=p(i,l,u,b,s),u=p(l,u,c,g,s),a=p(u,c,a,h,s),k[o]=a,c=u,u=l,l=i,i=d;for(;j<e;)for(v=f.charCodeAt(n+(i=j)),
a=++j,o=0;o<m;o+=2)d=k[o],k[o]=a=p(d,i,a,v,k[o+1]),i=d;return a;function p(r,f,t,e,n){return r<f||t<f?r>t?t+1:r+1:e===n?f:f+1}}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// get data

// get rank data
// https://nanoreview.net/en/soc-list/rating
ranks = [...document.querySelector('.table-list tbody').querySelectorAll('tr')].map(i=> [
	i.querySelector('span.text-gray-small').innerText,
	i.querySelector('a[style]').innerText,
	+i.querySelector('div.table-list-score-box').innerText,
]).map(([a,b,c])=> [a+' '+b, c]);
download('ranks.json', JSON.stringify(ranks));


// get mobile prices, specs, etc
// https://www.digikala.com/search/category-mobile-phone/product-list/
PAGES = 100;
r = {};
for (let i=1; i<=PAGES; i++) {
	let url = new URL('https://api.digikala.com/v1/categories/mobile-phone/search/?sort=21'); // has_selling_stock=1
	url.searchParams.set('page', i);
	let res = await (await fetch(url)).json();
	
	let itemsWithPrice = res.data.products.filter(i=> Array.isArray(i.default_variant) ? 0 : i);
	
	for (let i of itemsWithPrice) {
		let id = i.id;
		let price_selling_firstpage = i.default_variant.price.selling_price;
		r[id] = {price_selling_firstpage};
	}
}

for (let id of Object.keys(r)) {
	let res = await (await fetch(`https://api.digikala.com/v1/product/${id}/`)).json();
	
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
		
		specs: p?.specifications[0]?.attributes,
	};
	
	r[id] = {...r[id], ...o};
}

download('products.json', JSON.stringify(r));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@