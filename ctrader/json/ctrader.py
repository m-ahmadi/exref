import json
import asyncio as aio
from websockets.asyncio.client import connect # pip install websockets

readjson = lambda path: json.load(open(path))
creds = readjson('./credentials.json')
OAModel = readjson('./OAModel.json')
payloadTypes = OAModel['ProtoOAPayloadType']


# set up a function for constructing client messages
uid_counter = 0
def construct_client_msg(payloadType, fields={}):
	global uid_counter
	uid_counter += 1
	client_msg = {
		'clientMsgId': f'cm_id_{uid_counter}',
		'payloadType': payloadTypes[payloadType],
		'payload': {
			'ctidTraderAccountId': creds['accountId'],
			'accessToken': creds['accessToken'],
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
			'payloadType': payloadTypes['PROTO_OA_APPLICATION_AUTH_REQ'],
			'payload': {
				'clientId': creds['clientId'],
				'clientSecret': creds['clientSecret']
			}
		}
		await ws.send(json.dumps(client_msg))
		server_msg = json.loads(await ws.recv())
		if server_msg['payloadType'] != payloadTypes['PROTO_OA_APPLICATION_AUTH_RES']:
			print('Application authentication failed')
		
		print('Account authentication')
		client_msg = construct_client_msg('PROTO_OA_ACCOUNT_AUTH_REQ')
		await ws.send(client_msg)
		server_msg = json.loads(await ws.recv())
		if server_msg['payloadType'] != payloadTypes['PROTO_OA_ACCOUNT_AUTH_RES']:
			print('Account authentication failed')
		
		print('Getting symbols list')
		client_msg = construct_client_msg('PROTO_OA_SYMBOLS_LIST_REQ')
		await ws.send(client_msg)
		server_msg = json.loads(await ws.recv())
		if server_msg['payloadType'] != payloadTypes['PROTO_OA_SYMBOLS_LIST_RES']:
			print('Getting symbols failed')
		
		print('Saving symbol list to file')
		symbol_data = server_msg['payload']['symbol']
		with open('symbols.json', 'w', encoding='utf-8') as f:
			json.dump(symbol_data, f, ensure_ascii=False, indent=2)
		
aio.run(main())
