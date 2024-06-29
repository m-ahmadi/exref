# https://www.machinelearningplus.com/time-series/time-series-analysis-python
import matplotlib as mpl
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd

plt.rcParams.update({'figure.figsize': (10, 7), 'figure.dpi': 120})
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Download all the data files
# Time series data source: fpp pacakge in R.
# https://otexts.com/fpp3/
# https://www.amazon.com/Forecasting-principles-practice-Rob-Hyndman-ebook/dp/B07G6NRC3M

DO_DATA_DOWNLOAD = 0

urls = [
	'https://raw.githubusercontent.com/selva86/datasets/master/a10.csv',
	'https://raw.githubusercontent.com/selva86/datasets/master/MarketArrivals.csv',
	'https://raw.githubusercontent.com/selva86/datasets/master/AirPassengers.csv',
	'https://raw.githubusercontent.com/selva86/datasets/master/guinearice.csv',
	'https://raw.githubusercontent.com/selva86/datasets/master/sunspotarea.csv',
	'https://raw.githubusercontent.com/selva86/datasets/master/a10_missings.csv',
	'https://raw.githubusercontent.com/selva86/datasets/master/elecequip.csv',
]

if DO_DATA_DOWNLOAD:
	from os.path import basename
	for url in urls:
		pd.read_csv(url, dtype='string').to_csv(basename(url), index=False)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# How to import time series in python?

# Import as Dataframe
df = pd.read_csv('a10.csv', parse_dates=['date'])
print(df.head())

# Import it as series-like Dataframe
df = pd.read_csv('a10.csv', parse_dates=['date'], index_col='date')
print(df.head())

# Example of Panel Data
# dataset source: https://github.com/rouseguy
df = pd.read_csv('MarketArrivals.csv')
df = df.loc[df.market == 'MUMBAI', :]
print(df.head())
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Visualizing a Time Series
import matplotlib.pyplot as plt

df = pd.read_csv('a10.csv', parse_dates=['date'], index_col='date')

# Draw Plot
def plot_df(df, x, y, title='', xlabel='Date', ylabel='Value', dpi=100):
	plt.figure(figsize=(16, 5), dpi=dpi)
	plt.plot(x, y, color='tab:red')
	plt.gca().set(title=title, xlabel=xlabel, ylabel=ylabel)
	plt.show()

plot_df(df, x=df.index, y=df.value, title='Monthly anti-diabetic drug sales in Australia from 1992 to 2008.')

# Since all values are positive, you can show this on both sides of the Y axis to emphasize the growth.

# Import data
df = pd.read_csv('AirPassengers.csv', parse_dates=['date'])
x = df['date'].values
y1 = df['value'].values

# Plot
fig, ax = plt.subplots(1, 1, figsize=(16, 5), dpi=120)
plt.fill_between(x, y1=y1, y2=-y1, alpha=0.5, linewidth=2, color='seagreen')
plt.ylim(-800, 800)
plt.title('Air Passengers (Two Side View)', fontsize=16)
plt.hlines(y=0, xmin=np.min(df.date), xmax=np.max(df.date), linewidth=.5)
plt.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Seasonal Plot of a Time Series

# Import Data
df = pd.read_csv('a10.csv', parse_dates=['date'], index_col='date')
df.reset_index(inplace=True)

# Prepare data
df['year'] = [d.year for d in df.date]
df['month'] = [d.strftime('%b') for d in df.date]
years = df['year'].unique()

# Prep Colors
np.random.seed(100)
mycolors = np.random.choice(list(mpl.colors.XKCD_COLORS.keys()), len(years), replace=False)

# Draw Plot
plt.figure(figsize=(16, 12), dpi=80)
for i, y in enumerate(years):
	if i > 0:
		plt.plot('month', 'value', data=df.loc[df.year == y, :], color=mycolors[i], label=y)
		plt.text(df.loc[df.year == y, :].shape[0] - .9, df.loc[df.year == y, 'value'][-1:].values[0], y, fontsize=12, color=mycolors[i])

