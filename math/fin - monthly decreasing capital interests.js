function monthlyDecreasingCapitalInterests(startingCapital=84, decreaseAmount=7, months=12, yearlyProfitPct=0.225) {
	const monthlyProfitPct = yearlyProfitPct / 12;
	
	const monthlyProfits = [...Array(months)].map((_,i) => (startingCapital - (i*decreaseAmount)) * monthlyProfitPct);
	
	const sum = monthlyProfits.reduce((r,i)=>r+=i);
	
	return Math.abs(sum);
}
