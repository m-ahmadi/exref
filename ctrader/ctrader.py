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
import ctrader_open_api.messages.OpenApiMessages_pb2 as OA
import ctrader_open_api.messages.OpenApiModelMessages_pb2 as OAModel
import ctrader_open_api.messages.OpenApiCommonMessages_pb2 as OACommon
import ctrader_open_api.messages.OpenApiCommonModelMessages_pb2 as OAModelCommon
from twisted.internet import reactor


# connection, authentication and program lifecycle
import json
credentials = json.load(open('credentials.json'))
client = Client(EndPoints.PROTOBUF_DEMO_HOST, EndPoints.PROTOBUF_PORT, TcpProtocol)
PROTO_OA_ERROR_RES_PAYLOAD_TYPE = OA.ProtoOAErrorRes().payloadType
def main():
	print('ready to do something')
	reactor.stop()
def onAccAuth(message):
	if message.payloadType == PROTO_OA_ERROR_RES_PAYLOAD_TYPE:
		print('account authentication failed', '\n')
		print(Protobuf.extract(message), '\n')
		return
	print('account authenticated')
	main()
def onAppAuth(message):
	if message.payloadType == PROTO_OA_ERROR_RES_PAYLOAD_TYPE:
		print('app authentication failed', '\n')
		print(Protobuf.extract(message), '\n')
		return
	print('app authenticated')
	req = OA.ProtoOAAccountAuthReq()
	req.ctidTraderAccountId = credentials['accountId']
	req.accessToken = credentials['accessToken']
	deferred = client.send(req)
	deferred.addCallbacks(onAccAuth, onError)
def onError(failure):
	print('err: ', repr(failure.value))
def connected(client):
	print('connected')
	req = OA.ProtoOAApplicationAuthReq()
	req.clientId = credentials['clientId']
	req.clientSecret = credentials['clientSecret']
	deferred = client.send(req, responseTimeoutInSeconds=20) # err if no response under 20 secs
	deferred.addCallbacks(onAppAuth, onError)
def disconnected(client, reason):
	print('disconnected: ', reason)
def onMsg(client, message):
	ignores = [i.payloadType for i in [OACommon.ProtoHeartbeatEvent(), OA.ProtoOAAccountAuthRes(), OA.ProtoOAApplicationAuthRes()]]
	if message.payloadType in ignores:
		return
	print('message received')
client.setConnectedCallback(connected)
client.setDisconnectedCallback(disconnected)
client.setMessageReceivedCallback(onMsg)
client.startService()
reactor.run()


# get symbol list
import pandas as pd
def onSymList(message):
	response = Protobuf.extract(message)
	
	sym, *_ = [*filter(lambda i: i.symbolName == 'XAUUSD', response.symbol)]
	sym_fields = sym.ListFields()
	sym_keys = [i[0].name for i in sym_fields]
	
	sym_vals = [i[1] for i in sym_fields]
	sym_vals2 = [getattr(sym, i[0].name) for i in sym_fields]
	sym_vals == sym_vals2 # True
	
	sym_dict = {i[0].name: i[1] for i in sym_fields}
	sym_dict2 = {i[0].name: getattr(sym, i[0].name) for i in sym_fields}
	sym_dict == sym_dict2 # True
	
	sym_keys  # ['symbolId','symbolName','enabled','baseAssetId','quoteAssetId','symbolCategoryId','description']
	sym_vals  # [41, 'XAUUSD', True, 17, 15, 2, 'Gold vs US Dollar']
	
	syms = []
	for sym in response.symbol:
		sym_dict = {i[0].name: i[1] for i in sym.ListFields()}
		syms.append(sym_dict)
	pd.DataFrame(syms).to_csv('syms.csv', index=False)
	syms_df = pd.read_csv('syms.csv', index_col='symbolName')

def main():
	req = OA.ProtoOASymbolsListReq()
	req.ctidTraderAccountId = credentials['accountId']
	req.includeArchivedSymbols = False
	deferred = client.send(req)
	deferred.addCallbacks(onSymList, onError)


# place order
def onNewOrderRes(message):
	if message.payloadType != OA.ProtoOAExecutionEvent().payloadType:
		print('order not placed')
		return
	response = Protobuf.extract(message)
	print('order successfully placed');
	print('order id:', response.order.orderId)