# Decoration
plt.gca().set(xlim=(-0.3, 11), ylim=(2, 30), ylabel='$Drug Sales$', xlabel='$Month$')
plt.yticks(fontsize=12, alpha=.7)
plt.title('Seasonal Plot of Drug Sales Time Series', fontsize=20)
plt.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Boxplot of Month-wise (Seasonal) and Year-wise (trend) Distribution

# Import Data
df = pd.read_csv('a10.csv', parse_dates=['date'], index_col='date')
df.reset_index(inplace=True)

# Prepare data
df['year'] = [d.year for d in df.date]
df['month'] = [d.strftime('%b') for d in df.date]
years = df['year'].unique()

# Draw Plot
fig, axes = plt.subplots(1, 2, figsize=(20, 7), dpi=80)
sns.boxplot(x='year', y='value', data=df, ax=axes[0])
sns.boxplot(x='month', y='value', data=df.loc[~df.year.isin([1991, 2008]), :])

# Set Title
axes[0].set_title('Year-wise Box Plot\n(The Trend)', fontsize=18)
axes[1].set_title('Month-wise Box Plot\n(The Seasonality)', fontsize=18)
plt.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Patterns in a Time Series
fig, axes = plt.subplots(1, 3, figsize=(20, 4), dpi=100)

pd.read_csv('guinearice.csv', parse_dates=['date'], index_col='date').plot(title='Trend Only', legend=False, ax=axes[0])

pd.read_csv('sunspotarea.csv', parse_dates=['date'], index_col='date').plot(title='Seasonality Only', legend=False, ax=axes[1])

pd.read_csv('AirPassengers.csv', parse_dates=['date'], index_col='date').plot(title='Trend and Seasonality', legend=False, ax=axes[2])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# How to decompose a time series into its components?
from statsmodels.tsa.seasonal import seasonal_decompose

# Import Data
df = pd.read_csv('a10.csv', parse_dates=['date'], index_col='date')

# Multiplicative Decomposition
result_mul = seasonal_decompose(df['value'], model='multiplicative', extrapolate_trend='freq')

# Additive Decomposition
result_add = seasonal_decompose(df['value'], model='additive', extrapolate_trend='freq')

# Plot
plt.rcParams.update({'figure.figsize': (10, 10)})
result_mul.plot().suptitle('Multiplicative Decompose', fontsize=22)
result_add.plot().suptitle('Additive Decompose', fontsize=22)
plt.show()

# Extract the components
# Actual Values = Product of (Seasonal * Trend * Resid)
df_reconstructed = pd.concat([result_mul.seasonal, result_mul.trend, result_mul.resid, result_mul.observed], axis=1)
df_reconstructed.columns = ['seas', 'trend', 'resid', 'actual_values']
df_reconstructed.head()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# How to test for stationarity?
from statsmodels.tsa.stattools import adfuller, kpss

df = pd.read_csv('a10.csv', parse_dates=['date'])

# ADF Test
result = adfuller(df.value.values, autolag='AIC')
print(f'ADF Statistic: {result[0]}')
print(f'p-value: {result[1]}')
for key, value in result[4].items():
	print('Critial Values:')
	print(f'   {key}, {value}')

print('\n')

# KPSS Test
result = kpss(df.value.values, regression='c')
print(f'KPSS Statistic: {result[0]}')
print(f'p-value: {result[1]}')
for key, value in result[3].items():
	print('Critial Values:')
	print(f'   {key}, {value}')
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# How to Detrend a Time Series?

# Using scipy: Subtract the line of best fit
from scipy import signal

df = pd.read_csv('a10.csv', parse_dates=['date'])
detrended = signal.detrend(df.value.values)
plt.plot(detrended)
plt.title('Drug Sales detrended by subtracting the least squares fit', fontsize=16)

