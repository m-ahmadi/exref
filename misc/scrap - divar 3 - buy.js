// https://divar.ir/s/tehran/buy-apartment?price=-1600000000

IGNORES = [];

/* all possible columns:
	title, when, hood, sqmeter, builtyear, rooms, price, priceMeter, floor, totalfloors, lastfloor, type, elevator, parking, storage, singlefloor, stove, url */
COLUMNS        = ['price', 'priceMeter', 'when', 'title', 'hood', 'lastfloor', 'floor', 'totalfloors', 'parking', 'elevator', 'singlefloor', 'url'];
COLUMN_HEADERS = ['قیمت', 'متری', 'زمان', 'عنوان', 'محل', 'طبقه‌آخر', 'طبقه', 'کل‌طبقات', 'پارکینگ', 'آسانسور', 'تک‌واحدی', 'لینک'];
COLUMN_SORTS   = [  ['تک‌واحدی'], ['آسانسور'], ['پارکینگ'], ['زمان',1], ['قیمت',1], ['طبقه',1,1], ['طبقه‌آخر'],  ];

MAX_ITEMS = Infinity;
WAIT_AFTER_EACH_SCROLL = 1000;
WAIT_AFTER_EACH_REQUEST = 1000;
MAKE_HTML = true;
MAKE_CSV = true;
MAKE_CSV_ROWNUM_COL = true;
UTF8_BOM_CSV = true;
FILENAME = 'out';

sleep = ms => new Promise(r=> setTimeout(r,ms));
en = {'۰':'0', '۱':'1', '۲':'2', '۳':'3', '۴':'4', '۵':'5', '۶':'6', '۷':'7', '۸':'8', '۹':'9', '.':'.'};
toEn = s => +[...s].map(i => en[i]).join('');

window.scrollTo(0,0);
r = [];
postsContainer = document.querySelector('.browse-post-list-_-f3858');
prevY = -1;
tot = 0;
ignores = [ ...IGNORES, ...IGNORES.filter(i=> (/\s+/g).test(i)).map(i=> i.replace(/\s/g, '\u200C')) ];
while (window.scrollY > prevY && tot < MAX_ITEMS) {
	prevY = window.scrollY;
	let posts = [...postsContainer.querySelectorAll('.post-card-item-_-af972.kt-col-6-_-bee95.kt-col-xxl-4-_-e9d46')];
	let links = posts.map(i => {
		let title = i.querySelector('a .kt-post-card__title').innerText;
		let time = i.querySelector('a .kt-post-card__bottom-description').innerText;
		let link = decodeURI(i.querySelector('a').href);
		if ( ignores.some(i=> title.includes(i) || time.includes(i)) ) return;
		return link;
	}).filter(i=>i);
	r = [...new Set(r.concat(links))];
	tot = r.length;
	console.log(tot);
	postsContainer.querySelector(':scope > div:last-child').scrollIntoView();
	await sleep(WAIT_AFTER_EACH_SCROLL);
}


t = Date.now();
rr = [];
links = new Map(r.map(i=> [i, undefined]));
tot = links.size;
while (links.size > 0) {
	let proms = [];
	for (let link of links.keys()) {
		let prom = fetch(link).then(resp => {
			if (resp.status == 200) {
				links.delete(link);
				console.log(tot-links.size+'/'+tot);
				resp.text().then(text => {
					let row = extractRow(text, link);
					if (row) rr.push(row);
				});
			} else if (resp.status === 404) {
				links.delete(link);
				console.log(tot-links.size+'/'+tot);
			}
		}).catch(()=> undefined);
		proms.push(prom);
		await sleep(WAIT_AFTER_EACH_REQUEST);
	}
	await Promise.allSettled(proms);
}
console.log('took', (((Date.now()-t) / 1000) / 60).toFixed(2), ' min');


