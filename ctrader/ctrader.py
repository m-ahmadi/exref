import ctrader-open-api as ct # pip install ctrader-open-api service-identity
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

# messages
# https://help.ctrader.com/open-api/messages/
import ctrader_open_api.messages.OpenApiMessages_pb2 as OA
import ctrader_open_api.messages.OpenApiModelMessages_pb2 as OAModel
import ctrader_open_api.messages.OpenApiCommonMessages_pb2 as OACommon
import ctrader_open_api.messages.OpenApiCommonModelMessages_pb2 as OAModelCommon

list_ProtoOA(OA) '''
AccountAuth                    ><
AccountDisconnectEvent         —
AccountLogout                  ><
AccountsTokenInvalidatedEvent  —
AmendOrder                     >
AmendPositionSLTP              >
ApplicationAuth                ><
AssetClassList                 ><
AssetList                      ><
CancelOrder                    >
CashFlowHistoryList            ><
ClientDisconnectEvent          —
ClosePosition                  >
DealList                       ><
DealListByPositionId           ><
DealOffsetList                 ><
DepthEvent                     —
Error                          <
ExecutionEvent                 —
ExpectedMargin                 ><
GetAccountListByAccessToken    ><
GetCtidProfileByToken          ><
GetDynamicLeverageByID         ><
GetPositionUnrealizedPnL       ><
GetTickData                    ><
GetTrendbars                   ><
MarginCallList                 ><
MarginCallTriggerEvent         —
MarginCallUpdate               ><
MarginCallUpdateEvent          —
MarginChangedEvent             —
NewOrder                       >
OrderDetails                   ><
OrderErrorEvent                —
OrderList                      ><
OrderListByPositionId          ><
Reconcile                      ><
RefreshToken                   ><
SpotEvent                      —
SubscribeDepthQuotes           ><
SubscribeLiveTrendbar          ><
SubscribeSpots                 ><
SymbolById                     ><
SymbolCategoryList             ><
SymbolChangedEvent             —
SymbolsForConversion           ><
SymbolsList                    ><
Trader                         ><
TraderUpdatedEvent             —
TrailingSLChangedEvent         —
UnsubscribeDepthQuotes         ><
UnsubscribeLiveTrendbar        ><
UnsubscribeSpots               ><
Version                        >< '''

list_ProtoOA(OAModel, fillblanks=False) '''
AccessRights                          
AccountType                           
ArchivedSymbol                        
Asset                                 
AssetClass                            
BonusDepositWithdraw                  
ChangeBalanceType                     
ChangeBonusType                       
ClientPermissionScope                 
ClosePositionDetail                   
CommissionType                        
CtidProfile                           
CtidTraderAccount                     
DayOfWeek                             
Deal                                  
DealOffset                            
DealStatus                            
DepositWithdraw                       
DepthQuote                            
DynamicLeverage                       
DynamicLeverageTier                   
ErrorCode                             
ExecutionType                         
ExpectedMargin                        
Holiday                               
Interval                              
LightSymbol                           
LimitedRiskMarginCalculationStrategy  
MarginCall                            
MinCommissionType                     
NotificationType                      
Order                                 
OrderStatus                           
OrderTriggerMethod                    
OrderType                             
PayloadType                           
Position                              
PositionStatus                        
PositionUnrealizedPnL                 
QuoteType                             
SwapCalculationType                   
Symbol                                
SymbolCategory                        
SymbolDistanceType                    
TickData                              
TimeInForce                           
TotalMarginCalculationType            
TradeData                             
TradeSide                             
Trader                                
TradingMode                           
Trendbar                              
TrendbarPeriod '''

list_nonProtoOA(OACommon) '''
ProtoErrorRes
ProtoHeartbeatEvent
ProtoMessage '''

list_nonProtoOA(OAModelCommon) '''
ProtoErrorCode
ProtoPayloadType '''


