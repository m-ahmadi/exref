import MetaTrader5 as mt # pip install MetaTrader5
# https://www.mql5.com/en/docs/python_metatrader5

mt.initialize()
		initialize(path)
		initialize(path, login, password, server, timeout, portable)
mt.login(login, password, server, timeout)
mt.shutdown()
mt.version()
mt.last_error()
mt.account_info()
mt.terminal_info()

mt.symbols_total()
mt.symbols_get(group='')
mt.symbol_info(symbol='')
mt.symbol_info_tick(symbol='')
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

# connection
if not mt.initialize():   # connect to "MetaTrader 5"
	print('initialize() failed')
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

