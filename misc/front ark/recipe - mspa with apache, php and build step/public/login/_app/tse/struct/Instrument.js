const i = parseInt;

export default class Instrument {
	constructor(_row='') {
		const row = _row.split(',');
		
		if (row.length !== 18) throw new Error('Invalid Instrument data!');

		// unspecified ones are all string
		this.InsCode      = row[0];  // int64 (long)
		this.InstrumentID = row[1];
		this.LatinSymbol  = row[2];
		this.LatinName    = row[3];
		this.CompanyCode  = row[4];
		this.Symbol       = row[5];
		this.Name         = row[6];
		this.CIsin        = row[7];
		this.DEven        = row[8];  // int32 (int)
		this.Flow         = i(row[9], 10);  // byte بازار
		this.LSoc30       = row[10]; // نام 30 رقمي فارسي شرکت
		this.CGdSVal      = row[11]; // A,I,O نوع نماد
		this.CGrValCot    = row[12]; // 00,11,1A,...25 کد گروه نماد
		this.YMarNSC      = row[13]; // NO,OL,BK,BY,ID,UI کد بازار
		this.CComVal      = row[14]; // 1,3,4,5,6,7,8,9 کد تابلو
		this.CSecVal      = row[15]; // []62 کد گروه صنعت
		this.CSoSecVal    = row[16]; // []177 کد زير گروه صنعت
		this.YVal         = row[17];
	}
}