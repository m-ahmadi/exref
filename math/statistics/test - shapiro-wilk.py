import numpy as np
from scipy.stats import shapiro
x = [2,4,3,2,4]
res = shapiro(x)
print(res.statistic, res.pvalue)
