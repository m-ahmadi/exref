var credentials = require('./credentials.json');
var oa = require('./OAModel.json');
var pt = require('./payloadTypes.json');
uid = (i => () => 'cm_id_' + i++)(1);

// connection, authentication and program lifecycle
var { accountId: ctidTraderAccountId, accessToken } = credentials;
var ws = new WebSocket('wss://live.ctraderapi.com:5036'); // or 'demo.ctraderapi.com:5036'
function onResp(message) {
	console.log('main messages come here', message.payload);
}
function main() {
	console.log('ready to do something');
}
ws.onopen = function (e) {
	console.log('connected', e);
	var clientMsg = {
		clientMsgId: uid(),
		payloadType: pt.req.ApplicationAuth,
		payload: {
			clientId: credentials.clientId,
			clientSecret: credentials.clientSecret
		}
	};
	ws.send(JSON.stringify(clientMsg));
};
ws.onmessage = function (e) {
	var serverMsg = JSON.parse(e.data);
	var { payloadType } = serverMsg;
	if (payloadType === pt.res.ApplicationAuth) {
		console.log('app auth done');
		var clientMsg = {
			clientMsgId: uid(),
			payloadType: pt.req.AccountAuth,
			payload: {ctidTraderAccountId, accessToken},
		};
		ws.send(JSON.stringify(clientMsg));
		return;
	}
	if (payloadType === pt.res.AccountAuth) {
		console.log('account auth done');
		main();
		return;
	}
	if (payloadType === pt.res.Error) {
		console.log('server sent error message', serverMsg.payload);
		return;
	}
	if (payloadType === pt.common.Heartbeat) {
		console.log('heartbeat event');
		return;
	}
	onResp(serverMsg);
};
ws.onerror = function (e) {
	console.log('websocket error', e);
};
ws.onclose = function (e) {
	console.log('disconnected', e.code, e.reason, e.wasClean);
};


// get symbol list
var fs = require('fs');
function onResp(message) {
	if (message.payloadType !== pt.res.SymbolsList) return;
	var syms = message.payload.symbol;
	fs.writeFileSync('syms.json', JSON.stringify(syms,null,2));
}
function main() {
	var clientMsg = {
		clientMsgId: uid(),
		payloadType: pt.req.SymbolsList,
		payload: { ctidTraderAccountId, accessToken,
			includeArchivedSymbols: false,
		}
	};
	ws.send(JSON.stringify(clientMsg));
}


// get timeseries data
var fs = require('fs');
function onResp(message) {
	if (message.payloadType !== pt.res.GetTrendbars) return;
	var headers = ['timestamp','open','high','low','close','volume'];
	var bars = message.payload.trendbar.map(bar => {
		var timestamp = bar.utcTimestampInMinutes * 60; // seconds
		var open = (bar.low + bar.deltaOpen) / 100_000;
		var high = (bar.low + bar.deltaHigh) / 100_000;
		var low = bar.low / 100_000;
		var close = (bar.low + bar.deltaClose) / 100_000;
		return [timestamp, open, high, low, close, bar.volume];
	});
	var out = [headers, ...bars];
	fs.writeFileSync('bars.json', JSON.stringify(out,null,2));
}
function main() {
	var clientMsg = {
		clientMsgId: uid(),
		payloadType: pt.req.GetTrendbars,
		payload: { ctidTraderAccountId, accessToken,
			symbolId: 41, // XAUUSD
			period: OAModel.ProtoOATrendbarPeriod.D1,
			fromTimestamp: Date.UTC(2025,0,1),
			toTimestamp: Date.UTC(2025,0,15),
		}
	};
	ws.send(JSON.stringify(clientMsg));
}


// place order
function onResp(message) {
	if (message.payloadType !== pt.event.Execution) return;
	console.log('order successfully placed');
	console.log('order id:', message.payload.order.orderId);
}
function main() {
	var clientMsg = {
		clientMsgId: uid(),
		payloadType: pt.req.NewOrder,
		payload: { ctidTraderAccountId, accessToken,
			orderType: oa.OrderType.LIMIT,
			tradeSide: oa.TradeSide.BUY,
			symbolId: 41, // XAUUSD
			limitPrice: 2700.34,
			volume: 100, // equals 0.01 lot (note: for EURUSD 100_000 equals 0.01 lot)
			stopLoss: 2600.34,
			takeProfit: 2750.34,
		}
	};
	ws.send(JSON.stringify(clientMsg));
}


// place order - relative sl,tp
function calcRelativeByPrice(price, pipDistance) {
	const decimalCount = price.toString().split('.').at(-1).length;
	const pip = +('0.' + '1'.padStart(decimalCount, '0'));
	return Math.round(pipDistance * pip * 100_000);
}
function calcRelativeByPip(pip, pipDistance) {
	return Math.round(pipDistance * pip * 100_000);
}
function onResp(message) {
	if (message.payloadType !== pt.event.Execution) return;
	console.log(message.payload);
}
function main() {
	var order = {
		orderType: oa.OrderType.LIMIT,
		tradeSide: oa.TradeSide.BUY,
		symbolId: 41, // XAUUSD
		limitPrice: 3327.45,
		volume: 100,
	};
	order.relativeStopLoss = calcRelativeByPrice(order.limitPrice, 200);
	order.relativeTakeProfit = calcRelativeByPrice(order.limitPrice, 350);
	// or
	order.relativeStopLoss = calcRelativeByPip(0.01, 200);
	order.relativeTakeProfit = calcRelativeByPip(0.01, 350);
	var clientMsg = {
		clientMsgId: uid(),
		payloadType: pt.req.NewOrder,
		payload: {ctidTraderAccountId, accessToken, ...order}
	};
	ws.send(JSON.stringify(clientMsg));
}
