from statsmodels.tsa.stattools import kpss

res = kpss(x=[], regression='c|ct', nlags='auto'|0, store=False)
kpss_stat, p_value, lags, crit, resstore = res
# https://www.statsmodels.org/dev/generated/statsmodels.tsa.stattools.kpss.html

# H₀ = series is trend-stationary
# H₁ = unit root exist (non-stationary series)
# (success is to not reject H₀, unlike `adfuller`)

kpss_stat # "kpss statistic"  (the higher, the stronger rejection of H₀)
p_value   # "p-value"         (the lower,  the stronger rejection of H₀)
crit      # critical values for "kpss statistic" at 1%, 2.5%, 5%, 10% levels

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# example
import numpy as np
from statsmodels.tsa.stattools import kpss
import matplotlib.pyplot as plt


def main():
	x = np.cumsum(np.random.randn(250))
	perform_test(x)
	perform_test(np.diff(x))

def perform_test(x):
	res = kpss(x)
	interpret(res)
	plt.plot(x)
	plt.show()

def interpret(adf_res):
	kpss_stat, p_value, _, crit, *_ = adf_res
	secline = '@' * 50
	subsecline = '-' * 50
	
	print(secline)
	print('The result itself:', '\n')
	print(f'KPSS Statistic:  {kpss_stat}')
	print(f'P-Value:         {p_value}')
	print('Critial Values:')
	print(f"    1%:          { crit['1%'] }")
	print(f"    2.5%:        { crit['2.5%'] }")
	print(f"    5%:          { crit['5%'] }")
	print(f"    10%:         { crit['10%'] }")
	print(subsecline)
	
	
	print('The interpretation', '\n')
	print('The KPSS Statistic Way (original logic):')
	reports = []
	for significance_level, critical_value in reversed(crit.items()):
		significance_level_num = float(significance_level[:-1])
		with_confidence_of = str(100 - significance_level_num) + '%'
		h0_rejected = kpss_stat > critical_value
		isnt_trend_stationary = '✅' if h0_rejected else '❌'
		rejection_strength_excess = round(kpss_stat - critical_value, 2)
		report = [with_confidence_of, isnt_trend_stationary, rejection_strength_excess]
		reports.append([str(i) for i in report])
	cols = ['With Confidence of', 'Is Not Trend-Stationary?', 'Extra Rejection Strength (-n = couldn\'t reject, 0 = no excess, +n = excess)']
	print('        '.join(cols))
	for report in reports:
		print('\t\t\t\t'.join(report))
	print('')
	
	
	print('The KPSS Statistic Way (reverse of original logic):')
	reports = []
	for level, critical_value in reversed(crit.items()):
		with_error_tolerance_of = level
		h0_rejected = kpss_stat > critical_value
		is_trend_stationary = '✅' if not h0_rejected else '❌'
		acception_strength_excess = round(critical_value - kpss_stat, 2)
		report = [with_error_tolerance_of, is_trend_stationary, acception_strength_excess]
		reports.append([str(i) for i in report])
	cols = ['With Error Tolerance of', 'Is Trend-Stationary?', 'Extra Acception Strength (-n = couldn\'t accept, 0 = no excess, +n = excess)']
	print('        '.join(cols))
	for report in reports:
		print('\t\t\t\t'.join(report))
	print('')
	
	
	print('The P-Value Way (original logic):')
	reports = []
	levels = sorted([float(k[:-1]) for k in crit], key=int)
	for level in levels:
		pct = level / 100
		with_confidence_of = str(100 - level) + '%'
		h0_rejected = p_value <= pct
		isnt_trend_stationary = '✅' if h0_rejected else '❌'
		rejection_strength_excess = round(pct - p_value, 2)
		report = [with_confidence_of, isnt_trend_stationary, rejection_strength_excess]
		reports.append([str(i) for i in report])
	cols = ['With Confidence of', 'Is Not Trend-Stationary?', 'Extra Rejection Strength (-n = couldn\'t reject, 0 = no excess, +n = excess)']
	print('        '.join(cols))
	for report in reports:
		print('\t\t\t\t'.join(report))
	print('')
	
	
	print('The P-Value Way (reverse of original logic):')
	reports = []
	levels = sorted([float(k[:-1]) for k in crit], key=int)
	for level in levels:
		pct = level / 100
		with_error_tolerance_of = str(level) + '%'
		h0_rejected = p_value <= pct
		is_trend_stationary = '✅' if not h0_rejected else '❌'
		acception_strength_excess = round(p_value - pct, 2)
		report = [with_error_tolerance_of, is_trend_stationary, acception_strength_excess]
		reports.append([str(i) for i in report])
	cols = ['With Error Tolerance of', 'Is Trend-Stationary?', 'Extra Acception Strength (-n = couldn\'t accept, 0 = no excess, +n = excess)']
	print('        '.join(cols))
	for report in reports:
		print('\t\t\t\t'.join(report))
	print('')
	print(secline)

main()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@