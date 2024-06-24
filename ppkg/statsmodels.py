# pip install statsmodels

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# residuals
import numpy as np
import pandas as pd
from scipy.stats import linregress
from statsmodels.formula.api import ols
x = np.array([1,2,3,4])
y = [2,3,2,1]
res = linregress(x, y)
rline = list(res.intercept + res.slope * x)
df = pd.DataFrame({'x': x, 'y': y})
model = ols('y ~ x', data=df).fit()
print(list(model.resid)) # [-0.6, 0.79, 0.19, -0.4]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# augmented dickey-fuller test
from statsmodels.tsa.stattools import adfuller
res = adfuller(x=[], maxlag=None|0, regression='c|ct|ctt|n', autolag='AIC|BIC|t-stat'|None, store=False, regresults=False)
# https://www.statsmodels.org/dev/generated/statsmodels.tsa.stattools.adfuller.html
adf, pvalue, usedlag, nobs, critical_values, icbest, resstore = res
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# autocorrelation and partial autocorrelation plot
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf

plot_acf(x=[], ax=None, lags=None|0|[], *, alpha=0.05, use_vlines=True, adjusted=False, fft=False, missing='none', title='Autocorrelation', zero=True, auto_ylims=False, bartlett_confint=True, vlines_kwargs=None, **kwargs)
# https://www.statsmodels.org/stable/generated/statsmodels.graphics.tsaplots.plot_acf.html

plot_pacf(x=[], ax=None, lags=None|0|[], alpha=0.05, method='ywm', use_vlines=True, title='Partial Autocorrelation', zero=True, vlines_kwargs=None, **kwargs)
# https://www.statsmodels.org/stable/generated/statsmodels.graphics.tsaplots.plot_pacf.html

# example
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
import numpy as np
import matplotlib.pyplot as plt
x = np.cumsum(np.random.randn(50))
plot_acf(x, lags=49)
plot_pacf(x, lags=25) # lags <= len(x)/2
plt.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@