def main():
	req = OA.ProtoOANewOrderReq()
	req.ctidTraderAccountId = credentials['accountId']
	req.orderType = OAModel.ProtoOAOrderType.LIMIT
	req.tradeSide = OAModel.ProtoOATradeSide.BUY
	req.symbolId = 41 # XAUUSD
	req.limitPrice = 2700.34
	req.volume = 100 # equals 0.01 lot
	req.stopLoss = 2600.34
	req.takeProfit = 2750.34
	deferred = client.send(req)
	deferred.addCallbacks(onNewOrderRes, onError)


# get timeseries data
import datetime as dt
import pandas as pd
def onTrendbar(message):
	response = Protobuf.extract(message)
	bars = []
	for bar in response.trendbar:
		timestamp = bar.utcTimestampInMinutes * 60 # seconds
		open = (bar.low + bar.deltaOpen) / 100000.0
		high = (bar.low + bar.deltaHigh) / 100000.0
		low = bar.low / 100000.0
		close = (bar.low + bar.deltaClose) / 100000.0
		bars.append([timestamp, open, high, low, close, bar.volume])
	pd.DataFrame(bars, columns=['timestamp','open','high','low','close','volume']).to_csv('bars.csv', index=False)
	bars_df = pd.read_csv('bars.csv', index_col='timestamp')
	bars_df.index = pd.to_datetime(bars_df.index, unit='s', utc=True) # optional
def main():
	req = OA.ProtoOAGetTrendbarsReq()
	req.symbolId = 41 # 'XAUUSD'
	req.ctidTraderAccountId = credentials['accountId']
	req.period = OAModel.ProtoOATrendbarPeriod.D1
	req.fromTimestamp = int(dt.datetime(2024,12,1, tzinfo=dt.UTC).timestamp()) * 1000
	req.toTimestamp = int(dt.datetime(2024,12,31, tzinfo=dt.UTC).timestamp()) * 1000
	# req.count = <uint32> # limit returned bars (does not work without `req.toTimestamp`)
	deferred = client.send(req)
	deferred.addCallbacks(onTrendbar, onError)


# get full timeseries data
import datetime as dt
import json
import os
from timeit import default_timer as timer
import pandas as pd
CHUNK_SIZE = {'days': 1} # span covered in 1 request
THRESHOLD_OF_EMPTY_RESPONSES = 60 # cutoff logic
outfile = 'bars.raw.csv'
statefile = 'last_fromTimestamp.txt'
cols = ['utcTimestampInMinutes','low','deltaOpen','deltaClose','deltaHigh','volume']
request_timer = 0 # for measuring time taken by requests
empty_resp_counter = 0 # for counting sequantial empty responses
def main():
	sym_id = 41 # 'XAUUSD'
	start, end = None, None
	if os.path.exists(statefile):
		with open(statefile) as f:
			last_saved_fromTimestamp = f.read()
		last_fromDatetime = dt.datetime.fromtimestamp(int(last_saved_fromTimestamp)/1000)
		# date range must not be redundant between runs (otherwise creates duplicates in outfile)
		start = last_fromDatetime - dt.timedelta(**CHUNK_SIZE)
		end = last_fromDatetime
	else:
		now = dt.datetime.now(tz=dt.UTC)
		today_midnight = now.replace(hour=0, minute=0, second=0, microsecond=0)
		start = today_midnight - dt.timedelta(**CHUNK_SIZE)
		end = today_midnight
	fr, to = [int(i.timestamp()*1000) for i in [start, end]]
	reqBars(sym_id, fr, to)
	print('FROM:                           TO:                             SECS_TOOK:      BARS:')

def reqBars(sym_id, fr, to):
	req = OA.ProtoOAGetTrendbarsReq()
	req.symbolId = sym_id
	req.ctidTraderAccountId = credentials['accountId']
	req.period = OAModel.ProtoOATrendbarPeriod.M1
	req.fromTimestamp = fr
	req.toTimestamp = to
	deferred = client.send(req, responseTimeoutInSeconds=20)
	deferred.addCallbacks(onTrendbar, onError, [fr, to])
	global request_timer
	request_timer = timer()

