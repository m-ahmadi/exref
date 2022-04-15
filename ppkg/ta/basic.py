# pip install pandas ta
import pandas as pd
import ta

# ta.trend.      sma ema
# ta.momentum.   rsi stoch
# ta.volume.     ema obv fmi
# ta.volatility. average_true_range
# ta.others.     ...

print(
	ta.trend.ema_indicator( pd.Series([1,2,3,4,5,6,7,8]), 5 )
)