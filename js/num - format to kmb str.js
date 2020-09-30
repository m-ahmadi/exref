function simple1(n) {
	return (
		n > 999       && n < 1e6 ? (n / 1e3).toFixed(2) + ' K' :
		n > 999999    && n < 1e9 ? (n / 1e6).toFixed(2) + ' M' :
		n > 999999999            ? (n / 1e9).toFixed(2) + ' B' : n;
	);
}

function formatNum(n) {
	let res =
		n <= -1e3 && n > -1e6 ? (n / 1e3) + ' K' :
		n <= -1e6 && n > -1e9 ? (n / 1e6) + ' M' :
		n <= -1e9             ? (n / 1e9) + ' B' :
		n >=  1e3 && n <  1e6 ? (n / 1e3) + ' K' :
		n >=  1e6 && n <  1e9 ? (n / 1e6) + ' M' :
		n >=  1e9             ? (n / 1e9) + ' B' : n;
	if (typeof res === 'string' && /\./.test(res)) {
		const frac = res.match(/\.(\d+)/)[1];
		const fracRound = (+frac * +('0.'+Array(frac.length-1).fill(0).join('')+'1') ).toFixed(2).slice(2);
		res = res.replace(/(\-?)(\d+)\.\d\d.*(\w)/,'$1$2.'+fracRound+' $3');
	}
	return res;
}