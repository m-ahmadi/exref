import numpy as np
import pandas as pd

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
