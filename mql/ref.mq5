// common fns
// https://www.mql5.com/en/docs/common
Alert()      // popup (scr & ea)
Comment()    // write text on chart
DebugBreak() // only works in "MetaEditor" debugging
MessageBox() // popup (scr & ea)
Print()      // only in ea
Sleep()      // sleep in milliseconds


// checkup
// https://www.mql5.com/en/docs/check
Symbol() // symbol of current chart
Period() // timeframe ...
Digits() // decimal places ...
Point()  // point size in quote currency ...


// market state
// https://www.mql5.com/en/docs/marketinformation
int SymbolsTotal(bool selected)
SymbolsTotal(0) // all symbols
SymbolsTotal(1) // only market watch symbols
	
string SymbolName(int pos, bool selected)
SymbolName(0, 0) // first symbol (in all)
SymbolName(0, 0) // first symbol (in market watch)


// instrument data
// https://www.mql5.com/en/docs/series
Symbol()
Period()

iTime(string symbol, int timeframe, int shift)
iOpen(...)
iHigh(...)
iLow(...)
iClose(...)
iVolume(...)
iBars(string symbol, int timeframe)

// trading
// https://www.mql5.com/en/docs/trading
PositionsTotal() // num of open positions
OrderCheck()     // checks if there's enough money for trade
OrderSend()      // execute trade
OrderSendAsync() // execute trade async (not wait for server response)
OrdersTotal()    // num of current orders
OrderSelect()    // select order to work with
...