if (MAKE_HTML) {
	linkIdx = COLUMN_HEADERS.length - 1;
	
	html = rr.map(i =>
		'<tr>'+ i.map((v,j) => j===linkIdx ? `<td><a href="${v}" target="_blank">لینک</a></td>` : `<td>${v}</td>`).join('') +'</tr>'
	).join('');
	
	html = `<meta charset="utf-8" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tabulator-tables/dist/css/tabulator.min.css" />
<table id="mytable">
	<thead>
		<tr> ${COLUMN_HEADERS.map(i=> '<th>'+ i +'</th>').join('')} </tr>
	</thead>	
	${html}
</table>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables@4.9.3/dist/js/tabulator_core.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables@4.9.3/dist/js/modules/sort.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables@4.9.3/dist/js/modules/resize_columns.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables@4.9.3/dist/js/modules/html_table_import.js"></script>
<script>
table = new Tabulator('#mytable');
table.setSort(${ JSON.stringify(COLUMN_SORTS.map(([column,,desc]) => ({column, dir: desc?'desc':'asc'}))) });
</script>`;
	
	download(FILENAME+'.html', html);
}

if (MAKE_CSV) {
	COLUMN_SORTS.map(([header, numericalSort, descSort]) => {
		let j = COLUMN_HEADERS.indexOf(header);
		if (numericalSort) {
			descSort
				? rr.sort((a,b)=> b[j] - a[j])
				: rr.sort((a,b)=> a[j] - b[j]);
		} else {
			descSort
				? rr.sort((a,b)=> b[j].localeCompare(a[j],'fa'))
				: rr.sort((a,b)=> a[j].localeCompare(b[j],'fa'));
		}
	});
	
	let finalRows;
	if (MAKE_CSV_ROWNUM_COL) {
		let _rr = rr.map((v,i) => [i+1, ...v]);
		finalRows = [['ردیف',...COLUMN_HEADERS], ..._rr];
	} else {
		finalRows = [COLUMN_HEADERS, ...rr];
	}
	
	text = finalRows.map(i =>
		i.map(j => typeof j === 'string' && j.includes(',') ? JSON.stringify(j) : j).join(',')
	).join('\n');
	
	download(FILENAME+'.csv', text);
}


