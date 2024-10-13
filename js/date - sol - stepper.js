function makeDateStepper(startDate=[1970,1,1], stepstr='1day') {
	const d = new Date(...startDate.map((v,i)=>i===1?v-1:v));
	const stepTypes = {year:'FullYear',month:'Month',day:'Date',hour:'Hours',minute:'Minutes',second:'Seconds'};
	let currentStepstr, currentStepAmount;
	let set, get;
	setStepConfig(stepstr);
	
	return (step='1day', backward=false, fstr='y-m-d h:M:s') => {
		if (step && step !== currentStepstr) setStepConfig(step);
		const curr = d[get]();
		d[set](backward ? curr - currentStepAmount : curr + currentStepAmount);
		return !fstr ? new Date(+d) : fmt(fstr);
	};
	
	function setStepConfig(stepstr) {
		const [, amount, type] = stepstr.match(/^(\d+)(year|month|day|hour|minute|second)$/);
		const method = stepTypes[type];
		currentStepstr = stepstr;
		currentStepAmount = +amount;
		[set, get] = ['set'+method, 'get'+method];
	}
	
	function fmt(fstr='y/m/d h:M:s') {
		const m = {y:'FullYear',m:'Month',d:'Date',h:'Hours',M:'Minutes',s:'Seconds'};
		return [...fstr].map(chr => {
			const method = m[chr];
			if (method) {
				let n = d['get'+method]();
				if (method === 'Month') n++;
				return n < 10 ? '0'+n : ''+n;
			} else {
				return chr;
			}
		}).join('');
	}
}

f = makeDateStepper([2024,1,1], '1day');
f()                   // '2024-01-02 00:00:00'
f()                   // '2024-01-03 00:00:00'
f('1day')             // '2024-01-04 00:00:00'
f('4day')             // '2024-01-08 00:00:00'
f('6hour')            // '2024-01-08 00:06:00'
f('22minute')         // '2024-01-08 00:06:22'
f('10minute',1)       // '2024-01-08 00:06:12'
f('2day',1)           // '2024-01-06 00:06:12'
f()                   // '2024-01-07 00:06:12'
f(0,0,'y-m-d')        // '2024-01-08'
f(0,0,'y-m-d')        // '2024-01-09'
f('6day',0,'y-m-d')   // '2024-01-15'
f('2month',0,'y-m-d') // '2024-03-15'
f('6year',1,'y-m-d')  // '2018-03-15'
