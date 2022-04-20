// https://divar.ir/s/tehran/rent-apartment?credit=-350000000&rent=0-0&floor=4-30&has-photo=true&elevator=true&parking=true&rent_to_single=true
// https://divar.ir/s/tehran/rent-apartment?credit=-450000000&rent=0-500000&floor=3-30&has-photo=true&elevator=false&parking=false&rent_to_single=true

ignore = ['اندیشه','بومهن','پاکدشت','پردیس','پرند','رباط کریم','رودهن','شریف آباد','شهر قدس','شهریار','فشم','قرچک','قیام دشت','لواسان','ورامین'];
MAX_RENT = 0.5;
MAX_CREDIT = 450;

eachScrollHeight = 850;
wait = 1000;
makeHTML = true;
makeCSV = true;
UTF8_BOM_CSV = true;

sleep = ms => new Promise(r=> setTimeout(r,ms));

window.scrollTo(0,0);
r = [];
prevY = -1;
while (window.scrollY > prevY) {
	prevY = window.scrollY;
	window.scrollBy(0,eachScrollHeight);
	await sleep(wait);
	
	r.push(
		[...document.querySelectorAll('.post-card-item')].map(i => {
		
			let title = i.querySelector('a .kt-post-card__title').innerText;
			let time = i.querySelector('a .kt-post-card__bottom-description').innerText;
			let link = decodeURI(i.querySelector('a').href);
			
			if ( ignore.some(i=> title.includes(i) || time.includes(i)) ) return;
			
			return link;
		}).filter(i=>i)
	);
}
r = r.flat();
r = [...new Set(r)];


t = performance.now();
let qu = async a => { let p=[]; for (let i of a) await sleep(1000), p.push(fetch(i)); return p; };
let proms = await Promise.allSettled(await qu(r)); // r.map(i=> fetch(i))
while (proms.some(i=>i.reason || i.value.status !== 200)) {
	let ers = proms.map((v,i)=> v.reason || v.value.status !== 200 ? i : -1).filter(i=>i>-1);
	await sleep(2000);
	(await Promise.allSettled( await qu(ers.map(i=>r[i])) )) // ers.map(i=> fetch(r[i]))
		.forEach((v,i) => proms[ers[i]] = v);
}
let texts = await Promise.all( proms.map(i=> i.value.text()) );
console.log('took', (((performance.now()-t) / 1000) / 60).toFixed(2), ' min');


en = {'۰':'0', '۱':'1', '۲':'2', '۳':'3', '۴':'4', '۵':'5', '۶':'6', '۷':'7', '۸':'8', '۹':'9'};
toEn = s => +[...s].map(i => en[i]).join('');

rr = [];
for (let [idx, text] of texts.entries()) {
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

	let itms = [..._document.querySelectorAll('.post-info .kt-base-row.kt-base-row--large.kt-unexpandable-row')].map(i =>
		[...i.querySelectorAll('div > p')].map(i=> i.innerText)
	);
	itms = new Map(itms);
	
	let credit      = itms.get('ودیعه');
	let rent        = itms.get('اجارهٔ ماهانه');
	let convertable = itms.get('ودیعه و اجاره');
	let floor       = itms.get('طبقه');
	
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
	
	let type =
		itms.has('آگهی‌دهنده') && itms.get('آگهی‌دهنده') === 'شخصی' ? 'شخصی' :
		(itms.has('آگهی‌دهنده') && ['املاک','مشاور املاک','آژانس املاک'].includes(itms.get('آگهی‌دهنده'))) || itms.has('آژانس املاک') ? 'املاک' :
		'';
	
	[sqmeter, builtyear, rooms] = [sqmeter, builtyear, rooms].map(toEn);
	
	
	let [elevator, parking, storage] = [..._document.querySelectorAll('span.kt-group-row-item__value.kt-body.kt-body--stable')].map(i=>i.innerText);
	
	elevator = elevator === 'آسانسور ندارد' ? 'خیر' : 'بله';
	parking = parking === 'پارکینگ ندارد' ? 'خیر' : 'بله';
	storage = storage === 'انباری ندارد' ? 'خیر' : 'بله';

	let descs = _document.querySelector('.kt-description-row__text.post-description.kt-description-row__text--primary').innerText;
	let singlefloor = ['تک واحدی', 'تکواحدی', 'تک واحد', 'تکواحد', 'یک واحدی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';
	let stove       = ['گاز رومیزی', 'گازرومیزی', 'اجاق گاز رومیزی', 'اجاق رومیزی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';
	
	let url = r[idx];
	
	//[title, when, sqmeter, builtyear, rooms, credit, rent, convertable, convcredit, floor, type, elevator, parking, storage, singlefloor, stove];
	
	rr.push([/*credit*/convcredit, title, when, hood, singlefloor, stove, floor, parking, elevator, sqmeter, builtyear, rooms, storage, url]);
}

headers = ['ودیعه', 'عنوان', 'زمان', 'محل', 'تک‌واحدی', 'گازرومیزی', 'طبقه', 'پارکینگ', 'آسانسور', 'متراژ', 'سال‌ساخت', 'اتاق', 'انباری', 'لینک'];

if (makeCSV) {
	[  ['گازرومیزی'], ['زمان',1], ['تک‌واحدی'], ['آسانسور'], ['پارکینگ'],  ].map(([header, numerical, desc]) => {
		let j = headers.indexOf(header);
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
	
	text = [['ردیف',...headers], ..._rr].map(i =>
		i.map(j => typeof j === 'string' && j.includes(',') ? JSON.stringify(j) : j).join(',')
	).join('\n');
	
	download('out.csv', text);
}

if (makeHTML) {
	linkIdx = headers.indexOf('لینک');
	
	html = rr.map(i =>
		'<tr>'+ i.map((v,j) => j===linkIdx ? `<td><a href="${v}" target="_blank">لینک</a></td>` : `<td>${v}</td>`).join('') +'</tr>'
	).join('');
	
	html = `<meta charset="utf-8" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tabulator-tables/dist/css/tabulator.min.css" />
<table id="mytable">
	<thead>
		<tr> ${headers.map(i=> '<th>'+ i +'</th>').join('')} </tr>
	</thead>	
	${html}
</table>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables@4.9.3/dist/js/tabulator_core.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables@4.9.3/dist/js/modules/sort.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables@4.9.3/dist/js/modules/resize_columns.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables@4.9.3/dist/js/modules/html_table_import.js"></script>
<script>
table = new Tabulator('#mytable');
table.setSort([
	{column:'گازرومیزی', dir:'asc'},
	{column:'زمان', dir:'asc'},
	{column:'تک‌واحدی', dir:'asc'},
	{column:'آسانسور', dir:'asc'},
	{column:'پارکینگ', dir:'asc'},
]);
</script>`;
	
	download('out.html', html);
}

function download(filename, text) {
	var el = document.createElement('a');
	el.setAttribute('href', 'data:text/plain;charset=utf-8,' + (makeCSV && UTF8_BOM_CSV ? '\ufeff' : '')+encodeURIComponent(text));
	el.setAttribute('download', filename);
	el.style.display = 'none';
	document.body.appendChild(el);
	el.click();
	document.body.removeChild(el);
}