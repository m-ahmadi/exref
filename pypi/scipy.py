import numpy as np
from scipy.stats import linregress
x = np.array([1,2,3,4])
y = [2,3,2,1]
res = linregress(x, y)
list(res.intercept + res.slope * x) # [2.6, 2.2, 1.79, 1.4]

# jarque-bera & shapiro-wilk
from scipy.stats import jarque_bera, shapiro
x = [2,4,3,2,4]
res = jarque_bera(x)
print(res.statistic, res.pvalue)
res = shapiro(x)
print(res.statistic, res.pvalue)