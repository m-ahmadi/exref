import numpy as np
from scipy import stats # pip install numpy scipy    (depends on numpy)

# trim mean
stats.trim_mean([1,2,3,4,5,6,7,8,9], .1) # 5

# linear regression
x = np.array([1,2,3,4])
y = [2,3,2,1]
res = stats.linregress(x, y)
list(res.intercept + res.slope * x) # [2.6, 2.2, 1.79, 1.4]

# pearson corrolation
r, _ = stats.pearsonr([1,2,3,4], [2,3,2,1])
print(r)

# jarque-bera & shapiro-wilk
x = [2,4,3,2,4]
res = stats.jarque_bera(x)
print(res.statistic, res.pvalue)
res = stats.shapiro(x)
print(res.statistic, res.pvalue)