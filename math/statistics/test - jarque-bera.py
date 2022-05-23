from scipy.stats import jarque_bera
x = [2,4,3,2,4]
res = jarque_bera(x)
print(res.statistic, res.pvalue)

# or

from statsmodels.stats.stattools import jarque_bera
x = [2,4,3,2,4]
res = jarque_bera(x)
print(res)