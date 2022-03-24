// https://divar.ir/s/tehran/rent-apartment?credit=-350000000&rent=0-0&floor=4-30&has-photo=true&elevator=true&parking=true&rent_to_single=true

ignore = ['اندیشه','بومهن','پاکدشت','پردیس','پرند','رباط کریم','رودهن','شریف آباد','شهر قدس','شهریار','فشم','قرچک','قیام دشت','لواسان','ورامین'];

totalScrolls = 50;
eachScrollHeight = 850;
wait = 1000;
wait2 = 500;
makeHTML = true;
makeCSV = false;
UTF8_BOM_CSV = true;

en = {'۰':'0', '۱':'1', '۲':'2', '۳':'3', '۴':'4', '۵':'5', '۶':'6', '۷':'7', '۸':'8', '۹':'9'};
lett = {'۱':'یک', '۲':'دو', '۳':'سه', '۴':'چهار', '۵':'پنج', '۶':'شش', '۷':'هفت', '۸':'هشت', '۹':'نه'};
toEn = s => +[...s].map(i => en[i]).join('');
sleep = ms => new Promise(r=> setTimeout(r,ms));

window.scrollTo(0,0);
r = [];
for (let i of [...Array(totalScrolls).keys()]) {
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
let proms = await Promise.allSettled(r.map(i=> fetch(i)));
while (proms.some(i=>i.reason || i.value.status !== 200)) {
	let ers = proms.map((v,i)=> v.reason || v.value.status !== 200 ? i : -1).filter(i=>i>-1);
	await sleep(2000);
	(await Promise.allSettled( ers.map(i=> fetch(r[i])) ))
		.forEach((v,i) => proms[ers[i]] = v);
}
let texts = await Promise.all( proms.map(i=> i.value.text()) );
console.log('took', (((performance.now()-t) / 1000) / 60).toFixed(2), ' min');

rr = [];
for (let [idx, text] of texts.entries()) {
	let _document = new DOMParser().parseFromString(text, mimeType='text/html');

	let title = _document.querySelector('.kt-page-title__title').innerText;
	let time = _document.querySelector('.kt-page-title__subtitle').innerText;
	time = time.split('|')[0];
	time = time.replace(/([۱۲۳۴۵۶۷۸۹])/g, (m,p1)=> lett[p1]).trim();

	let [sqmeter, builtyear, rooms] = [..._document.querySelector('.kt-group-row').querySelectorAll('.kt-group-row-item__value')].map(i=> i.innerText);

	let itms = [..._document.querySelectorAll('.post-info .kt-base-row.kt-base-row--large.kt-unexpandable-row')].map(i =>
		[...i.querySelectorAll('div > p')].map(i=> i.innerText)
	);
	itms = new Map(itms);
	
	let credit      = itms.get('ودیعه');
	let convertable = itms.get('ودیعه و اجاره');
	let floor       = itms.get('طبقه');
	
	credit = credit.match(/(.*) تومان/)[1].match(/^(.{1,4})٬/)[1];

	convertable = convertable === 'قابل تبدیل' ? 'بله' : convertable === 'غیر قابل تبدیل' ? 'خیر' : '';
	
	let type =
		itms.has('آگهی‌دهنده') && itms.get('آگهی‌دهنده') === 'شخصی' ? 'شخصی' :
		(itms.has('آگهی‌دهنده') && ['املاک','مشاور املاک','آژانس املاک'].includes(itms.get('آگهی‌دهنده'))) || itms.has('آژانس املاک') ? 'املاک' :
		'';
	
	[sqmeter, builtyear, rooms, credit] = [sqmeter, builtyear, rooms, credit, floor].map(toEn);


	let storage = _document.querySelector('.kt-group-row:nth-last-of-type(1) .kt-group-row-item:nth-last-of-type(1) span').innerText;
	storage = storage === 'انباری ندارد' ? 'خیر' : 'بله';

	let descs = _document.querySelector('.kt-description-row__text.post-description.kt-description-row__text--primary').innerText;
	let singlefloor = ['تک واحدی', 'تکواحدی', 'تک واحد', 'تکواحد', 'یک واحدی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';
	let stove       = ['گاز رومیزی', 'اجاق گاز رومیزی', 'اجاق رومیزی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';
	
	let url = r[idx];
	
	//[title, time, sqmeter, builtyear, rooms, credit, convertable, floor, type, storage, singlefloor, stove];
	rr.push([credit, title, time, sqmeter, builtyear, rooms, floor, singlefloor, storage, stove, type, convertable, url]);
}

headers = ['ودیعه', 'عنوان', 'زمان', 'متراژ', 'سال ساخت', 'اتاق', 'طبقه', 'تک واحدی', 'انباری', 'گاز رومیزی', 'نوع آگهی', 'قابل تبدیل', 'لینک'];

if (makeCSV) {
	text = [headers, ...rr].map(i =>
		i.map(j => typeof j === 'string' && j.includes(',') ? JSON.stringify(j) : j).join(',')
	).join('\n');
	download('mydata.csv', text);
}

if (makeHTML) {
	html = rr.map(i =>
		'<tr>'+ i.map((v,j) => j===12 ? `<td><a href="${v}" target="_blank">لینک</a></td>` : `<td>${v}</td>`).join('') +'</tr>'
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
<script>new Tabulator('#mytable');</script>`;
	download('mypage.html', html);
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