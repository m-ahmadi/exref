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
# decompose time-series into components (trend, seasonality, error)
from statsmodels.tsa.seasonal import seasonal_decompose

seasonal_decompose(x=[], model='additive|multiplicative', filt=None|[], period=None|0, two_sided=True, extrapolate_trend=0|'freq') -> DecomposeResult
# https://www.statsmodels.org/stable/generated/statsmodels.tsa.seasonal.seasonal_decompose.html

DecomposeResult(observed, seasonal, trend, resid, weights=None)
	.nobs
	.observed
	.resid
	.seasonal
	.trend
	.weights
	.plot(observed=True, seasonal=True, trend=True, resid=True, weights=False) -> matplotlib.figure.Figure
# https://www.statsmodels.org/stable/generated/statsmodels.tsa.seasonal.DecomposeResult.html

# example
import numpy as np
import datetime as dt
import pandas as pd
from statsmodels.tsa.seasonal import seasonal_decompose
import matplotlib.pyplot as plt

n = 250
time_series = np.abs(np.cumsum(np.random.randn(n)))

# with x df
idxs = pd.DatetimeIndex([dt.datetime(2023,1,1) + dt.timedelta(days=i) for i in range(n)])
x_df = pd.DataFrame(time_series, index=idxs, columns=['value'])

# multiplicative decomposition
res = seasonal_decompose(x_df, model='multiplicative', extrapolate_trend='freq')
x_reconstructed = res.seasonal * res.trend * res.resid
(x_df - x_reconstructed).sum().value  # ≈ 0
x_df.equals(x_reconstructed.round(8)) # True
res.plot()
plt.show()

# additive decomposition
res = seasonal_decompose(x_df, model='additive', extrapolate_trend='freq')
x_reconstructed = (res.seasonal + res.trend + res.resid).to_frame()
x_reconstructed.columns = [*x_df.columns]
(x_df - x_reconstructed).sum().value  # ≈ 0
x_df.equals(x_reconstructed.round(8)) # True
res.plot()
plt.show()

# with x array
x_arr = time_series
res = seasonal_decompose(x_arr, model='multiplicative', extrapolate_trend='freq', period=25)
x_reconstructed = res.seasonal * res.trend * res.resid
sum(x_arr - x_reconstructed)                       # ≈ 0
np.all(x_arr.round(8) == x_reconstructed.round(8)) # True
res.plot()
plt.show()

# detrending and deseasonalizing
res = seasonal_decompose(x_df, model='multiplicative', extrapolate_trend='freq')
detrended = x_df.value - res.trend
deseasonalized = x_df.value / res.seasonal
_, axs = plt.subplots(3, figsize=(10,8))
for (ax, (series,title)) in zip(axs, zip([x_df, detrended, deseasonalized], ['original','detrended','deseasonalized'])):
	ax.plot(series)
	ax.set_title('time series ' + title, y=0.86)
plt.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@