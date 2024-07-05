from statsmodels.tsa.stattools import adfuller

res = adfuller(x=[], maxlag=None|0, regression='c|ct|ctt|n', autolag='AIC|BIC|t-stat'|None, store=False, regresults=False)
adf, pvalue, usedlag, nobs, critical_values, icbest, resstore = res
# augmented dickey-fuller test
# https://www.statsmodels.org/dev/generated/statsmodels.tsa.stattools.adfuller.html

# H₀ = unit root exists         (non-stationary series)
# H₁ = unit root does not exist (stationary series)

adf             # "adf statistic"  (the more negative, the stronger rejection of H₀)
pvalue          # "p-value"        (the lower,         the stronger rejection of H₀)
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

''' note about a confusion
in the following page,
https://stats.stackexchange.com/questions/317133/how-to-interpret-kpss-test
it says that when determining the test result, one should see if absolute value
of "adf stat" is less than the absolute value of a "critical value". the
explanation is that because the test data had a distribution with a zero mean,
the "adf stat" could fall at significant distance from "critical values" at both
directions (positive and negative), therefore one must use absolute values for
comparison. this means that `critical_values['5%']` could be for example -2.68
and `adf` be 2.67, which previously meant we reject H₀, now means we accept H₀.

one reference was the following page,
https://online.stat.psu.edu/statprogram/reviews/statistical-concepts/hypothesis-testing/critical-value-approach
it is stated in the page that "reject H₀ if test statistic is more extreme in
the direction of the alternative than the critical value". I don't think what is
in the page is wrong, but it speaks about the concept generally. I think the
author of answer is wrong, and you don't need the absolute values, at least not
in the `adfuller` and `kpss` tests.
'''

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples
import numpy as np
from statsmodels.tsa.stattools import adfuller
import matplotlib.pyplot as plt

def main():
	# basic                            adf                   pvalue                so?
	adfuller([1,2,1,2,1,2,1])        # -2848326498395271.5,  0.0                   stationary
	adfuller([1,50,10,70,60,90,150]) # 1.5556828641718772,   0.9977183379488197    non-stationary
	
	# more in-depth
	x = np.random.randn(250).cumsum()
	perform_test(x)
	perform_test(np.diff(x))
	perform_test(np.diff(x, 2))
	
	# even deeper
	linear_function = np.arange(100)
	white_noise = np.random.rand(100)
	random_walk = np.cumsum(white_noise - 0.5)
	
	perform_test(linear_function)
	perform_test(white_noise)
	perform_test(random_walk)

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
		significance_level_num = int(significance_level[:-1])
		with_confidence_of = str(100 - significance_level_num) + '%'
		is_stationary = '✅' if adf < critical_value else '❌'
	# is_stationary = '✅' if (abs(adf) < abs(critical_value)) else '❌' # wrong
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
	levels = sorted([float(k[:-1]) for k in critical_values], key=int)
	for level in levels:
		pct = level / 100
		with_confidence_of = str(100 - level) + '%'
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