def list_ProtoOA(obj, fillblanks=True):
	names = set()
	marks = {}
	for i in dir(obj):
		prefix = 'ProtoOA'
		if not i.startswith(prefix): continue
		fullname = i.split(prefix)[1]
		end = fullname[-3:]
		if end not in ['Req', 'Res']:
			names.add(fullname)
			marks[fullname] = []
			continue
		name, type = fullname[:-3], fullname[-3:]
		if name not in marks: marks[name] = []
		if type == 'Req': marks[name].append('>')
		if type == 'Res': marks[name].append('<')
		names.add(name)
	maxchr = max([len(i) for i in names])
	r = []
	for name in names:
		mark = marks[name]
		if fillblanks and not len(mark): mark = ['—']
		pad = '  ' + ' '*(maxchr - len(name))
		sfmt = name + pad + ''.join(mark)
		r.append(sfmt)
	print('\n'.join(sorted(r, key=str)))

def list_nonProtoOA(obj, startswith='', flagonly=False):
	notallowed = ['ProtoOA', '_', '__', 'DESCRIPTOR']
	base_criteria = lambda s: not sum([int(s.startswith(i)) for i in notallowed]) and not s.endswith('__pb2') and s.startswith(startswith)
	if flagonly:
		criteria = lambda s: base_criteria(s) and s.isupper()
	else:
		criteria = lambda s: base_criteria(s) and not s.isupper()
	r = filter(criteria, dir(obj))
	print('\n'.join(r))
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# needed imports
from ctrader_open_api import Client, Protobuf, TcpProtocol, EndPoints
from ctrader_open_api.messages.OpenApiCommonMessages_pb2 import *
from ctrader_open_api.messages.OpenApiMessages_pb2 import *
from ctrader_open_api.messages.OpenApiModelMessages_pb2 import *
from twisted.internet import reactor


# connection, authentication and program lifecycle
import json
credentials = json.load(open('credentials.json'))
client = Client(EndPoints.PROTOBUF_DEMO_HOST, EndPoints.PROTOBUF_PORT, TcpProtocol)
def main():
	print('ready to do something')
	reactor.stop()
def onAccAuth(result):
	print('account authenticated')
	main()
def onAppAuth(result):
	print('app authenticated')
	req = ProtoOAAccountAuthReq()
	req.ctidTraderAccountId = credentials['accountId']
	req.accessToken = credentials['accessToken']
	deferred = client.send(req)
	deferred.addCallbacks(onAccAuth, onError)
def onError(failure):
	print('err: ', repr(failure.value))
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
	ignores = [i.payloadType for i in [ProtoHeartbeatEvent(), ProtoOAAccountAuthRes(), ProtoOAApplicationAuthRes()]]
	if message.payloadType in ignores:
		return
	print('message received')
client.setConnectedCallback(connected)
client.setDisconnectedCallback(disconnected)
client.setMessageReceivedCallback(onMsg)
client.startService()
reactor.run()


# get symbol list
def onSymList(result):
	res = Protobuf.extract(result)
	sym, *_ = [*filter(lambda i: i.symbolName == 'XAUUSD', res.symbol)]
	sym_keys = [i[0].name for i in sym.ListFields()]
	sym_vals = [getattr(sym, i[0].name) for i in sym.ListFields()]
	sym_dict = {i[0].name: getattr(sym, i[0].name) for i in sym.ListFields()}
	sym_keys # ['symbolId','symbolName','enabled','baseAssetId','quoteAssetId','symbolCategoryId','description']
	sym_vals # [41, 'XAUUSD', True, 17, 15, 2, 'Gold vs US Dollar']
def main():
	req = ProtoOASymbolsListReq()
	req.ctidTraderAccountId = credentials['accountId']
	req.includeArchivedSymbols = False
	deferred = client.send(req)
	deferred.addCallbacks(onSymList, onError)


# getting credentials programmatically
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
