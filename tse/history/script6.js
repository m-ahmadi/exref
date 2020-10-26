var StaticTreshholdData = [
//            max         min	        (yesterday)
	[1,         22390.00,   20270.00],
// time       max         min	
	[63129,     21570.00,   19530.00]
//            PSGelStaMax PSGelStaMin
];
var ClosingPriceData = [
	['1399/6/31 06:37:39', '-', '20270', '20550', '0', '20550', '0', '0', '0', '0', '0', '0', '63739'],
	// datetime                  last     close     open   yesterday high    low    count    volume      value       discarded time
	...
	['1399/6/31 09:01:06', '-', '19530', '19530', '19530', '20550', '19530', '19530', '458', '6523941', '127412567730', '0', '90106'],
];
var IntraDayPriceData = [
	// ClosingPriceData snapshots (formatted)
	// time   open   high   low    close   vol
	['09:01', 19530, 19530, 19530, 19530, 1264943],
	...
	['12:16', 19530, 19530, 19530, 19530, 4994407]
	];
var InstrumentStateData = [
//              CEtaVal	
	[20200919, 1, 'A ']
/* CEtaVal
'I ': 'ممنوع'
'A ': 'مجاز'
'AG': 'مجاز-مسدود'
'AS': 'مجاز-متوقف'
'AR': 'مجاز-محفوظ'
'IG': 'ممنوع-مسدود'
'IS': 'ممنوع-متوقف'
'IR': 'ممنوع-محفوظ'
*/
];
var IntraTradeData = [
//  count    time     volume  price   discarded
	['754', '09:01:06', '500', '19530', 0],
	...
	['4498', '11:53:13', '1000', '19530', 0]
];
var ShareHolderData = [];
var ShareHolderDataYesterday = [];
var ShareHolderDataYesterday = [
// ???    CIsin          shares      % chg                 shareholder desc (NOT Intrument. Name | LSoc30)
	[340,  'IRO1SSHR0000', 1061520653, 40.000, 'ArrowDown', 'شركت توسعه سرمايه وصنعت غدير-سهامي عام-'],
	[555,  'IRO1SSHR0000', 304687524,  11.480, '',          'شركت سيمان سپاهان-سهامي عام-'],
	[560,  'IRO1SSHR0000', 94418176,   3.550,  '',          'شركت سيمان فارس وخوزستان-سهامي عام-'],
	[468,  'IRO1SSHR0000', 41935786,   1.580,  '',          'شركت سرمايه گذاري دي-سهامي خاص-'],
	[21630,'IRO1SSHR0000', 29000000,   1.090,  '',          'شركت گروه توسعه مالي مهرآيندگان-سهامي عام-']
];
var ClientTypeData = [
// bPc  bLc  sPc  sLc
	4862, 13, 1255, 3,

// bPvol       bLvol      sPvol       sLvol
	19584406, 31853777, 50708183, 730000,
// ↑ % changes
	38, 62, 99, 1,
	
// bPval         bLval       sPval        sLval
	382483449180, 622104264810, 990330813990, 14256900000,

// bPp   bLp     sPp   sLp
	19530, 19530, 19530, 19530,

// PtoL change
	-31123777
	
/*
	b = buy
	s = sell
	P = person
	L = legal
	
	c   = count
	vol = volume
	val = value
	p   = avg price
*/
];

a = ClientTypeData

person_buy_vol,       a[4]
person_buy_count,     a[0]
person_buy_val,       a[12]
person_buy_price,     a[16]
person_buy_vol_ptot,  a[8]

person_sell_vol,      a[6]
person_sell_count,    a[2]
person_sell_val,      a[14]
person_sell_price,    a[18]
person_sell_vol_ptot, a[10]

legal_buy_vol,        a[5]
legal_buy_count,      a[1]
legal_buy_val,        a[13]
legal_buy_price,      a[17]
legal_buy_vol_ptot,   a[9]

legal_sell_vol,       a[7]
legal_sell_count,     a[3]
legal_sell_val,       a[15]
legal_sell_price,     a[19]
legal_sell_vol_ptot,  a[11]

person_to_legal_chg   a[20]

instrument_state,     InstrumentState[0][2]
day_range_min,        StaticTreshhold[1][2]
day_range_max,        StaticTreshhold[1][1]