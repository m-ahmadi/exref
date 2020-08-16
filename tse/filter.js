// data variables must be in parens
// `instrument history` variable must be in brackets: [ih]
// max history: 21 days ago (or 60?)

!!function () {
	if ((pl) > 1000 && (pc) > 1000) {
		return true;
	} else {
		return false;
	}    
}()

// lowest price of last 21 days
!!function () {
	if ( (pl) < minPrice() ) {
		return true;
	} else {
		return false;
	}
	
	function minPrice () {
		let min = [ih][0].PriceMin;
		
		for (let i = 0; i < 21; i++) {
			if (min > [ih][i].PriceMin) {
				min = [ih][i].PriceMin;
			}
		}
		return min;
	}
}()

// show rsi (format: `table + user fields`)
!!function () {
	if (typeof [ih][0].rsi == 'undefined') calcRsi(14);

	(cfield0) = [ih][0].rsi;

	return true;
	
	function calcRsi(period) {
		let len = 20;
		
		for (let i = 0; i < len; i++) {
			const rec = [ih][len - 1 - i];
			const change = rec.PClosing - rec.PriceYesterday;
			if (change > 0) {
				rec.gain = change;
				rec.loss = 0;
			} else {
				rec.gain = 0;
				rec.loss = -change;
			}
		}

		// calculate first "average gain" and "average loss"
		let gainSum = 0;
		let lossSum = 0;
		for (let i = 0; i < period; i++) {
			const rec = [ih][len - 1 - i];
			gainSum += rec.gain;
			lossSum += rec.loss;
		}

		let averageGain = gainSum / period;
		let averageLoss = lossSum / period;
		// calculate subsequent "average gain" and "average loss" values
		for (let i = period + 1; i < len; i++) {
			const rec = [ih][len - 1 - i];
			averageGain = (averageGain * (period - 1) + rec.gain) / period;
			averageLoss = (averageLoss * (period - 1) + rec.loss) / period;
			rec.averageGain = averageGain;
			rec.averageLoss = averageLoss;
		}

		// calculate rsi
		let rs = 0;    // relative strength
		let rsIndex = 0; // relative strength index
		for (let i = period + 1; i < len; i++) {
			let rec = [ih][len - 1 - i];
			rs = rec.averageGain / rec.averageLoss;
			rsIndex = 100 - 100 / (1 + rs);
			rec.rsi = rsIndex;
		}
	}
}()