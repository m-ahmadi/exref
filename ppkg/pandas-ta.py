import pandas as pd
import pandas_ta as ta

# some data
data = [[4,3,2,3],[3,2,1,2],[2,10,9,10],[10,12,11,12],[12,11,10,11],[11,10,9,10],[10,9,8,9],[9,8,7,8],[8,7,6,7],[7,6,5,6],[6,7,6,7],[7,9,8,9],[9,10,9,10],[10,12,11,12],[12,11,10,11],[11,10,9,10],[10,12,11,12],[12,13,12,13],[13,15,14,15],[15,17,15,17]]
cols = ['open','high','low','close']

df = pd.DataFrame(data, columns=cols)

# basic
rsi = df.ta.rsi(length=14)
st = df.ta.supertrend(length=10, multiplier=3)

# append results to the dataframe
df.ta.rsi(length=14, append=True)
df['RSI_14'] # ...

# see available indicators
df.ta.indicators()

# see help
help(ta.rsi)      # offline help
df.ta.help('rsi') # online help
