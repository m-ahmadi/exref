import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.stattools import adfuller

# time series from i.i.d. gaussian random process
np.random.seed(0)
s = np.random.randn(2520)
s_cum = np.cumsum(s)
_, axs = plt.subplots(2, figsize=(8,7), sharex=True, constrained_layout=True)
axs[0].plot(s)
axs[1].plot(s_cum)
plt.show()

# how stationary becomes non-stationary
np.random.seed(0)
idx = np.linspace(0, 10, 2520)
s = 1 * np.sin(2.*idx + .5)
s_cum = np.cumsum(s)
s_shiftpos = s + 1
s_shiftpos_cum = np.cumsum(s_shiftpos)
_, axs = plt.subplots(4, figsize=(8,7), sharex=True, constrained_layout=True)
axs[0].plot(s, label='sine-wave')
axs[1].plot(s_cum, label='cumsum of sine-wave')
axs[2].plot(s_shiftpos, label='sine-wave shifted by 1')
axs[3].plot(s_shiftpos_cum, label='cumsum of shifted sine-wave')
for ax in axs: ax.legend(loc='upper left')
plt.show()