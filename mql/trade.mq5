// https://www.mql5.com/en/docs/trading
// https://www.mql5.com/en/docs/constants/tradingconstants

// return codes
// https://www.mql5.com/en/docs/constants/errorswarnings/enum_trade_return_codes
10027 // Tools -> Options -> Expert Advisors -> Allow algorithmic trading

// stdlib trade classes (higher-level api)
// https://www.mql5.com/en/docs/standardlibrary/tradeclasses


MqlTradeRequest req = {};
req.action =
	// https://www.mql5.com/en/docs/constants/tradingconstants/enum_trade_request_actions
	TRADE_ACTION_DEAL
	TRADE_ACTION_PENDING
	TRADE_ACTION_SLTP
	TRADE_ACTION_MODIFY
	TRADE_ACTION_REMOVE
	TRADE_ACTION_CLOSE_BY
req.magic     = ulong;      // expert advisor id
req.order     = ulong;      // order ticket
req.symbol    = string;     // symbol
req.volume    = double;     // amount of volume in unit of lot
req.price     = double;     // target price
req.stoplimit = double;     // stoplimit price (if reach this price, abort order?)
req.sl        = double;     // stop-loss price
req.tp        = double;     // take-profit price
req.deviation = ulong;      // max allowed deviation from `req.price`
req.type = ENUM_ORDER_TYPE; // order type
	// https://www.mql5.com/en/docs/constants/tradingconstants/orderproperties#enum_order_type
	ORDER_TYPE_BUY
	ORDER_TYPE_SELL
	ORDER_TYPE_BUY_LIMIT
	ORDER_TYPE_SELL_LIMIT
	ORDER_TYPE_BUY_STOP
	ORDER_TYPE_SELL_STOP
	ORDER_TYPE_BUY_STOP_LIMIT
	ORDER_TYPE_SELL_STOP_LIMIT
	ORDER_TYPE_CLOSE_BY
req.type_filling = ENUM_ORDER_TYPE_FILLING; // execution type
	// https://www.mql5.com/en/docs/constants/tradingconstants/orderproperties#enum_order_type_filling
	ORDER_FILLING_FOK
	ORDER_FILLING_IOC
	ORDER_FILLING_BOC
	ORDER_FILLING_RETURN
req.type_time = ENUM_ORDER_TYPE_TIME; // order expiration type
	ORDER_TIME_GTC
	ORDER_TIME_DAY
	ORDER_TIME_SPECIFIED
	ORDER_TIME_SPECIFIED_DAY
req.expiration  = datetime; // order expiration time (only for `type_time` specified orders)
req.comment     = string;   // order comment
req.position    = ulong;    // position ticket
req.position_by = ulong;    // opposite position ticket

struct MqlTradeRequest {
	// https://www.mql5.com/en/docs/constants/structures/mqltraderequest
	ENUM_TRADE_REQUEST_ACTIONS action;       // trade operation type
	ulong                      magic;        // expert advisor id (magic number)
	ulong                      order;        // order ticket
	string                     symbol;       // trade symbol
	double                     volume;       // requested volume for a deal in lots
	double                     price;        // price
	double                     stoplimit;    // stoplimit level of the order
	double                     sl;           // stop-loss level of the order
	double                     tp;           // take-profit level of the order
	ulong                      deviation;    // maximal possible deviation from the requested price
	ENUM_ORDER_TYPE            type;         // order type
	ENUM_ORDER_TYPE_FILLING    type_filling; // order execution type
	ENUM_ORDER_TYPE_TIME       type_time;    // order expiration type
	datetime                   expiration;   // order expiration time (for the orders of ORDER_TIME_SPECIFIED type)
	string                     comment;      // order comment
	ulong                      position;     // position ticket
	ulong                      position_by;  // the ticket of an opposite position
};

struct MqlTradeResult {
	// https://www.mql5.com/en/docs/constants/structures/mqltraderesult
	uint   retcode;          // operation return code
	ulong  deal;             // deal ticket, if it is performed
	ulong  order;            // order ticket, if it is placed
	double volume;           // deal volume, confirmed by broker
	double price;            // deal price, confirmed by broker
	double bid;              // current Bid price
	double ask;              // current Ask price
	string comment;          // broker comment to operation (by default it is filled by description of trade server return code)
	uint   request_id;       // request id set by the terminal during the dispatch 
	int    retcode_external; // return code of an external trading system
};

