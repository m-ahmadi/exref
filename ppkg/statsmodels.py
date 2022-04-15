# pip install statsmodels

# durbin-watson test
import pandas as pd
from statsmodels.formula.api import ols
from statsmodels.stats.stattools import durbin_watson
df = pd.DataFrame({
	'rating':   [90, 85, 82, 88, 94, 90, 76, 75, 87, 86],
	'points':   [25, 20, 14, 16, 27, 20, 12, 15, 14, 19],
	'assists':  [5, 7, 7, 8, 5, 7, 6, 9, 9, 5],
	'rebounds': [11, 8, 10, 6, 6, 9, 6, 10, 10, 7]
})
model = ols('rating ~ points + assists + rebounds', data=df).fit()
print(durbin_watson(model.resid))

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

# jarque_bera
from statsmodels.stats.stattools import jarque_bera
res = jarque_bera([2,4,3,2,4])
print(res)