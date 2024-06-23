import scipy as sp
import numpy as np
from math import floor

# trim mean
sp.stats.trim_mean([1,2,3,4,5,6,7,8,9], .1) # 5

# linear regression
x = [0,1,2,3,4]
y = [4,4,6,9,5]
res = sp.stats.linregress(x, y)
y_hat = list(res.intercept + res.slope * np.array(x)) # [4.2, 4.9, 5.6, 6.3, 7]

# pearson corrolation
res = sp.stats.pearsonr([1,2,3,4], [2,3,2,1])
res[0]        # -0.6324555320336758
res.statistic # ...

res = np.corrcoef([1,2,3,4],[2,3,2,1])
res[0][1]     # -0.6324555320336759

# cross-correlation
x = [1,2,3,4]
y = [2,3,2,1]
sp.signal.correlate(x, y)       # [1,4,10,18,21,18,8]
np.correlate(x, y, mode='full') # ...
cross_correlation(x, y)         # ...
sm.tsa.stattools.ccf(x, y)      # [-0.63, 0.21, 0.95, -0.]  (statistical sense rather than signal processing)

def cross_correlation(x, y):#needs refactor, but ok for now
	n = len(x)
	m = len(y)
	res_len = n + m - 1
	res = [0] * res_len
	lags = range(-m+1, n)
	for lag in lags:
		sum_product = 0
		for i in range(n):
			j = i + lag
			if j < 0 or j >= m:
				continue
			sum_product += x[i] * y[j]
		res[lag+m-1] = sum_product
	res.reverse()
	return res

# autocorrelation and partial autocorrelation
from statsmodels.tsa.stattools import acf, pacf
x = [12,5,1,3,79,45,1,36,5,42]
r1 = acf(x, nlags=1)  # [1.0, -0.031956926307083]
r2 = pacf(x, nlags=1) # [1.0, -0.03550769589675884]


def minmax(nums=[]):
	n, x = float('inf'), float('-inf')
	for i in nums:
		n, x = min(n, i), max(x, i)
	return [n, x]

def scale(nums=[], newbound=[0,1]):
	a, b = minmax(nums)
	if a == b:
		for i in range(17, 0, -1):
			j = float('1e-'+str(i))
			if b+j > a:
				b += j
				break
		if a == b:
			raise Exception('Equal bounds error!')
	c, d = newbound
	dx, dy = b-a, d-c
	return [(x-a) * dy / dx + c for x in nums]

def mean(nums=[], trim=0, sample=False):
	N = len(nums)
	if trim and trim > 0:
		if trim < 1:
			trim = floor(N * trim)
		nums = sorted(nums[:])[+trim:-trim]
		N = len(nums)
	return sum(nums) / (N - (1 if sample else 0)) if N else 0

def cusum(x=[], h=0):
	res = []
	pos, neg = 0, 0
	for i, v in enumerate(x):
		pos = max(0, pos + v)
		neg = min(0, neg + v)
		if neg < -h:
			neg = 0
			res.append(i)
		elif pos > h:
			pos = 0
			res.append(i)
	return res

def slope(x=[], y=[]):
	m = []
	N = len(x)
	for i0, i1 in zip(range(N), range(1, N)):
		dx = x[i1] - x[i0]
		dy = y[i1] - y[i0]
		m.append(dy / dx)
	return m

def slope_np(x=[], y=[]):
	dx = np.diff(x)
	dy = np.diff(y)
	m = dy / dx
	return m

def sma(nums=[], period=2, fill=None):
	pi = period - 1 if period > 0 else 0
	res = [fill] * pi
	
	if period > 0:
		for i in range(pi, len(nums)):
			res.append( mean(nums[i-pi:i+1]) )
	else:
		res = [ mean(nums[0:i+1]) for i,v in enumerate(nums) ]
	
	return res

def ema(nums=[], period=2, fill=None):
	res = [fill] * (period-1)
	
	res.append( mean(nums[0:period]) )
	
	m = 2 / (period+1)
	
	for i in range(period, len(nums)):
		n = (nums[i] * m) + (res[i-1] * (1-m))
		res.append(n)
	
	return res

def ema_formal(nums=[], alpha=1):
	if alpha < 0 or alpha > 1:
		return
	
	S = []
	
	S.append( nums[0] )
	
	for j, num in enumerate(nums[1:]):
		s = alpha * num + (1-alpha) * S[j]
		S.append(s)
	
	return S

def ewm(data, span=2, adjust=True):
	meancalc = []
	varcalc = []
	stdcalc = []

	a = 2 / (span + 1)

	for j in range(0, len(data)):
		# get window
		z = np.array(data.iloc[0:j+1].tolist())

		# get weights
		n = len(z)
		if adjust:
			w = (1-a) ** np.arange(n-1, -1, -1)
		else:
			w = [ a*(1-a)**i if i<j else (1-a)**i for i in range(n-1, -1, -1) ]
			w = np.array(w)
		
		w_sum = np.sum(w)
		w_sumsqr = w_sum ** 2
		
		# calc exponential weighted mean
		ewma = np.sum(w*z) / w_sum
		
		# calc bias
		bias = w_sumsqr / ( w_sumsqr - np.sum(w**2) )
		
		# calc exponential weighted variance
		ewmvar = bias * np.sum( (w * (z-ewma) ** 2) / w_sum )
		
		# calc exponential weighted standard deviation
		ewmstd = np.sqrt(ewmvar)
		
		meancalc.append(ewma)
		varcalc.append(ewmvar)
		stdcalc.append(ewmstd)

	return [meancalc, varcalc, stdcalc]
'''
s = pd.Series([1,2,3,4,5,6,7,8])

s.ewm(span=5, adjust=True).mean().tolist()  == ewm(s, 5, True)[0]
s.ewm(span=5, adjust=False).mean().tolist() == ewm(s, 5, False)[0]

s.ewm(span=5, adjust=True).var().tolist()   == ewm(s, 5, True)[1]
s.ewm(span=5, adjust=False).var().tolist()  == ewm(s, 5, False)[1]

s.ewm(span=5, adjust=True).std().tolist()   == ewm(s, 5, True)[2]
s.ewm(span=5, adjust=False).std().tolist()  == ewm(s, 5, False)[2]
'''