function extractRow(text='', url='') {
	if (!text) return;
	let _document = new DOMParser().parseFromString(text, mimeType='text/html');

	let title = _document.querySelector('.kt-page-title__title');
	if (!title) return;
	title = title.innerText;
	
	let sub = _document.querySelector('.kt-page-title__subtitle').innerText;
	sub = sub.split(' | ')[0];
	let [when, hood] = sub.split('، ');
	when = when.split(' در ')[0];

	let n;
	let K = 1 / (24*60);
	let kk = {'۰':0, '۱':1, '۲':2, '۳':3, '۴':4, '۵':5, '۶':6, '۷':7, '۸':8, '۹':9};
	
	if (/لحظاتی پیش/.test(when)) {
		n = K / 2;
	} else if (/دقایقی پیش/.test(when)) {
		n = K * 2;
	} else if (/یک ربع پیش/.test(when)) {
		n = K * 15;
	} else {
		if (/دقیقه/.test(when)) {
			n = when.split(' دقیقه ')[0];
			n = +n.replace(/([۰۱۲۳۴۵۶۷۸۹])/g, (m,p1)=> kk[p1]);
		} else if (/ساعت/.test(when)) {
			let _kk = {'نیم':0.1, ...kk};
			n = when.split(' ساعت ')[0];
			n = +n.replace(/([۰۱۲۳۴۵۶۷۸۹]|نیم)/g, (m,p1)=> _kk[p1]);
			n = n * 60;
		} else if (/روز/.test(when)) {
			let _kk = {'دی':1, 'پری':2, ...kk};
			n = when.split('روز')[0];
			n = +n.replace(/([۰۱۲۳۴۵۶۷۸۹]|دی|پری)/g, (m,p1)=> _kk[p1]);
			n = n * (24*60);
		} else if (/هفته/.test(when)) {
			if (/هفتهٔ/.test(when)) {
				n = 1;
			} else {
				n = when.split(' هفته ')[0];
				n = +n.replace(/([۰۱۲۳۴۵۶۷۸۹])/g, (m,p1)=> kk[p1]);
			}
			n = n * (7*24*60);
		} else if (/ماه/.test(when)) {
			n = when.split(' ماه ')[0];
			n = +n.replace(/([۰۱۲۳۴۵۶۷۸۹])/g, (m,p1)=> digs[p1]);
			n = n * (30*24*60);
		}
		n = n * K;
	}
	when = n % 1 ? n.toFixed(2) : n;
	
	
	let [sqmeter, builtyear, rooms] = [..._document.querySelector('.kt-group-row').querySelectorAll('.kt-group-row-item__value')].map(i=> i.innerText);
	[sqmeter, builtyear, rooms] = [sqmeter, builtyear, rooms].map(i => i ? toEn(i) : '');

	let itms = [..._document.querySelectorAll('.post-page__section--padded .kt-base-row.kt-base-row--large.kt-unexpandable-row')].map(i =>
		[...i.querySelectorAll('div > p')].map(i=> i.innerText)
	);
	itms = new Map(itms);
	
	let price      = itms.get('قیمت کل');
	let priceMeter = itms.get('قیمت هر متر');
	let floor      = itms.get('طبقه');
	
	price      = price      === 'توافقی' ? 0 : toEn(price) / 1e9;
	priceMeter = priceMeter === 'توافقی' ? 0 : +(toEn(priceMeter) / 1e6).toFixed(1);
	
	let totalfloors, lastfloor;
	if (floor) {
		if (/از/.test(floor)) {
			let [actualfloor, _totalfloors] = floor.split(' از ').map(i => i === 'همکف' ? 0 : toEn(i));
			floor = actualfloor;
			totalfloors = _totalfloors;
			lastfloor = actualfloor === _totalfloors ? 'بله' : 'نه';
		} else {
			floor = floor === 'همکف' ? 0 : toEn(floor);
			totalfloors = '';
			lastfloor = 'مبهم'
		}
	} else {
		totalfloors = 'مبهم';
		lastfloor = 'مبهم'
	}
	
	let type =
		itms.has('آگهی‌دهنده') && itms.get('آگهی‌دهنده') === 'شخصی' ? 'شخصی' :
		(itms.has('آگهی‌دهنده') && ['املاک','مشاور املاک','آژانس املاک'].includes(itms.get('آگهی‌دهنده'))) || itms.has('آژانس املاک') ? 'املاک' :
		'';
	
	let [elevator, parking, storage] = [..._document.querySelectorAll('span.kt-group-row-item__value.kt-body.kt-body--stable')].map(i=>i.innerText);
	
	elevator = elevator === 'آسانسور ندارد' ? 'خیر' : 'بله';
	parking = parking === 'پارکینگ ندارد' ? 'خیر' : 'بله';
	storage = storage === 'انباری ندارد' ? 'خیر' : 'بله';

	let descs = _document.querySelector('.kt-description-row__text.kt-description-row__text--primary').innerText;
	let singlefloor = ['تک واحدی', 'تکواحدی', 'تک واحد', 'تکواحد', 'یک واحدی'].some(i => (title+'\n'+descs).includes(i)) ? 'بله' : 'خیر';
	let stove       = ['گاز رومیزی', 'گازرومیزی', 'اجاق گاز رومیزی', 'اجاق رومیزی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';
	
	let allCols = {title, when, hood, sqmeter, builtyear, rooms, price, priceMeter, floor, totalfloors, lastfloor, type, elevator, parking, storage, singlefloor, stove, url};
	
	let row = COLUMNS.map(k => allCols[k]);
	return row;
}

function download(filename, text) {
	let a = document.createElement('a');
	a.setAttribute('href', 'data:text/plain;charset=utf-8,' + (MAKE_CSV && UTF8_BOM_CSV ? '\ufeff' : '')+encodeURIComponent(text));
	a.setAttribute('download', filename);
	a.style.display = 'none';
	document.body.append(a);
	a.click();
	a.remove();
}
