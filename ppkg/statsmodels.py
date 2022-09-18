# pip install statsmodels

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

# augmented dickey-fuller test
from statsmodels.tsa.stattools import adfuller
res = adfuller(x=[], maxlag=None|0, regression='c|ct|ctt|n', autolag='AIC|BIC|t-stat'|None, store=False, regresults=False)
adf, pvalue, usedlag, nobs, critical_values, icbest, resstore = res
