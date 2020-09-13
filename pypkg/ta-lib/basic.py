import numpy as np
from talib._ta_lib import * #import talib

close = np.random.random(100)
output = SMA(close)

close2 = np.random.random(20)
sma = SMA(close2, 5)
print(sma)