import fracdiff as fd
import numpy as np

fd.fdiff(a=[], n=1.0, axis=-1, prepend=None|[], append=None|[], window=10, mode='same|valid')
# https://fracdiff.github.io/fracdiff/generated/fracdiff.fdiff.html

fd.sklearn.FracDiff(d=1.0, window=10|None|int>0, window_policy='fixed', *args, **kwargs)
# https://github.com/fracdiff/fracdiff/blob/main/fracdiff/sklearn/fracdiff.py#L16

fd.sklearn.FracDiffStat(mode='same', window=None|int>0, window_policy='fixed',
	stattest='ADF', pvalue=0.05, precision=0.1, upper=1.0, lower=0.0, n_jobs=None|int, *args, **kwargs)
# https://github.com/fracdiff/fracdiff/blob/main/fracdiff/sklearn/fracdiffstat.py#L20

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# basic
a = np.array([1,2,4,7,0])
fd.fdiff(a, 0.5) # [1., 1.5, 2.875, 4.6875, -4.1640625]

# like numpy
np.array_equal(fd.fdiff(a,n=1), np.diff(a,n=1)) # True

# 2d array
a = np.array([[1,3,6,10], [0,5,6,8]])
fd.fdiff(a, 0.5, axis=0)  # [ [ 1.,3.,6.,10.], [-0.5,3.5,3.,3.] ]
fd.fdiff(a, 0.5, axis=-1) # [ [1.,2.5,4.375,6.5625], [0.,5.,3.5,4.375] ]


# scikit-learn api

# basic 1
x = ...  # 2d time-series with shape (n_samples, n_features)
f = fd.sklearn.Fracdiff(0.5)
x = f.fit_transform(x)

# basic 2
np.random.seed(42)
x = np.random.randn(50, 100)
fracdiff = fd.sklearn.Fracdiff(d=d, window=window, mode=mode)
out = fdiff(x, n=d, axis=0, window=window, mode=mode)
assert_array_equal(fracdiff.fit_transform(x), out)

# FracdiffStat
np.random.seed(42)
x = np.random.randn(100, 2).cumsum(0)
fs = fd.sklearn.FracdiffStat(mode='same', window=10, precision=0.01)
fs.fit(x)

# pipeline
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
x, y = ... # dataset
pipeline = Pipeline([
	('scaler', StandardScaler()),
	('fracdiff', fd.sklearn.Fracdiff(0.5)),
	('regressor', LinearRegression()),
])
pipeline.fit(x, y)


# pytorch api (no such thing exists in the pkg, it's only in the readme)
from fracdiff.torch import fdiff # No module named 'torch'
