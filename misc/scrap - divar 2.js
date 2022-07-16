// https://divar.ir/s/tehran/rent-apartment

IGNORES = ['اندیشه','بومهن','پاکدشت','پردیس','پرند','رباط کریم','رودهن','شریف آباد','شهر قدس','شهریار','فشم','قرچک','قیام دشت','لواسان','ورامین'];
MAX_RENT = 0.5;
MAX_CREDIT = 450;

/* all possible columns:
	title, when, hood, sqmeter, builtyear, rooms, credit, rent, convertable, convcredit, floor, totalfloors, lastfloor, type, elevator, parking, storage, singlefloor, stove, url */
COLUMNS        = ['convcredit', 'title', 'when', 'hood', 'singlefloor', 'stove', 'floor', 'parking', 'elevator', 'sqmeter', 'builtyear', 'rooms', 'storage', 'url'];
COLUMN_HEADERS = ['ودیعه', 'عنوان', 'زمان', 'محل', 'تک‌واحدی', 'گازرومیزی', 'طبقه', 'پارکینگ', 'آسانسور', 'متراژ', 'سال‌ساخت', 'اتاق', 'انباری', 'لینک'];
COLUMN_SORTS   = [  ['گازرومیزی'], ['زمان',1], ['تک‌واحدی'], ['آسانسور'], ['پارکینگ'],  ]; // [header, numerical, desc]

EACH_SCROLL_HEIGHT = 850;
MAX_ITEMS = Infinity;
WAIT_AFTER_EACH_SCROLL = 1000;
WAITED_REQUEST_STYLE = true; // takes longer but guaranteed (false: faster + risk of pending for too long)
WAIT_AFTER_EACH_REQUEST = 1000;
WAIT_BEFORE_RETRY = 2000;
MAKE_HTML = true;
MAKE_CSV = true;
UTF8_BOM_CSV = true;

sleep = ms => new Promise(r=> setTimeout(r,ms));

window.scrollTo(0,0);
r = [];
prevY = -1;
tot = 0;
while (window.scrollY > prevY && tot < MAX_ITEMS) {
	prevY = window.scrollY;
	window.scrollBy(0,EACH_SCROLL_HEIGHT);
	await sleep(WAIT_AFTER_EACH_SCROLL);
	
	r.push(
		[...document.querySelectorAll('.post-card-item')].map(i => {
		
			let title = i.querySelector('a .kt-post-card__title').innerText;
			let time = i.querySelector('a .kt-post-card__bottom-description').innerText;
			let link = decodeURI(i.querySelector('a').href);
			
			if ( IGNORES.some(i=> title.includes(i) || time.includes(i)) ) return;
			
			return link;
		}).filter(i=>i)
	);
	
	tot = new Set(r.flat()).size;
	console.log(tot);
}
r = r.flat();
r = [...new Set(r)];


t = Date.now();
let qu = async a => { let p=[]; for (let i of a) await sleep(WAIT_AFTER_EACH_REQUEST), p.push(fetch(i)); return p; };
let proms = await Promise.allSettled(WAITED_REQUEST_STYLE ? await qu(r) : r.map(i=>fetch(i)));
while (proms.some(i=>i.reason || i.value.status !== 200)) {
	proms.forEach((v,i)=> v?.value?.status === 404 ? proms[i]='' : 0);
	let ers = proms.map((v,i)=> v?.reason || v?.value?.status !== 200 ? i : -1).filter(i=>i>-1);
	await sleep(WAIT_BEFORE_RETRY);
	(await Promise.allSettled( WAITED_REQUEST_STYLE ? await qu(ers.map(i=>r[i])) : ers.map(i=>fetch(r[i])) ))
		.forEach((v,i) => proms[ers[i]] = v);
}
let texts = await Promise.all( proms.map(i=> i.value ? i.value.text() : '') );
console.log('took', (((Date.now()-t) / 1000) / 60).toFixed(2), ' min');


en = {'۰':'0', '۱':'1', '۲':'2', '۳':'3', '۴':'4', '۵':'5', '۶':'6', '۷':'7', '۸':'8', '۹':'9'};
toEn = s => +[...s].map(i => en[i]).join('');

