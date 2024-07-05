from statsmodels.tsa.seasonal import seasonal_decompose

seasonal_decompose(x=[], model='additive|multiplicative', filt=None|[], period=None|0, two_sided=True, extrapolate_trend=0|'freq') -> DecomposeResult
# decompose time-series into components (trend, seasonality, error)
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

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples
import numpy as np
import datetime as dt
import pandas as pd
from statsmodels.tsa.seasonal import seasonal_decompose
import matplotlib.pyplot as plt

n = 250
time_series = np.abs(np.random.randn(n).cumsum())

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

# with `x` as array, `period` must be set
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
