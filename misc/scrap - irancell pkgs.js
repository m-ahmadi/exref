// https://my.irancell.ir/fa/#!/bolton/Internet

kk = {'۰':0, '۱':1, '۲':2, '۳':3, '۴':4, '۵':5, '۶':6, '۷':7, '۸':8, '۹':9};
en = s => s.replace(/([۰۱۲۳۴۵۶۷۸۹])/g, (m,p1)=> kk[p1]);
n = s => s.replace(/[^\d]/g,'');

_prices = [...document.querySelectorAll('.list.media-list .item-after span')].map(i=>i.innerText);
texts = [...document.querySelectorAll('.list.media-list .item-text')].map(i=>i.innerText);

prices = _prices.map(i=> +n(en(i)) / 10000);
gigs = texts.map(i=> (i=i.match(/([۰۱۲۳۴۵۶۷۸۹]+) گیگ/), i ? +en(i[1]) : NaN));

res = prices.map((price,i)=> ({
	perGigPrice: +(price/gigs[i]).toFixed(2),
	title:       texts[i]
}))
	.sort((a,b)=> a.perGigPrice - b.perGigPrice);
	
console.table(res);