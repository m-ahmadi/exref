// https://divar.ir/s/tehran/rent-apartment?credit=-350000000&rent=0-0&floor=4-30&has-photo=true&elevator=true&parking=true&rent_to_single=true

totalScrolls = 50;
eachScrollHeight = 850;
wait = 1000;
makeHTML = true;
makeCSV = false;
UTF8_BOM_CSV = true;

en = {'۰':'0', '۱':'1', '۲':'2', '۳':'3', '۴':'4', '۵':'5', '۶':'6', '۷':'7', '۸':'8', '۹':'9'};
ignore = ['اندیشه','بومهن','پاکدشت','پردیس','پرند','رباط کریم','رودهن','شریف آباد','شهر قدس','شهریار','فشم','قرچک','قیام دشت','لواسان','ورامین'];

window.scrollTo(0,0);
r = [];
for (let i of [...Array(totalScrolls).keys()]) {
	window.scrollBy(0,eachScrollHeight);

	await new Promise(r=>setTimeout(r,wait));

	r.push(
		[...document.querySelectorAll('.post-card-item')].map(i => {
		
			let [ credit, rent ] = i.querySelector('a .kt-post-card__description').innerText.split('\n').flat();
			credit = credit.match(/ودیعه: (.*) تومان/)[1].match(/^(.{1,4}),/)[1];
			credit = +[...credit].map(i => en[i]).join('');
			
			let title = i.querySelector('a .kt-post-card__title').innerText;
			let time = i.querySelector('a .kt-post-card__bottom-description').innerText;
			let link = decodeURI(i.querySelector('a').href);
			
			if ( ignore.some(i=> title.includes(i) || time.includes(i)) ) return;
			
			return [credit, rent, title, time, link];
		}).filter(i=>i)
	);
}
r = r.flat();
r = r.map(i=>i[4]).map((v,i,a)=> a.indexOf(v)===i ? i : -1).filter(i=>i!==-1).map(i=>r[i]);

if (makeCSV) {
	text = r.map(i =>
		i.map(j => typeof j === 'string' && j.includes(',') ? JSON.stringify(j) : j).join(',')
	).join('\n');
	download('mydata.csv', text);
}

if (makeHTML) {
	html = r.map(i=>[0,2,3,1,4].map(n=>i[n])).map(i =>
		'<tr>'+ i.map((j,b) => b===4 ? `<td><a href="${j}" target="_blank">لینک</a></td>` : `<td>${j}</td>`).join(' ') +'</tr>'
	).join('\n');

	html = `<meta charset="utf-8" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tabulator-tables/dist/css/tabulator.min.css" />
<table id="mytable">
	<thead>
		<tr> <th>ودیعه</th> <th>توضیح آگهی</th> <th>زمان آگهی</th> <th>اجاره ماهیانه</th> <th>لینک</th> </tr>
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