import numpy as np
import matplotlib.pyplot as plt

def distr_check(series=[], labels=[]):
	_, axs = plt.subplots(len(series))
	for serie, label, ax in zip(series, labels, axs):
		ax.hist(serie, label=label)
		ax.legend(loc='upper right')
	plt.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# log transformation
# changes distribution shape
# may get distribution closer to a "standard normal distribution"

show('lognormal')   #     right-tailed orig distr (log did     help distr to become normal)
show('exponential') # not right-tailed orig distr (log did not help ...)

def show(genrand_method):
	x = np.random.__dict__[genrand_method](size=250)
	z = (x - x.mean()) / x.std()
	g = np.log(x)
	distr_check([x,z,g], ['orig distr', 'z-scored', 'log-transformed'])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# minmax scaling
# scales data to a fixed range like 0 to 1, or -1 to 1
# does not care about distribution
# may change distribution shape (especially if exist significant outliers)

x = np.random.normal(size=250)
x_max, x_min = x.max(), x.min()
x_norm = (x - x_max) / (x_max - x_min)
distr_check([x, x_norm], ['orig distr', 'after minmax-scaled'])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# z-score (aka standardization)
# transforms values to have 0 mean and 1 std
# does not change distribution shape

x = np.random.uniform(size=250)
z = (x - x.mean()) / np.std(x)
distr_check([x, z], ['orig distr (not normal)', 'after z-scored'])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# decimal scaling
# v(i) = x(i) / 10^j, where j=|max(x)|
# divides value by a power of 10

def decimal_scale(x=[]):
	absmax = abs(max(x))
	j = len(str(absmax)) # n of digits
	denom = 10 ** j
	norm = [i / denom for i in x]
	return norm

x = [-10, 201, 301, -401, 501, 601, 701]
x_norm = decimal_scale(x)
hist([x, x_norm], ['orig distr', 'after decimal-scaled'])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# root transformation

x = np.random.normal(size=250)
x_norm = np.sqrt(x)
distr_check([x, x_norm], ['orig distr', 'after root-transformed'])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@