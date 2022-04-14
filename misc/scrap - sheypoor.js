// https://www.sheypoor.com/اصفهان/املاک/رهن-اجاره-خانه-آپارتمان?mx68090=500000000&mx68092=500000

makeHTML = true;
makeCSV = true;
UTF8_BOM_CSV = true;

sleep = ms => new Promise(r=> setTimeout(r,ms));
en = {'۰':'0', '۱':'1', '۲':'2', '۳':'3', '۴':'4', '۵':'5', '۶':'6', '۷':'7', '۸':'8', '۹':'9'};
toEn = s => +[...s].map(i => en[i]).join('');


// [...document.querySelectorAll('#serp > div > div > div:nth-child(2) > article > div.content > h2 > a')] // مشاهده آگهی های اطراف
r = [...document.querySelectorAll('#serp > div > div > div > article > div.content > h2 > a')].map(i=> i.href);
lastpage = toEn(document.querySelector('nav#pagination span.page-number.last').innerText.trim());
urlTemplate = document.querySelector('nav#pagination a:nth-child(2)').href;
pags = [...Array(lastpage+1).keys()].slice(2).map(page => {
	let url = new URL(urlTemplate)
	url.searchParams.set('p', page);
	return url.toString();
});
for (let pag of pags) {
	let text = await (await fetch(pag)).text();
	let _document = new DOMParser().parseFromString(text, mimeType='text/html');
	let items = [..._document.querySelectorAll('#serp > div > div > div > article > div.content > h2 > a')].map(i=> i.href);
	r.push(...items);
}
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

	let title = _document.querySelector('#item-details h1.pull-left');
	if (!title) continue;
	title = title.innerText;
	
	let hood = _document.querySelector('#item-details p span:nth-child(3)').innerText;
	hood = hood.split('، ');
	hood = hood[2] && hood[2].length < 30 ? hood[2] : hood[1];
	
	let when = _document.querySelector('#item-details > p > time').innerText;
	when = when.split('، ')[0];
	
	let n;
	let K = 1 / (24*60);
	let kk = {'۰':0, '۱':1, '۲':2, '۳':3, '۴':4, '۵':5, '۶':6, '۷':7, '۸':8, '۹':9};
	
	if (/لحظاتی پیش/.test(when)) {
		n = K / 2;
	} else if (/دقایقی پیش/.test(when)) {
		n = K * 2;
	} else if (/ساعاتی پیش/.test(when)) {
		n = K * 720;
	} else {
		if (/روز/.test(when)) {
			let _kk = {'دی':1, 'پری':2, ...kk};
			n = when.split('روز')[0];
			n = +n.replace(/([۰۱۲۳۴۵۶۷۸۹]|دی|پری)/g, (m,p1)=> _kk[p1]);
			n = n * (24*60);
		} else if (/هفته/.test(when)) {
			n = when.split(' هفته ')[0];
			n = +n.replace(/([۰۱۲۳۴۵۶۷۸۹])/g, (m,p1)=> kk[p1]);
			n = n * (7*24*60);
		}
		n = n * K;
	}
	when = n % 1 ? +n.toFixed(2) : n;
	
	
	let itms = [..._document.querySelectorAll('#item-details > table tr')].map(i=>[...i.children].map(i=>i.innerText.trim()));
	itms = new Map(itms);
	
	let sqmeter  = itms.get('متراژ');
	let credit   = itms.get('رهن');
	let rent     = itms.get('اجاره');
	let rooms    = itms.get('تعداد اتاق');
	let parking  = itms.get('پارکینگ');
	let elevator = itms.get('آسانسور');
	let storage  = itms.get('انباری');
	let buildage = itms.get('سن بنا');
	
	[sqmeter, credit, rent, rooms, parking, elevator, storage, buildage] =
		[sqmeter, credit, rent, rooms, parking, elevator, storage, buildage].map(i=> i ? i : '');
	
	credit   = credit.replace(/[^\d]/g,'') / 1e6;
	rooms    = rooms === 'بدون اتاق' ? 0 : +rooms.replace(/[^\d]/g,'');
	buildage = +buildage.replace(/[^\d]/g,'');
	
	let descs = _document.querySelector('#item-details > p#description').innerText;
	let singlefloor = ['تک واحدی', 'تکواحدی', 'تک واحد', 'تکواحد', 'یک واحدی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';
	let stove       = ['گاز رومیزی', 'گازرومیزی', 'اجاق گاز رومیزی', 'اجاق رومیزی'].some(i => descs.includes(i)) ? 'بله' : 'خیر';
	
	let url = decodeURI(r[idx]);
	
	//[title, hood, when, sqmeter, credit, rent, rooms, parking, elevator, storage, buildage, singlefloor, stove];
	
	// rr.push([credit, title, when, hood, singlefloor, stove, parking, elevator, sqmeter, buildage, rooms, storage, url]);
	// rr.push([credit, title, when, hood, singlefloor, parking, elevator, url]);
	rr.push([credit, title, hood, singlefloor, parking, elevator, url]);
}


// headers = ['رهن', 'عنوان', 'زمان', 'محل', 'تک‌واحدی', 'گازرومیزی', 'پارکینگ', 'آسانسور', 'متراژ', 'سن بنا', 'اتاق', 'انباری', 'لینک'];
// headers = ['رهن', 'عنوان', 'زمان', 'محل', 'تک‌واحدی', 'پارکینگ', 'آسانسور', 'لینک'];
headers = ['رهن', 'عنوان', 'محل', 'تک‌واحدی', 'پارکینگ', 'آسانسور', 'لینک'];

if (makeCSV) {
	[  ['زمان',1], ['رهن',1], ['تک‌واحدی'], ['آسانسور',0,1], ['پارکینگ',0,1], ['محل']  ].map(([header, numerical, desc]) => {
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
	
	[s1,s2,s3,s4,s5,s6] = ['زمان','رهن','تک‌واحدی','آسانسور','پارکینگ','محل'].map(i=> headers.indexOf(i));
	
	rr
		.sort((a,b)=> a[s1]-b[s1])
		.sort((a,b)=> a[s2]-b[s2])
		.sort((a,b)=> a[s3].localeCompare(b[s3],'fa'))
		.sort((a,b)=> b[s4].localeCompare(a[s4],'fa'))
		.sort((a,b)=> b[s5].localeCompare(a[s5],'fa'))
		.sort((a,b)=> a[s6].localeCompare(b[s6],'fa'));
	
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
	//{column:'زمان', dir:'asc'},
	{column:'رهن', dir:'asc'},
	{column:'تک‌واحدی', dir:'asc'},
	{column:'آسانسور', dir:'desc'},
	{column:'پارکینگ', dir:'desc'},
	{column:'محل', dir:'asc'},
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