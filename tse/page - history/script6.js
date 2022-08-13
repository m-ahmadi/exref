var StaticTreshholdData = [
//            max         min	        (yesterday)
	[1,         22390.00,   20270.00],
// time       max         min	
	[63129,     21570.00,   19530.00]
//            PSGelStaMax PSGelStaMin
];

a = StaticTreshholdData
day_range_min  a[1][2]
day_range_max  a[1][1]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var ClosingPriceData = [
	// 0                   1     2        3         4      5          6        7        8        9           10             11          12
	// datetime                  last     close     open   yesterday  high     low      count    volume      value          discarded   time
	['1399/6/31 06:37:39', '-', '20270', '20550',  '0',    '20550',   '0',     '0',     '0',     '0',        '0',           '0',       '63739'],
	...
	['1399/6/31 09:01:06', '-', '19530', '19530', '19530', '20550',   '19530', '19530', '458',   '6523941', '127412567730', '0',       '90106'],
];

c = ClosingPriceData[0]
time       c[12]
last       c[2]
close      c[3]
open       c[4]
high       c[6]
low        c[7]
count      c[8]
volume     c[9]
value      c[10]
discarded  c[11]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// redundant (ClosingPriceData snapshots)

var IntraDayPriceData = [
	// time   open   high   low    close   vol
	['09:01', 19530, 19530, 19530, 19530, 1264943],
	...
	['12:16', 19530, 19530, 19530, 19530, 4994407]
];

p = IntraDayPriceData
time    p[0]
open    p[1]
high    p[2]
low     p[3]
close   p[4]
volume  p[5]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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

a = InstrumentStateData
instrument_state  a[0][2]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var IntraTradeData = [
//  count    time         volume    price     discarded
	['754',    '09:01:06',  '500',   '19530',   0],
	...
	['4498',   '11:53:13',  '1000',  '19530',  0]
];

t = IntraTradeData[0]
time       t[1]
count      t[0]
volume     t[2]
price      t[3]
discarded  t[4]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var ShareHolderData = [];
var ShareHolderDataYesterday = [
// ???    CIsin          current shares  % of total shares  inc/dec/same   shareholder desc (NOT Intrument.Name | LSoc30)
	[340,  'IRO1SSHR0000', 1061520653,     40.000,            'ArrowDown',   'شركت توسعه سرمايه وصنعت غدير-سهامي عام-'],
	[555,  'IRO1SSHR0000', 304687524,      11.480,            '',            'شركت سيمان سپاهان-سهامي عام-'],
	[560,  'IRO1SSHR0000', 94418176,       3.550,             '',            'شركت سيمان فارس وخوزستان-سهامي عام-'],
	[468,  'IRO1SSHR0000', 41935786,       1.580,             '',            'شركت سرمايه گذاري دي-سهامي خاص-'],
	[21630,'IRO1SSHR0000', 29000000,       1.090,             '',            'شركت گروه توسعه مالي مهرآيندگان-سهامي عام-']
];
var ShareHolderDataYesterday = [//another example
	[104,    'IRO1FOLD0009', 35943344339, 17.190, '',          'سازمان توسعه ونوسازي معادن وصنايع معدني ايران'],
	[47709,  'IRO1FOLD0009', 22029627074, 10.540, '',          'شركت توسعه سرمايه رفاه-سهامي خاص-'],
	[49,     'IRO1FOLD0009', 5204192730,  2.490,  '',          'بانك تجارت'],
	[492,    'IRO1FOLD0009', 5027441821,  2.400,  '',          'شركت سرمايه گذاري صدرتاءمين-سهامي عام-'],
	[771,    'IRO1FOLD0009', 4892800000,  2.340,  '',          'موسسه صندوق بيمه اجتماعي روستائيان وعشاير'],
	[1064,   'IRO1FOLD0009', 4346937696,  2.070,  'ArrowDown', 'شركت س اتهران س.خ-م ك م ف ع-'],
	[48057,  'IRO1FOLD0009', 3924470088,  1.870,  'ArrowUp',   'شركت بهسازان انرژي تدبيرزنگان-سهامي خاص-'],
	[1065,   'IRO1FOLD0009', 3496967573,  1.670,  'ArrowDown', 'شركت س اخراسان رضوي س.خ-م ك م ف ع-'],
	[730,    'IRO1FOLD0009', 3054529877,  1.460,  '',          'صندوق بازنشستگي كشوري'],
	[22650,  'IRO1FOLD0009', 2861823405,  1.360,  '',          'شركت توسعه ومديريت سرمايه صبا-سهامي خاص-'],
	[2674,   'IRO1FOLD0009', 2635199881,  1.260,  'ArrowDown', 'شركت س افارس س.خ-م ك م ف ع-'],
	[2662,   'IRO1FOLD0009', 2566245185,  1.220,  'ArrowDown', 'شركت س اخوزستان س.خ-م ك م ف ع-'],
	[1063,   'IRO1FOLD0009', 2310383952,  1.100,  'ArrowDown', 'شركت س ااصفهان س.خ-م ك م ف ع-']
];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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

// LtoP change
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

person_buy_vol        a[4]     pbvol
person_buy_count      a[0]     pbcount
person_buy_val        a[12]    pbval
person_buy_price      a[16]    pbprice
person_buy_vol_ptot   a[8]     pbvolptot

person_sell_vol       a[6]     psvol
person_sell_count     a[2]     pscount
person_sell_val       a[14]    psval
person_sell_price     a[18]    psprice 
person_sell_vol_ptot  a[10]    psvolptot

legal_buy_vol         a[5]     lbvol
legal_buy_count       a[1]     lbcount
legal_buy_val         a[13]    lbval
legal_buy_price       a[17]    lbprice
legal_buy_vol_ptot    a[9]     lbvolptot

legal_sell_vol        a[7]     lsvol
legal_sell_count      a[3]     lscount
legal_sell_val        a[15]    lsval
legal_sell_price      a[19]    lsprice
legal_sell_vol_ptot   a[11]    lsvolptot

legal_to_person_chg   a[20]    lpchg
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@