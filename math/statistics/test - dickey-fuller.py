from statsmodels.tsa.stattools import adfuller

res = adfuller(x=[], maxlag=None|0, regression='c|ct|ctt|n', autolag='AIC|BIC|t-stat'|None, store=False, regresults=False)
adf, pvalue, usedlag, nobs, critical_values, icbest, resstore = res
# https://www.statsmodels.org/dev/generated/statsmodels.tsa.stattools.adfuller.html

# H₀ = unit root exists         (non-stationary series)
# H₁ = unit root does not exist (stationary series)

adf             # "adf statistic"  (the more negative, the stronger rejection of H₀)
pvalue          # "pvalue"         (the lower,         the stronger rejection of H₀)
critical_values # critical values for "adf statistic" at 1%, 5%, 10% levels

'''
to reject H₀ with certain level of confidence, "adf statistic" must be less than "critical value" at the corresponding confidence interval
for example, to reject H₀ with n % confidence, `adf` must be less than `critical_values[str(100-n) + '%']`
items of `critical_values` are called "confidence intervals" or "significance levels"

(in this context, confidence means low probability of result being a statistical fluke)
'''

adf < critical_values['1%']  # can reject H₀ with 99% confidence
adf < critical_values['5%']  # can reject H₀ with 95% confidence
adf < critical_values['10%'] # can reject H₀ with 90% confidence

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# example
import numpy as np
from statsmodels.tsa.stattools import adfuller
import matplotlib.pyplot as plt

def main():
	# basic                            adf                   pvalue                so?
	adfuller([1,2,1,2,1,2,1])        # -2848326498395271.5,  0.0                   stationary
	adfuller([1,50,10,70,60,90,150]) # 1.5556828641718772,   0.9977183379488197    non-stationary
	
	# more in-depth
	x = np.cumsum(np.random.randn(250))
	perform_test(x)
	perform_test(np.diff(x))
	perform_test(np.diff(x, 2))
	perform_test(np.diff(x, 5))
	perform_test(np.diff(x, 10))
	perform_test(np.diff(x, 20))

def perform_test(x):
	res = adfuller(x)
	interpret(res)
	plt.plot(x)
	plt.show()

def interpret(adf_res):
	adf, pvalue, _, _, critical_values, *_ = adf_res
	secline = '@' * 50
	subsecline = '-' * 50
	
	print(secline)
	print('The result itself:', '\n')
	
	print(f'ADF Statistic:  {adf}')
	print(f'P-Value:        {pvalue}')
	print('Critial Values:')
	print(f"    1%:         { critical_values['1%'] }")
	print(f"    5%:         { critical_values['5%'] }")
	print(f"    10:         { critical_values['10%'] }")
	print(subsecline)
	
	print('The interpretation', '\n')
	
	print('The ADF Statistic Way:')
	reports = []
	for significance_level, critical_value in critical_values.items():
		significance_level_num = int(significance_level[0:-1])
		with_confidence_of = str(100 - significance_level_num) + '%'
		is_stationary = '✅' if adf < critical_value else '❌' if adf > critical_value else '❓'
		distance_from_succ = round(adf - critical_value, 2)
		report = [with_confidence_of, is_stationary, distance_from_succ]
		reports.append([str(i) for i in report])
	
	cols = ['With Confidence of', 'Is Stationary?', 'Success Dial (-∞ = ✅✅, 0 = ✅, ∞ = ❌❌)']
	print('      '.join(cols))
	for report in reports:
		print('\t\t\t'.join(report))
	
	print('')
	
	print('The P-Value Way:')
	reports = []
	for p in [1, 5, 10]:
		pct = p / 100
		with_confidence_of = str(100 - p) + '%'
		is_stationary = '✅' if pvalue < pct else '❌'
		distance_from_succ = round(pvalue - pct, 2)
		report = [with_confidence_of, is_stationary, distance_from_succ]
		reports.append([str(i) for i in report])
	cols = ['With Confidence of', 'Is Stationary?', 'Distance from Success (more negative = more succ)']
	print('      '.join(cols))
	for report in reports:
		print('\t\t\t'.join(report))
	
	print(secline)

main()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@