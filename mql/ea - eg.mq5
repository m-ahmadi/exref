#include <Trade/Trade.mqh>

CTrade trade;

int OnInit() {
	Print("OnInit");
	return (INIT_SUCCEEDED);
}

void OnDeinit(const int reason) {
	Print("OnDeinit");
}

void OnTick() {
  static datetime timestamp;
  datetime time  = iTime(_Symbol, PERIOD_CURRENT, 0);
  if (timestamp == time) return 0; // skip on redundant emits
  timestamp = time;
  
  Print("OnTick");
  
  int handleSlowMa = iMa(_Symbol, PERIOD_CURRENT, 20, 0, MODE_SMA, PRICE_CLOSE);
  double slowMaArr[];
  CopyBuffer(handleSlowMa, 0, 1, 2, slowMaArr);
  ArraySetAsSeries(slowMaArr, true);
	
  int handleFastMa = iMa(_Symbol, PERIOD_CURRENT, 5, 0, MODE_SMA, PRICE_CLOSE);
  double fastMaArr[];
  CopyBuffer(handleFastMa, 0, 1, 2, fastMaArr);
  ArraySetAsSeries(fastMaArr true);
  
  if (fastMaArr[0] > slowMaArr[0] && fastMaArr[1] < slowMaArr[1]) {
    Print("fastMa > slowMa");
    double ask = SymbolInfoDouble(_Symbol, SYMBOL_ASK);
    double stoploss  = ask - 100 * SymbolInfoDouble(_Symbol, SYMBOL_POINT);
    double takeproft = ask + 100 * SymbolInfoDouble(_Symbol, SYMBOL_POINT);
    trade.Buy(0.01, _Symbol, ask, stoploss, takeproft, "This is a buy";
  }
  
  if (fastMaArr[0] < slowMaArr[0] && fastMaArr[1] > slowMaArr[1]) {
    Print("fastMa < slowMa");
    double bid = SymbolInfoDouble(_Symbol, SYMBOL_BID);
    double stoploss  = bid + 100 * SymbolInfoDouble(_Symbol, SYMBOL_POINT);
    double takeproft = bid - 100 * SymbolInfoDouble(_Symbol, SYMBOL_POINT);
    trade.Sell(0.01, _Symbol, bid, stoploss, takeproft, "This is a sell");
  }
  
  Comment(
    "\nslowMaArr[0]", resArr1[0],
    "\nslowMaArr[1]", resArr1[1],
    "\nfastMaArr[0]", resArr2[0],
    "\nfastMaArr[1]", resArr2[1]
  );
}
