import matplotlib.pyplot as plt
from scipy import stats
import statsmodels.api as sm
import pandas as pd

# histogram
x = pd.Series([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 6, 4, 2])
x.hist()
plt.show()

# boxplot
x = pd.Series([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 6, 4, 2])
x.plot(kind='box')
plt.show()

# qqplot
x = stats.norm.rvs(size=1000)
sm.qqplot(x, line='45')
plt.show()

fig, ax = plt.subplots(figsize=(4, 4))
x = stats.norm.rvs(size=100)
stats.probplot(x, plot=ax)
plt.show()