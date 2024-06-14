import pandas as pd

pd.Series.plot(data=[]|DataFrame, x=None, y=None, kind='line|bar|...', ax=None, subplots=False, sharex=True, ...)
# https://pandas.pydata.org/docs/reference/api/pandas.Series.plot.html

pd.DataFrame.plot(data=[]|DataFrame, x=None, y=None, kind='line|bar|...', ax=None, subplots=False, sharex=True, ...)
# https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.html

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
pd.plotting.lag_plot(series=[], lag=1, ax=None, **kwds)
# https://pandas.pydata.org/docs/reference/api/pandas.plotting.lag_plot.html
# used to look for patterns in time-series
# plots x[i] with x[i-1] as a scatter plot (dependent & independent variables study)

# example
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

def plots(a):
	s = pd.Series(a)
	fig, (ax1, ax2) = plt.subplots(2)
	fig.suptitle('Does data has a correlation with its previous self?')
	s.plot(ax=ax1)
	pd.plotting.lag_plot(s, lag=1, ax=ax2)
	plt.show()

np.random.seed(5)
x = np.cumsum(np.random.normal(loc=1, scale=5, size=50))
plots(x) # correlated

x = np.cumsum(np.random.randn(50))
plots(x) # correlated

x = [1,  2,  3,   4,   5,  6]
plots(x) # correlated

x = [1, 78, 23, 256, 410, 6]
plots(x) # uncorrelated
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
pd.plotting.autocorrelation_plot(series=[], ax=None, **kwargs)
# https://pandas.pydata.org/docs/reference/api/pandas.plotting.autocorrelation_plot.html

# example
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

def plots(a):
	s = pd.Series(a)
	_, (ax1, ax2) = plt.subplots(2)
	ax1.plot(s)
	pd.plotting.autocorrelation_plot(s, ax=ax2)
	plt.show()

x = np.cumsum(np.random.randn(50))
plots(x)

x = np.cumsum(np.random.randn(50))
plots(x)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@