struct MqlTradeCheckResult {
	// https://www.mql5.com/en/docs/constants/structures/mqltradecheckresult
	uint   retcode;      // reply code
	double balance;      // balance after the execution of the deal
	double equity;       // equity after the execution of the deal
	double profit;       // floating profit
	double margin;       // margin requirements
	double margin_free;  // free margin
	double margin_level; // margin level
	string comment;      // comment to the reply code (description of the error)
};


MqlTradeCheckResult res = {};
bool sent = OrderCheck(req, res);

MqlTradeResult res = {};
bool sent = OrderSend(req, res);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples


// find out if market is closed (by buying a tiny volume, TODO: find other ways)
sym = Symbol();
curr_ask = SymbolInfoDouble(sym, SYMBOL_ASK);
MqlTradeRequest req = {TRADE_ACTION_DEAL, sym, 1e-38, ORDER_TYPE_BUY, curr_ask, 5, 1};
MqlTradeResult res = {};
bool sent = OrderCheck(req, res);
if (!sent) MessageBox("request failed");
bool isMarketClosed = res.retcode === 10018;
MessageBox("isMarketClosed: " + isMarketClosed);




// buy (or sell)
string s = "";
string sym = Symbol();
double current_price = SymbolInfoDouble(sym, SYMBOL_ASK);
double current_bid = SymbolInfoDouble(sym, SYMBOL_BID);
s += "current ask:  " + (string)current_ask + "\n";
s += "current bid:  " + (string)current_bid + "\n";

MqlTradeRequest req = {};
req.action    = TRADE_ACTION_DEAL;
req.symbol    = sym;
req.volume    = 0.01;
req.type      = ORDER_TYPE_BUY; // ORDER_TYPE_SELL
req.price     = current_ask; // current_bid
req.deviation = 5;
req.magic     = 123;

MqlTradeResult res = {};
bool sent = OrderSend(req, res);
s += "request sent:  " + (string)sent + "\n\n";
s += "result:" + "\n\n";
s += "retcode:          " + (string)res.retcode          + "\n";
s += "deal:             " + (string)res.deal             + "\n";
s += "order:            " + (string)res.order            + "\n";
s += "volume:           " + (string)res.volume           + "\n";
s += "price:            " + (string)res.price            + "\n";
s += "bid:              " + (string)res.bid              + "\n";
s += "ask:              " + (string)res.ask              + "\n";
s += "comment:          " + (string)res.comment          + "\n";
s += "request_id:       " + (string)res.request_id       + "\n";
s += "retcode_external: " + (string)res.retcode_external + "\n";

int file_handle = FileOpen("r.txt", FILE_WRITE);
FileWriteString(file_handle, s);
FileClose(file_handle);




// check order
MqlTradeRequest req = {};
req.action    = TRADE_ACTION_DEAL;
req.symbol    = Symbol();
req.volume    = 0.01;
req.type      = ORDER_TYPE_BUY;
req.price     = SymbolInfoDouble(sym, SYMBOL_ASK);
req.deviation = 5;
req.magic     = 123;

MqlTradeCheckResult res = {};
bool sent = OrderCheck(req, res);
string s = "";
s += "request sent: " + (string)sent + "\n\n";
s += "result:" + "\n\n";
s += "retcode:      " + (string)res.retcode      + "\n";
s += "balance:      " + (string)res.balance      + "\n";
s += "profit:       " + (string)res.profit       + "\n";
s += "margin:       " + (string)res.margin       + "\n";
s += "margin_free:  " + (string)res.margin_free  + "\n";
s += "margin_level: " + (string)res.margin_level + "\n";
s += "comment:      " + (string)res.comment      + "\n";

int file_handle = FileOpen("r.txt", FILE_WRITE);
FileWriteString(file_handle, s);
FileClose(file_handle);
