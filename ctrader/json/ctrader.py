import json
import asyncio as aio
from types import SimpleNamespace
from websockets.asyncio.client import connect # pip install websockets

# utils
parsejson = lambda s: json.loads(s, object_hook=lambda d: SimpleNamespace(**d))
def readfile(path):
	with open(path) as f:
		return parsejson(f.read())

creds = readfile('./credentials.json')
oa = readfile('./OAModel.json')
pt = readfile('./payloadTypes.json')


# set up a function for constructing client messages
uid_counter = 0
def construct_client_msg(payloadType, fields={}):
	global uid_counter
	uid_counter += 1
	client_msg = {
		'clientMsgId': f'cm_id_{uid_counter}',
		'payloadType': payloadType,
		'payload': {
			'ctidTraderAccountId': creds.accountId,
			'accessToken': creds.accessToken,
			**fields
		}
	}
	return json.dumps(client_msg)


async def main():
	async with connect('wss://live.ctraderapi.com:5036') as ws:
		print('Application authentication')
		# we don't use the `construct_client_msg()` function for the first message,
		# because its payload is different from the rest of the messages
		client_msg = {
			'clientMsgId': f'cm_id_{uid_counter}',
			'payloadType': pt.req.ApplicationAuth,
			'payload': {
				'clientId': creds.clientId,
				'clientSecret': creds.clientSecret
			}
		}
		await ws.send(json.dumps(client_msg))
		server_msg = parsejson(await ws.recv())
		if server_msg.payloadType != pt.res.ApplicationAuth:
			print('Application authentication failed')
		
		print('Account authentication')
		client_msg = construct_client_msg(pt.req.AccountAuth)
		await ws.send(client_msg)
		server_msg = parsejson(await ws.recv())
		if server_msg.payloadType != pt.res.AccountAuth:
			print('Account authentication failed')
		
		print('Getting symbols list')
		client_msg = construct_client_msg(pt.req.SymbolsList)
		await ws.send(client_msg)
		server_msg = parsejson(await ws.recv())
		if server_msg.payloadType != pt.res.SymbolsList:
			print('Getting symbols failed')
		
		print('Saving symbol list to file')
		symbols = [sym.__dict__ for sym in server_msg.payload.symbol]
		with open('symbols.json', 'w', encoding='utf-8') as f:
			json.dump(symbols, f, ensure_ascii=False, indent=2)
		
aio.run(main())
