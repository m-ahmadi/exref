// https://cdn.jsdelivr.net/npm/ta-math/
// https://cdn.jsdelivr.net/npm/ta-math/dist/ta-math.js
const TA = require('ta-math');

const ohlcv = [[t,o,h,l,c,v], [t2,o2,h2,l2,c2,v2],  ...  ,[tN,oN,hN,lN,cN,vN]];
const ta = new TA(ohlcv, TA.exchangeFormat);
const emaShort = ta.ema(10);
const emaLong = ta.ema(21);
const bband = ta.bb(15, 2);
const bbUpper = bband.upper;
const bbLower = bband.lower;
const smaOpenPrice = TA.sma(ta.$open);