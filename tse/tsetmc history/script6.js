var StaticTreshholdData = [
	[1, 22390.00, 20270.00],
	[63129, 21570.00, 19530.00]
];
var ClosingPriceData = [
	['1399/6/31 06:37:39', '-', '20270', '20550', '0', '20550', '0', '0', '0', '0', '0', '0', '63739'],
	// datetime                  last     close     open   yesterday high    low    count    volume      value       discarded? time
	...
	['1399/6/31 09:01:06', '-', '19530', '19530', '19530', '20550', '19530', '19530', '458', '6523941', '127412567730', '0', '90106'],
];
var IntraDayPriceData = [
	['09:01', 19530, 19530, 19530, 19530, 1264943],
	...
	['12:16', 19530, 19530, 19530, 19530, 4994407]
];
var InstrumentStateData = [
	[20200919, 1, 'A ']
];
var IntraTradeData = [
//  count    time     volume  price   discarded
	['754', '09:01:06', '500', '19530', 0],
	...
	['4498', '11:53:13', '1000', '19530', 0]
];
var ShareHolderData = [];
var ShareHolderDataYesterday = [];
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