# Using statmodels: Subtracting the Trend Component
from statsmodels.tsa.seasonal import seasonal_decompose

df = pd.read_csv('a10.csv', parse_dates=['date'], index_col='date')
result_mul = seasonal_decompose(df['value'], model='multiplicative', extrapolate_trend='freq')
detrended = df.value.values - result_mul.trend
plt.plot(detrended)
plt.title('Drug Sales detrended by subtracting the trend component', fontsize=16)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# How to deseasonalize a time series?

# Subtracting the Trend Component.
df = pd.read_csv('a10.csv', parse_dates=['date'], index_col='date')

# Time Series Decomposition
result_mul = seasonal_decompose(df['value'], model='multiplicative', extrapolate_trend='freq')

# Deseasonalize
deseasonalized = df.value.values / result_mul.seasonal

# Plot
plt.plot(deseasonalized)
plt.title('Drug Sales Deseasonalized', fontsize=16)
plt.plot()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Testing for Seasonality via ACF Plot
from pandas.plotting import autocorrelation_plot

df = pd.read_csv('a10.csv')

# Draw Plot
plt.rcParams.update({'figure.figsize': (9, 5), 'figure.dpi': 120})
autocorrelation_plot(df.value.tolist())
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# How to treat missing values in a time series?

# Generate dataset
from scipy.interpolate import interp1d
from sklearn.metrics import mean_squared_error

df_orig = pd.read_csv('a10.csv', parse_dates=['date'], index_col='date').head(100)
df = pd.read_csv('a10_missings.csv', parse_dates=['date'], index_col='date')

fig, axes = plt.subplots(7, 1, sharex=True, figsize=(10, 12))
plt.rcParams.update({'xtick.bottom': False})

#-------------------------------------------------
# 1. Actual
df_orig.plot(title='Actual', ax=axes[0], label='Actual', color='red', style='.-')
df.plot(title='Actual', ax=axes[0], label='Actual', color='green', style='.-')
axes[0].legend(['Missing Data', 'Available Data'])
#-------------------------------------------------
# 2. Forward Fill
df_ffill = df.ffill()
error = np.round(mean_squared_error(df_orig['value'], df_ffill['value']), 2)
df_ffill['value'].plot(title=f'Forward Fill (MSE: {str(error)})', ax=axes[1], label='Forward Fill', style='.-')
#-------------------------------------------------
# 3. Backward Fill
df_bfill = df.bfill()
error = np.round(mean_squared_error(df_orig['value'], df_bfill['value']), 2)
df_bfill['value'].plot(title=f'Backward Fill (MSE: {str(error)})', ax=axes[2], label='Back Fill', color='firebrick', style='.-')
#-------------------------------------------------
# 4. Linear Interpolation
df['rownum'] = np.arange(df.shape[0])
df_nona = df.dropna(subset=['value'])
f = interp1d(df_nona['rownum'], df_nona['value'])
df['linear_fill'] = f(df['rownum'])
error = np.round(mean_squared_error(df_orig['value'], df['linear_fill']), 2)
df['linear_fill'].plot(title=f'Linear Fill (MSE: {str(error)})', ax=axes[3], label='Cubic Fill', color='brown', style='.-')
#-------------------------------------------------
# 5. Cubic Interpolation
f2 = interp1d(df_nona['rownum'], df_nona['value'], kind='cubic')
df['cubic_fill'] = f2(df['rownum'])
error = np.round(mean_squared_error(df_orig['value'], df['cubic_fill']), 2)
df['cubic_fill'].plot(title=f'Cubic Fill (MSE: {str(error)})', ax=axes[4], label='Cubic Fill', color='red', style='.-')
# Interpolation References:
# https://docs.scipy.org/doc/scipy/reference/tutorial/interpolate.html
# https://docs.scipy.org/doc/scipy/reference/interpolate.html
#-------------------------------------------------
# 6. Mean of 'n' Nearest Past Neighbors
def knn_mean(ts, n):
	out = np.copy(ts)
	for i, val in enumerate(ts):
		if np.isnan(val):
			n_by_2 = np.ceil(n / 2)
			lower = np.max([0, int(i - n_by_2)])
			upper = np.min([len(ts) + 1, int(i + n_by_2)])
			ts_near = np.concatenate([ts[lower:i], ts[i:upper]])
			out[i] = np.nanmean(ts_near)
	return out
