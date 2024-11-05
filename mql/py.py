import MetaTrader5 as mt # pip install MetaTrader5
# https://www.mql5.com/en/docs/python_metatrader5

mt.initialize()
		initialize(path)
		initialize(path, login, password, server, timeout, portable)
mt.login(login, password, server, timeout)
mt.shutdown()
mt.version()
code, msg = mt.last_error()
	1  'generic success'
	-1 'generic fail'
	-2 'invalid arguments/parameters'
	-3 'no memory condition'
	-4 'no history'
	-5 'invalid version'
	-6 'authorization failed'
	-7 'unsupported method'
	-8 'auto trading disabled'
	-10000 'internal IPC general error'
	-10001 'internal IPC send failed'
	-10002 'internal IPC recv failed'
	-10003 'internal IPC initialization failed' | 'internal IPC no ipc'
	-10004 'internal timeout'
mt.account_info()
mt.terminal_info()

mt.symbols_total()
mt.symbols_get(group='')
info = mt.symbol_info(symbol='')
info._asdict() {
'custom':                     False,
'chart_mode':                 0,
'select':                     True,
'visible':                    True,
'session_deals':              0,
'session_buy_orders':         0,
'session_sell_orders':        0,
'volume':                     0,
'volumehigh':                 0,
'volumelow':                  0,
'time':                       1730729408,
'digits':                     5,
'spread':                     5,
'spread_float':               True,
'ticks_bookdepth':            10,
'trade_calc_mode':            0,
'trade_mode':                 4,
'start_time':                 0,
'expiration_time':            0,
'trade_stops_level':          0,
'trade_freeze_level':         0,
'trade_exemode':              1,
'swap_mode':                  1,
'swap_rollover3days':         3,
'margin_hedged_use_leg':      False,
'expiration_mode':            15,
'filling_mode':               1,
'order_mode':                 127,
'order_gtc_mode':             0,
'option_mode':                0,
'option_right':               0,
'bid':                        1.09076,
'bidhigh':                    1.09147,
'bidlow':                     1.08698,
'ask':                        1.09081,
'askhigh':                    1.09151,
'asklow':                     1.08703,
'last':                       0.0,
'lasthigh':                   0.0,
'lastlow':                    0.0,
'volume_real':                0.0,
'volumehigh_real':            0.0,
'volumelow_real':             0.0,
'option_strike':              0.0,
'point':                      1e-05,
'trade_tick_value':           1.0,
'trade_tick_value_profit':    1.0,
'trade_tick_value_loss':      1.0,
'trade_tick_size':            1e-05,
'trade_contract_size':        100000.0,
'trade_accrued_interest':     0.0,
'trade_face_value':           0.0,
'trade_liquidity_rate':       0.0,
'volume_min':                 0.01,
'volume_max':                 500.0,
'volume_step':                0.01,
'volume_limit':               0.0,
'swap_long':                  -0.7,
'swap_short':                 -1.0,
'margin_initial':             0.0,
'margin_maintenance':         0.0,
'session_volume':             0.0,
'session_turnover':           0.0,
'session_interest':           0.0,
'session_buy_orders_volume':  0.0,
'session_sell_orders_volume': 0.0,
'session_open':               1.08771,
'session_close':              1.0834,
'session_aw':                 0.0,
'session_price_settlement':   0.0,
'session_price_limit_min':    0.0,
'session_price_limit_max':    0.0,
'margin_hedged':              100000.0,
'price_change':               0.6793,
'price_volatility':           0.0,
'price_theoretical':          0.0,
'price_greeks_delta':         0.0,
'price_greeks_theta':         0.0,
'price_greeks_gamma':         0.0,
'price_greeks_vega':          0.0,
'price_greeks_rho':           0.0,
'price_greeks_omega':         0.0,
'price_sensitivity':          0.0,
'basis':                      '',
'category':                   '',
'currency_base':              'EUR',
'currency_profit':            'USD',
'currency_margin':            'EUR',
'bank':                       '',
'description':                'Euro vs US Dollar',
'exchange':                   '',
'formula':                    '',
'isin':                       '',
'name':                       'EURUSD',
'page':                       'https://www.mql5.com/en/quotes/currencies/eurusd',
'path':                       'Forex\\EURUSD'}
tick = mt.symbol_info_tick(symbol='')
	tick.time        = 1730729171
	tick.bid         = 1.09096
	tick.ask         = 1.091
	tick.last        = 0.0
	tick.volume      = 0
	tick.time_msc    = 1730729171554
	tick.flags       = 1028
	tick.volume_real = 0.0
mt.symbol_select(symbol, enable=None)

mt.market_book_add(symbol)
mt.market_book_get(symbol)
mt.market_book_release(symbol)

mt.copy_rates_from(symbol, timeframe, date_from, count)
mt.copy_rates_from_pos(symbol, timeframe, start_pos, count)
mt.copy_rates_range(symbol, timeframe, date_from, date_to)

COPY_TICKS = COPY_TICKS_ALL | COPY_TICKS_INFO | COPY_TICKS_TRADE
mt.copy_ticks_from(symbol, date_from, count, flags=COPY_TICKS)
mt.copy_ticks_range(symbol, date_from, date_to, flags=COPY_TICKS)

mt.orders_total()
mt.orders_get()
		orders_get(symbol)
		orders_get(group)
		orders_get(ticket)
mt.order_calc_margin(action, symbol, volume, price)
mt.order_calc_profit(action, symbol, volume, price_open, price_close)
mt.order_check(request)
mt.order_send(request)

mt.positions_total()
mt.positions_get()
		positions_get(symbol)
		positions_get(group)
		positions_get(ticket)
mt.history_orders_total(date_from, date_to)
mt.history_orders_get(date_from, date_to, group)
		history_orders_get(ticket)
		history_orders_get(position)

mt.history_deals_total(date_from, date_to)
mt.history_deals_get(date_from, date_to, group)
		history_deals_get(ticket)
		history_deals_get(position)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

import MetaTrader5 as mt
from datetime import datetime

# pkg info
mt.__author__  # 'MetaQuotes Ltd.'
mt.__version__ # '5.0.4424'

# connection
if not mt.initialize():   # connect to "MetaTrader 5"
	print('initialize() failed. error:', mt.last_error())
	mt.shutdown()
print(mt.terminal_info()) # connection status and parameters
print(mt.version())       # get data on "MetaTrader 5" version
mt.shutdown()             # shutdown connection

# get ticks
sym = 'EURUSD'
tmf = mt.TIMEFRAME_M1;
ticks = mt.copy_ticks_from(sym, datetime(2020,1,28,13), 1000, mt.COPY_TICKS_ALL)

# get bars
sym = 'EURUSD'
tmf = mt.TIMEFRAME_M1;
start, end = datetime(2020,1,27,13), datetime(2020,1,28,13)
rates1 = mt.copy_rates_from(sym, tmf, start, 1000) # 1000 bars from datetime
rates2 = mt.copy_rates_from_pos(sym, tmf, 0, 1000) # 1000 bars from index 0
rates3 = mt.copy_rates_range(sym, tmf, start, end) # bars between two datetimes

# error checking
code, msg = mt.last_error() # (1, 'Success')
if code != 1:
	raise Exception(msg)