def onTrendbar(message, begin, end):
	response = Protobuf.extract(message)
	# print some stuff about the chunk
	global request_timer
	chunk_info = [
		*[dt.datetime.fromtimestamp(i/1000) for i in [begin,end]],
		round((timer()-request_timer)),
		len(response.trendbar),
	]
	print('\t\t'.join(map(str,chunk_info)))
	if message.payloadType == OA.ProtoOAErrorRes().payloadType:
		print('server sent error')
	# process chunk response
	if len(response.trendbar) > 0:
		chunk_bars = [[str(getattr(i,k)) for k in cols] for i in response.trendbar]
		chunk_str = '\n'.join([','.join(i) for i in chunk_bars]) + '\n'
		with open(outfile, 'a', newline='') as f: f.write(chunk_str)
	# update state file
	with open(statefile, 'w') as f: f.write(str(begin))
	# count up empty server responses (used to detect when reached end of data)
	global empty_resp_counter
	empty_resp_counter = 0 if len(response.trendbar) > 0 else (empty_resp_counter + 1)
	# assume we reached end of data if last n requests had no data
	if empty_resp_counter > THRESHOLD_OF_EMPTY_RESPONSES:
		df = pd.read_csv(outfile, names=cols)
		df2 = pd.DataFrame()
		df2['timestamp'] = df['utcTimestampInMinutes'] * 60
		df2['open'] = (df['low'] + df['deltaOpen']) / 100_000
		df2['high'] = (df['low'] + df['deltaHigh']) / 100_000
		df2['low'] = df['low'] / 100_000
		df2['close'] = (df['low'] + df['deltaClose']) / 100_000
		df2['volume'] = df['volume']
		df2.sort_values(by='timestamp', ascending=True, inplace=True)
		df2.to_csv('bars.csv', index=False)
		print('all done. shutting down...')
		reactor.stop()
		return
	# request next chunk
	prev_frm = dt.datetime.fromtimestamp(begin / 1000)
	new_frm = prev_frm - dt.timedelta(**CHUNK_SIZE)
	fr, to = [int(i.timestamp()*1000) for i in [new_frm, prev_frm]]
	reqBars(response.symbolId, fr, to)


# get tick data
import datetime as dt
import pandas as pd
def onTickData(message, bid_or_ask):
	response = Protobuf.extract(message)
	if message.payloadType == OA.ProtoOAErrorRes().payloadType:
		print('server sent error')
		print(response)
		return
	if response.hasMore:
		print('time range specified contains more ticks than allowed per request')
	tickData = response.tickData
	if not len(tickData): return
	chunk_ticks = []
	prev_timestamp = tickData[0].timestamp
	prev_tick = tickData[0].tick
	for i, v in enumerate(tickData):
		timestamp = prev_timestamp + v.timestamp if i > 0 else v.timestamp
		tick = prev_tick + v.tick if i > 0 else v.tick
		tick_normalized = tick / 100_000
		chunk_ticks.append(map(str, [timestamp, tick_normalized]))
		prev_timestamp, prev_tick = timestamp, tick
	chunk_str = '\n'.join([','.join(i) for i in chunk_ticks]) + '\n'
	outfile = f'ticks.{bid_or_ask}.csv'
	with open(outfile, 'a', newline='') as f:f.write(chunk_str)
def reqTicks(sym_id, frm, to, type):
	if to - frm > dt.timedelta(weeks=1).total_seconds():
		raise ValueError('cannot request tick data for a period larger than one week!')
	req = OA.ProtoOAGetTickDataReq()
	req.symbolId = sym_id
	req.ctidTraderAccountId = credentials['accountId']
	req.type = type
	req.fromTimestamp = int(frm * 1000)
	req.toTimestamp = int(to * 1000)
	deferred = client.send(req, responseTimeoutInSeconds=20)
	type_name = {OAModel.ProtoOAQuoteType.BID: 'bid', OAModel.ProtoOAQuoteType.ASK: 'ask'}[type]
	deferred.addCallbacks(onTickData, onError, [type_name])
def main():
	for file in ['ticks.bid.csv', 'ticks.ask.csv']:
		if os.path.exists(file): os.remove(file)
	sym_id = 41 # 'XAUUSD'
	# single request
	datetime_range = [(2025,1,2,18,30), (2025,1,2,18,45)]
	frm, to = [dt.datetime(*i, tzinfo=dt.UTC).timestamp() for i in datetime_range]
	reqTicks(sym_id, frm, to, OAModel.ProtoOAQuoteType.BID)
	reqTicks(sym_id, frm, to, OAModel.ProtoOAQuoteType.ASK)
	# multiple requests (must increase `responseTimeoutInSeconds` if requesting large span)
	for from_date in pd.date_range('2025/1/2 18:30', '2025/1/2 18:45', freq='1min', tz=dt.UTC):
		to_date = from_date + dt.timedelta(minutes=1)
		frm, to = from_date.timestamp(), to_date.timestamp()
		reqTicks(sym_id, frm, to, OAModel.ProtoOAQuoteType.BID)
		reqTicks(sym_id, frm, to, OAModel.ProtoOAQuoteType.ASK)


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
