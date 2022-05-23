from scipy.stats import norm
from statsmodels.stats.diagnostic import lilliefors
my_data = norm.rvs(size=500)
lilliefors(my_data)