// https://rahavard365.com/asset/453/chart
start = Math.floor(new Date().setYear(2002)/1000);
end   = Math.floor(new Date()/1000);
res = await (await fetch(`/api/chart/bars?ticker=exchange.asset:453:real_close:type3&resolution=1&startDateTime=${start}&endDateTime=${end}&firstDataRequest=false`)).json();

kk = ['time','open','high','low','close','volume'];

text = res.map(i=>kk.map(k=>k==='time'?i[k]/1000:i[k]).join(',')).join('\n');

download('data.csv', text);

//r = kk.reduce((o,k)=>(o[k]=[],o), {});
//res.forEach(o=> kk.forEach(k=> r[k].push(o[k])));



function download(filename, text) {
	let a = document.createElement('a');
	a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	a.setAttribute('download', filename);
	a.style.display = 'none';
	document.body.append(a);
	a.click();
	a.remove();
}