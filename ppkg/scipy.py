import numpy as np
import scipy # pip install numpy scipy (depends on numpy)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# detrend
from scipy.signal import detrend
detrend(data=[], axis=-1, type='linear|constant', bp=0, overwrite_data=False)
# https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.detrend.html

# example
import numpy as np
from scipy.signal import detrend
import matplotlib.pyplot as plt

n = 200
t = np.arange(n)
x = np.random.randn(n).cumsum()

res_const = detrend(x, type='constant')
res_linear = detrend(x, type='linear')

fig, ax = plt.subplots()
ax.plot(t, x, label='No detrending', lw=1.5)
ax.plot(t, res_const, label="type='constant'", lw=1)
ax.plot(t, res_linear, label="type='linear'", lw=1)
ax.legend()
plt.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@