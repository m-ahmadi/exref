function gen(n) {
	return [...Array(n)].map((d,i)=> {
		d = new Date();
		d.setDate(d.getDate()-n+i);
		d = d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate() + '';
		return {
			time: [d.slice(0,4), d.slice(4,6), d.slice(6,8)].join('-'),
			value: +(Math.random()*100).toFixed(2)
		};
	})
}