df['knn_mean'] = knn_mean(df.value.values, 8)
error = np.round(mean_squared_error(df_orig['value'], df['knn_mean']), 2)
df['knn_mean'].plot(title='KNN Mean (MSE: ' + str(error) + ')', ax=axes[5], label='KNN Mean', color='tomato', alpha=0.5, style='.-')
#-------------------------------------------------
# 7. Seasonal Mean
def seasonal_mean(ts, n, lr=0.7):
	'''
		Compute the mean of corresponding seasonal periods
		ts: 1D array-like of the time series
		n: Seasonal window length of the time series
	'''
	out = np.copy(ts)
	for i, val in enumerate(ts):
		if np.isnan(val):
			ts_seas = ts[i - 1::-n]  # previous seasons only
			if np.isnan(np.nanmean(ts_seas)):
				ts_seas = np.concatenate([ts[i - 1::-n], ts[i::n]])  # previous and forward
			out[i] = np.nanmean(ts_seas) * lr
	return out
df['seasonal_mean'] = seasonal_mean(df.value, n=12, lr=1.25)
error = np.round(mean_squared_error(df_orig['value'], df['seasonal_mean']), 2)
df['seasonal_mean'].plot(title='Seasonal Mean (MSE: ' + str(error) + ')', ax=axes[6], label='Seasonal Mean', color='blue', alpha=0.5, style='.-')
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# What is autocorrelation and partial autocorrelation functions?
from statsmodels.tsa.stattools import acf, pacf
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf

df = pd.read_csv('a10.csv')

# Calculate ACF and PACF upto 50 lags
# acf_50 = acf(df.value, nlags=50)
# pacf_50 = pacf(df.value, nlags=50)

# Draw Plot
fig, axes = plt.subplots(1, 2, figsize=(16, 3), dpi=100)
plot_acf(df.value.tolist(), lags=50, ax=axes[0])
plot_pacf(df.value.tolist(), lags=50, ax=axes[1])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Lag Plots
from pandas.plotting import lag_plot

plt.rcParams.update({'ytick.left': False, 'axes.titlepad': 10})

# Import
ss = pd.read_csv('sunspotarea.csv')
a10 = pd.read_csv('a10.csv')

# Plot
fig, axes = plt.subplots(1, 4, figsize=(10, 3), sharex=True, sharey=True, dpi=100)
for i, ax in enumerate(axes.flatten()[:4]):
	lag_plot(ss.value, lag=i + 1, ax=ax, c='firebrick')
	ax.set_title('Lag ' + str(i + 1))

fig.suptitle('Lag Plots of Sun Spots Area \n(Points get wide and scattered with increasing lag -> lesser correlation)\n', y=1.15)

fig, axes = plt.subplots(1, 4, figsize=(10, 3), sharex=True, sharey=True, dpi=100)
for i, ax in enumerate(axes.flatten()[:4]):
	lag_plot(a10.value, lag=i + 1, ax=ax, c='firebrick')
	ax.set_title('Lag ' + str(i + 1))

fig.suptitle('Lag Plots of Drug Sales', y=1.05)
plt.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# How to estimate the forecastability of a Time Series?

# https://en.wikipedia.org/wiki/Approximate_entropy
ss = pd.read_csv('sunspotarea.csv')
a10 = pd.read_csv('a10.csv')
rand_small = np.random.randint(0, 100, size=36)
rand_big = np.random.randint(0, 100, size=136)

