# https://github.com/spotware/OpenApiPy
# pip install ctrader-open-api
# pip install service-identity
import ctrader-open-api as ct
import twisted as tw

# https://github.com/spotware/OpenApiPy/blob/main/ctrader_open_api/client.py
# https://docs.twisted.org/en/stable/api/twisted.application.internet.ClientService.html
client = ct.Client()
client.send(message=<ProtoOA...>, clientMsgId=None, responseTimeoutInSeconds=5): <twisted.internet.defer.Deferred>
client.startService()
client.stopService()
client.setConnectedCallback(callback)
client.setDisconnectedCallback(callback)
client.setMessageReceivedCallback(callback)

ct.EndPoints.
	AUTH_URI           = 'https://openapi.ctrader.com/apps/auth'
	TOKEN_URI          = 'https://openapi.ctrader.com/apps/token'
	PROTOBUF_DEMO_HOST = 'demo.ctraderapi.com'
	PROTOBUF_LIVE_HOST = 'live.ctraderapi.com'
	PROTOBUF_PORT      = 5035

# https://github.com/spotware/OpenApiPy/blob/main/ctrader_open_api/auth.py
ct.Auth.getAuthUri(scope='trading', baseUri=ct.EndPoints.AUTH_URI)
ct.Auth.getToken(authCode, baseUri=ct.EndPoints.TOKEN_URI)
ct.Auth.refreshToken(refreshToken, baseUri=ct.EndPoints.TOKEN_URI)

# https://github.com/spotware/OpenApiPy/blob/main/ctrader_open_api/protobuf.py
ct.Protobuf.populate()
ct.Protobuf.get(payload, fail=True)
ct.Protobuf.get_type(payload)
ct.Protobuf.extract(message)

# https://github.com/spotware/OpenApiPy/blob/main/ctrader_open_api/tcpProtocol.py
ct.TcpProtocol.connectionMade()
ct.TcpProtocol.connectionLost(reason)
ct.TcpProtocol.heartbeat()
ct.TcpProtocol.send(message, instant=False, clientMsgId=None, isCanceled=None)
ct.TcpProtocol.stringReceived(data)


# https://docs.twisted.org/en/stable/api/twisted.internet.defer.Deferred.html
deferred = twisted.internet.defer.Deferred()
deferred.addCallbacks(responseCallback, errorCallback)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# connect, auth app, auth account, then get symbols list
from ctrader_open_api import Client, Protobuf, TcpProtocol, EndPoints
from ctrader_open_api.messages.OpenApiMessages_pb2 import ProtoOAApplicationAuthReq, ProtoOAAccountAuthReq, ProtoOASymbolsListReq
from twisted.internet import reactor
import json

credentials = json.load(open('credentials.json'))
client = Client(EndPoints.PROTOBUF_DEMO_HOST, EndPoints.PROTOBUF_PORT, TcpProtocol)

def onSymsList(result):
	print('symbols received')
	syms = Protobuf.extract(result)
	print(syms)

def onAccAuth(result):
	print('account authenticated')
	req = ProtoOASymbolsListReq()
	req.ctidTraderAccountId = credentials['accountId']
	req.includeArchivedSymbols = False
	deferred = client.send(req)
	deferred.addCallbacks(onSymsList, onError)

def onAppAuth(result):
	print('app authenticated')
	req = ProtoOAAccountAuthReq()
	req.ctidTraderAccountId = credentials['accountId']
	req.accessToken = credentials['accessToken']
	deferred = client.send(req)
	deferred.addCallbacks(onAccAuth, onError)

def onError(failure):
	print('err: ', failure)

def connected(client):
	print('connected')
	req = ProtoOAApplicationAuthReq()
	req.clientId = credentials['clientId']
	req.clientSecret = credentials['clientSecret']
	deferred = client.send(req, responseTimeoutInSeconds=20) # err if no response under 20 secs
	deferred.addCallbacks(onAppAuth, onError)

def disconnected(client, reason):
	print('disconnected: ', reason)

def onMsg(client, message):
	print('message received: \n', Protobuf.extract(message))

client.setConnectedCallback(connected)
client.setDisconnectedCallback(disconnected)
client.setMessageReceivedCallback(onMsg)
client.startService()
reactor.run()




# authentication
# https://spotware.github.io/OpenApiPy/authentication/
from ctrader_open_api import Auth, EndPoints
from os import system
auth = Auth('Your client ID', 'Your client secret', 'Your App redirect URI')
authUri = auth.getAuthUri(scope='trading', baseUri=EndPoints.AUTH_URI)
system(f'start chrome "{authUri}"')
authorization_code = input('https://redirect-uri.com/?code={authorization-code-will-be-here}: ')
tokens = auth.getToken(authorization_code)
# newToken = auth.refreshToken('refresh_Token')
accessToken, refreshToken = tokens['accessToken'], tokens['refreshToken']
