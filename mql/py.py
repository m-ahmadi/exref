import MetaTrader5 as mt5 # pip install MetaTrader5
# https://www.mql5.com/en/docs/python_metatrader5

mt5.initialize()
		initialize(path)
		initialize(path, login, password, server, timeout, portable)
mt5.login(login, password, server, timeout)
mt5.shutdown()
mt5.version()
mt5.last_error()
mt5.account_info()
mt5.terminal_info()

mt5.symbols_total()
mt5.symbols_get(group='')
mt5.symbol_info(symbol='')
mt5.symbol_info_tick(symbol='')
mt5.symbol_select(symbol, enable=None)

mt5.market_book_add(symbol)
mt5.market_book_get(symbol)
mt5.market_book_release(symbol)

mt5.copy_rates_from(symbol, timeframe, date_from, count)
mt5.copy_rates_from_pos(symbol, timeframe, start_pos, count)
mt5.copy_rates_range(symbol, timeframe, date_from, date_to)
mt5.copy_ticks_from(symbol, date_from, count, flags)
mt5.copy_ticks_range(symbol, date_from, date_to, flags)

mt5.orders_total()
mt5.orders_get()
		orders_get(symbol)
		orders_get(group)
		orders_get(ticket)
mt5.order_calc_margin(action, symbol, volume, price)
mt5.order_calc_profit(action, symbol, volume, price_open, price_close)
mt5.order_check(request)
mt5.order_send(request)

mt5.positions_total()
mt5.positions_get()
		positions_get(symbol)
		positions_get(group)
		positions_get(ticket)
mt5.history_orders_total(date_from, date_to)
mt5.history_orders_get(date_from, date_to, group)
		history_orders_get(ticket)
		history_orders_get(position)

mt5.history_deals_total(date_from, date_to)
mt5.history_deals_get(date_from, date_to, group)
		history_deals_get(ticket)
		history_deals_get(position)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

import MetaTrader5 as mt5

if not mt5.initialize(): # connect to "MetaTrader 5"
	print('initialize() failed')
	mt5.shutdown()

print(mt5.terminal_info()) # connection status and parameters
print(mt5.version())       # get data on "MetaTrader 5" version
 
# request 1000 ticks from EURAUD
euraud_ticks = mt5.copy_ticks_from('EURAUD', datetime(2020,1,28,13), 1000, mt5.COPY_TICKS_ALL)

mt5.shutdown() # shutdown connection