def ApEn(U, m, r):
	'''Compute Aproximate entropy'''
	
	def _maxdist(x_i, x_j):
		return max([abs(ua - va) for ua, va in zip(x_i, x_j)])
	
	def _phi(m):
		x = [[U[j] for j in range(i, i + m - 1 + 1)] for i in range(N - m + 1)]
		C = [len([1 for x_j in x if _maxdist(x_i, x_j) <= r]) / (N - m + 1.0) for x_i in x]
		return (N - m + 1.0)**(-1) * sum(np.log(C))
	
	N = len(U)
	return abs(_phi(m + 1) - _phi(m))

print(ApEn(ss.value, m=2, r=0.2 * np.std(ss.value)))     # 0.651
print(ApEn(a10.value, m=2, r=0.2 * np.std(a10.value)))   # 0.537
print(ApEn(rand_small, m=2, r=0.2 * np.std(rand_small))) # 0.143
print(ApEn(rand_big, m=2, r=0.2 * np.std(rand_big)))     # 0.716

# Sample Entropy
def sampEn(U, m, r):
	'''Compute Sample entropy'''
	
	def _maxdist(x_i, x_j):
		return max([abs(ua - va) for ua, va in zip(x_i, x_j)])
	
	def _phi(m):
		x = [[U[j] for j in range(i, i + m - 1 + 1)] for i in range(N - m + 1)]
		C = [len([1 for j in range(len(x)) if i != j and _maxdist(x[i], x[j]) <= r]) for i in range(len(x))]
		return sum(C)
	
	N = len(U)
	return -np.log(_phi(m + 1) / _phi(m))

print(sampEn(ss.value, m=2, r=0.2 * np.std(ss.value)))     # 0.78
print(sampEn(a10.value, m=2, r=0.2 * np.std(a10.value)))   # 0.41
print(sampEn(rand_small, m=2, r=0.2 * np.std(rand_small))) # 1.79
print(sampEn(rand_big, m=2, r=0.2 * np.std(rand_big)))     # 2.42
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# How to Smoothen a Time Series?
from statsmodels.nonparametric.smoothers_lowess import lowess

plt.rcParams.update({'xtick.bottom': False, 'axes.titlepad': 5})

# Import
df_orig = pd.read_csv('elecequip.csv', parse_dates=['date'], index_col='date')

# 1. Moving Average
df_ma = df_orig.value.rolling(3, center=True, closed='both').mean()

# 2. Loess Smoothing (5% and 15%)
df_loess_5 = pd.DataFrame(lowess(df_orig.value, np.arange(len(df_orig.value)), frac=0.05)[:, 1], index=df_orig.index, columns=['value'])
df_loess_15 = pd.DataFrame(lowess(df_orig.value, np.arange(len(df_orig.value)), frac=0.15)[:, 1], index=df_orig.index, columns=['value'])

# Plot
fig, axes = plt.subplots(4, 1, figsize=(7, 7), sharex=True, dpi=120)
df_orig['value'].plot(ax=axes[0], color='k', title='Original Series')
df_loess_5['value'].plot(ax=axes[1], title='Loess Smoothed 5%')
df_loess_15['value'].plot(ax=axes[2], title='Loess Smoothed 15%')
df_ma.plot(ax=axes[3], title='Moving Average (3)')
fig.suptitle('How to Smoothen a Time Series', y=0.95, fontsize=14)
plt.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# How to use Granger Causality test to know if one time series is helpful in forecasting another?
# Apply this after making the time series stationary.
from statsmodels.tsa.stattools import grangercausalitytests

df = pd.read_csv('a10.csv', parse_dates=['date'])
df['month'] = df.date.dt.month

# create lag of y
df[['value_lag1']] = df[['value']].diff()

grangercausalitytests(df[['value_lag1', 'month']].dropna(), maxlag=2)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
