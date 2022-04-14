import numpy as np
import pandas as pd

def mean(nums=[], trim=0, sample=False):
	if trim:
		nums = sorted(nums[:])[+trim:-trim]
	return sum(nums) / (len(nums) - (1 if sample else 0))


def sma(nums=[], period=2, fill=None):
	pi = period - 1 if period > 0 else 0
	res = [fill] * pi
	
	if period > 0:
		for i in range(pi, len(nums)):
			res.append( mean(nums[i-pi:i+1]) )
	else:
		res = [ mean(nums[0:i+1]) for i,v in enumerate(nums) ]
	
	return res


def ema(nums=[], period=5, fill=None):
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


def ems(data):
	meancalc = []
	varcalc = []
	stdcalc = []

	a = 2 / (5 + 1)

	for i in range(0, len(data)):
		# get window
		z = np.array(data.iloc[0:i+1].tolist())

		# get weights
		n = len(z)
		w = (1-a) ** np.arange(n-1, -1, -1)
		
		# calc exponential weighted mean
		ewma = np.sum(w*z) / np.sum(w)
		
		# calc bias
		w_sumsqr = np.sum(w) ** 2
		bias = w_sumsqr / ( w_sumsqr - np.sum(w**2) )
		
		# calc exponential weighted variance
		ewmvar = bias * np.sum( (w * (z-ewma) ** 2) / np.sum(w) )
		
		# calc exponential weighted standard deviation
		ewmstd = np.sqrt(ewmvar)
		
		meancalc.append(ewma)
		varcalc.append(ewmvar)
		stdcalc.append(ewmstd)

	return [meancalc, varcalc, stdcalc]

df = pd.read_csv('file.csv')
close = df.close

x = ems(close)

'''
_1 = x[0]
_2 = pd.Series(close).ewm(span=5).mean().tolist()

_1 = x[2]
_2 = pd.Series(close).ewm(span=5).std().tolist()
'''
