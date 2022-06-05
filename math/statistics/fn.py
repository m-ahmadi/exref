import numpy as np
from scipy import stats

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
	ba, dc = b-a, d-c
	return [(x-a) * dc / ba + c for x in nums]

def mean(nums=[], trim=0, sample=False):
	N = len(nums)
	if trim:
		nums = sorted(nums[:])[+trim:-trim]
		return sum(nums) / (N - (1 if sample else 0)) if N else 0

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
