totalScrolls = 10;
eachScrollHeight = 850;
wait = 1000;
makeHTML = true;
makeCSV = true;
UTF8_BOM_CSV = true;


r = [];
for (let i of [...Array(totalScrolls).keys()]) {
    window.scrollBy(0,eachScrollHeight);
		
		await new Promise(r=>setTimeout(r,wait));
		
		r.push(
			[...document.querySelectorAll('.post-card-item')].map(i => [
				...i.querySelector('a .kt-post-card__description').innerText.split('\n').flat(),
				i.querySelector('a .kt-post-card__title').innerText,
				i.querySelector('a .kt-post-card__bottom-description').innerText,
				decodeURI(i.querySelector('a').href),
			])
		);
}
r = r.flat();
r = r.map(i=>i[4]).map((v,i,a)=> a.indexOf(v)===i ? i : -1).filter(i=>i!==-1).map(i=>r[i]);

if (makeCSV) {
	text = r.map(i =>
		i.map(j => j.includes(',') ? JSON.stringify(j) : j).join(',')
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
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables/dist/js/tabulator_core.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables/dist/js/modules/sort.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables/dist/js/modules/resize_columns.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tabulator-tables/dist/js/modules/html_table_import.js"></script>
<script>new Tabulator('#mytable');</script>`;
	download('mypage.html', html);
}

function download(filename, text) {
  var el = document.createElement('a');
	el.setAttribute('href', 'data:text/plain;charset=utf-8,' + (UTF8_BOM_CSV ? '\ufeff' : '')+encodeURIComponent(text));
  el.setAttribute('download', filename);
  el.style.display = 'none';
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}