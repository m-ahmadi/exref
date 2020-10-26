Instrument(length?, int DEven): InstrumentResult

var res = Instrument(length?, int DEven)

var Instruments = res.split(';').map(i => {
	var row = i.split(',');
	return {
		InsCode      : row[0],  // int64
		InstrumentID : row[1],  // string کد 12 رقمي لاتين نماد
		LatinSymbol  : row[2],  // string
		LatinName    : row[3],  // string
		CompanyCode  : row[4],  // string
		Symbol       : row[5],  // string
		Name         : row[6],  // string
		CIsin        : row[7],  // string کد 12 رقمي شرکت
		DEven        : row[8],  // int32 	تاريخ
		Flow         : row[9],  // byte بازار
		LSoc30       : row[10], // string نام 30 رقمي فارسي شرکت
		CGdSVal      : row[11], // string نوع نماد يکي از مقادير: A - I - O
		CGrValCot    : row[12], // string کد گروه نماد
		YMarNSC      : row[13], // string کد بازار  
		CComVal      : row[14], // string کد تابلو
		CSecVal      : row[15], // string کد گروه صنعت
		CSoSecVal    : row[16], // string کد زير گروه صنعت
		YVal         : row[17]  // string نوع نماد
	};
});
function countOccurrence(types) {
	// instruments: [ Instrument, Instrument, ...]
	Object.keys(types).forEach(k => types[k][2] = 0);
	instruments.forEach(i => types[i.YVal] ? types[i.YVal][2] += 1 : undefined);
	return types;
}
function convertToLinkedList(types) {
	const l1 = [...new Set(Object.keys(types).map(i => types[i][0]))].map((v,i)=>({id: i+1, node: v, parent: '#'}));
	const l2 = Object.keys(types).map((k,i) => ({
		id: l1.length+i+1,
		parent: l1.find(j=>j.node===types[k][0]).id,
		node: types[k][1]
	}));
	return l1.concat(l2).filter(i => i.node);
}