rr = [];
for (let [idx, text] of texts.entries()) {
	if (!text) continue;
	let _document = new DOMParser().parseFromString(text, mimeType='text/html');

	let title = _document.querySelector('.kt-page-title__title');
	if (!title) continue;
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
	
	let credit      = itms.get('ودیعه');
	let rent        = itms.get('اجارهٔ ماهانه');
	let convertable = itms.get('ودیعه و اجاره');
	let floor       = itms.get('طبقه');
	
	if (_document.querySelector('.convert-slider')) {
		[credit, rent] = [..._document.querySelectorAll('.convert-slider .kt-group-row-item--info-row .kt-group-row-item__value')].map(i=>i.innerText);
	}
	
	credit = ['مجانی','توافقی'].includes(credit) ? 0 : toEn(credit) / 1e6;
	rent   = ['مجانی','توافقی'].includes(rent)   ? 0 : toEn(rent)   / 1e6;
	
	convertable = convertable === 'قابل تبدیل' ? 'بله' : convertable === 'غیر قابل تبدیل' ? 'خیر' : '';
	
	if (convertable === 'خیر' && rent > MAX_RENT) continue;
	
	let convcredit =
		credit >  0 && rent >  0 ?  +(credit + rent / 0.03).toFixed() :
		credit >  0 && rent <= 0 ?  credit :
		credit <= 0 && rent >  0 ?  +(rent / 0.03).toFixed() :
		credit <= 0 && rent <= 0 ?  'توافقی' :
		'';
	
	if (+convcredit > MAX_CREDIT) continue;
	
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
	let singlefloor = ['تک واحدی', 'تکواحدی', 'تک واحد', 'تکواحد', 'یک واحدی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';
	let stove       = ['گاز رومیزی', 'گازرومیزی', 'اجاق گاز رومیزی', 'اجاق رومیزی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';
	
	let url = r[idx];
	
	let allCols = {title, when, hood, sqmeter, builtyear, rooms, credit, rent, convertable, convcredit, floor, totalfloors, lastfloor, type, elevator, parking, storage, singlefloor, stove, url};
	
	let row = COLUMNS.map(k => allCols[k]);
	rr.push(row);
}

if (MAKE_CSV) {
	COLUMN_SORTS.map(([header, numerical, desc]) => {
		let j = COLUMN_HEADERS.indexOf(header);
		if (numerical) {
			desc
				? rr.sort((a,b)=> b[j] - a[j])
				: rr.sort((a,b)=> a[j] - b[j]);
		} else {
			desc
				? rr.sort((a,b)=> b[j].localeCompare(a[j],'fa'))
				: rr.sort((a,b)=> a[j].localeCompare(b[j],'fa'));
		}
	});
	
	_rr = rr.map((v,i) => [i+1, ...v]);
	
	text = [['ردیف',...COLUMN_HEADERS], ..._rr].map(i =>
		i.map(j => typeof j === 'string' && j.includes(',') ? JSON.stringify(j) : j).join(',')
	).join('\n');
	
	download('out.csv', text);
}

if (MAKE_HTML) {
	linkIdx = COLUMN_HEADERS.indexOf('لینک');
	
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
	
	download('out.html', html);
}

function download(filename, text) {
	var el = document.createElement('a');
	el.setAttribute('href', 'data:text/plain;charset=utf-8,' + (MAKE_CSV && UTF8_BOM_CSV ? '\ufeff' : '')+encodeURIComponent(text));
	el.setAttribute('download', filename);
	el.style.display = 'none';
	document.body.appendChild(el);
	el.click();
	document.body.removeChild(el);
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// check all checkboxes in neighborhood modal (alternative to `IGNORES`)

/*
scroller = document.querySelector('.multi-select-modal__scroll');
itemsContainer = scroller.querySelector('.virtuoso-grid-list');
max = scroller.scrollHeight - scroller.clientHeight;
sleep = ms => new Promise(r=> setTimeout(r,ms));

allNames = [];

while (scroller.scrollTop < max) {
	let cbs = itemsContainer.querySelectorAll('input[type="checkbox"]');
	
	let names = [...itemsContainer.querySelectorAll('a.kt-control-row__title')].map(i=>i.innerText);
	allNames = [...allNames, ...names];
	
	for (let cb of cbs) {
		if (cb.checked) continue;
		cb.dispatchEvent(new Event('click',{bubbles:true}));
	}
	
	let lastChild = itemsContainer.querySelector(':scope > div:last-child');
	lastChild.scrollIntoView();
	await sleep(500);
}
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@