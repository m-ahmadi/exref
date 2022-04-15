import numpy as np
from talib._ta_lib import * #import talib

close = np.random.random(100)
output = SMA(close)

close2 = np.random.random(20)
sma = SMA(close2, 5)
print(sma)

ema = EMA(np.array([1,3,5,7,9,2,4,6,8], dtype='double'), 5)
print(ema) # [nan, nan, nan, nan, 5.0, 4.0, 4.0, 4.666666666666667, 5.777777777777778]