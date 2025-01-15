var credentials = require('../credentials.json');
var payloadTypes = require('./OAModel.json').ProtoOAPayloadType;
PROTO_HEARTBEAT_EVENT_PAYLOADTYPE = 51;
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
		payloadType: payloadTypes.PROTO_OA_APPLICATION_AUTH_REQ,
		payload: {
			clientId: credentials.clientId,
			clientSecret: credentials.clientSecret
		}
	};
	ws.send(JSON.stringify(clientMsg));
};
ws.onmessage = function (e) {
	var serverMsg = JSON.parse(e.data);
	if (serverMsg.payloadType === payloadTypes.PROTO_OA_APPLICATION_AUTH_RES) {
		var clientMsg = {
			clientMsgId: uid(),
			payloadType: payloadTypes.PROTO_OA_ACCOUNT_AUTH_REQ,
			payload: {ctidTraderAccountId, accessToken},
		};
		ws.send(JSON.stringify(clientMsg));
		return;
	}
	if (serverMsg.payloadType === payloadTypes.PROTO_OA_ACCOUNT_AUTH_RES) {
		main();
		return;
	}
	if (serverMsg.payloadType === payloadTypes.PROTO_OA_ERROR_RES) {
		console.log('server sent error message');
		return;
	}
	if (serverMsg.payloadType === PROTO_HEARTBEAT_EVENT_PAYLOADTYPE) {
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
	var syms = message.payload.symbol;
	fs.writeFileSync('syms.json', JSON.stringify(syms,null,2));
}
function main() {
	var clientMsg = {
		clientMsgId: uid(),
		payloadType: payloadTypes.PROTO_OA_SYMBOLS_LIST_REQ,
		payload: {ctidTraderAccountId, accessToken,
			includeArchivedSymbols: false,
		}
	};
	ws.send(JSON.stringify(clientMsg));
}
