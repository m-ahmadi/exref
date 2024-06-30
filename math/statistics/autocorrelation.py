from statsmodels.graphics.tsaplots import plot_acf, plot_pacf

plot_acf(x=[], ax=None, lags=None|0|[], *, alpha=0.05, use_vlines=True, adjusted=False, fft=False, missing='none', title='Autocorrelation', zero=True, auto_ylims=False, bartlett_confint=True, vlines_kwargs=None, **kwargs)
# autocorrelation plot
# https://www.statsmodels.org/stable/generated/statsmodels.graphics.tsaplots.plot_acf.html

plot_pacf(x=[], ax=None, lags=None|0|[], alpha=0.05, method='ywm', use_vlines=True, title='Partial Autocorrelation', zero=True, vlines_kwargs=None, **kwargs)
# partial autocorrelation plot
# https://www.statsmodels.org/stable/generated/statsmodels.graphics.tsaplots.plot_pacf.html

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
import numpy as np
import matplotlib.pyplot as plt

x = np.cumsum(np.random.randn(50))
plot_acf(x, lags=49)
plot_pacf(x, lags=25) # lags <= len(x)/2
plt.show()
