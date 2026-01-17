import statsmodels.api as sm
from statsmodels.stats.diagnostic import het_breuschpagan, het_white
import numpy as np
import matplotlib.pyplot as plt


# example Data
np.random.seed(42)
x = np.linspace(0, 100, 100)
y = 2*x+5 + np.random.normal(0,10,100) * (x/20)  # creating heteroscedasticity intentionally
# plt.plot(x, y)

# add a constant to the independent variable (intercept)
x_with_const = sm.add_constant(x)

# fit the OLS model
model = sm.OLS(y, x_with_const).fit()

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# perform breusch-pagan test

# the test requires model's residuals and independent variables (x)
bp_test = het_breuschpagan(model.resid, model.model.exog)

labels = ['Lagrange multiplier statistic', 'p-value', 'f-value', 'f p-value']
results = dict(zip(labels, bp_test))

print('Breusch-Pagan Test Results:')
for key, value in results.items():
	print(f'{key}: {value}')

# interpretation
if results['p-value'] < 0.05:
	print('Result: Heteroscedasticity is present (Reject H0)')
else:
	print('Result: No heteroscedasticity (Fail to reject H0)')

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# perform white test

white_test = het_white(model.resid, model.model.exog)

labels = ['Test Statistic', 'Test Statistic p-value', 'F-Statistic', 'F-Statistic p-value']
results = dict(zip(labels, white_test))

print('White Test Results:')
for key, value in results.items():
	print(f'{key}: {value}')

# interpretation
if results['Test Statistic p-value'] < 0.05:
	print('Result: Heteroscedasticity is present (Reject H0)')
else:
	print('Result: No heteroscedasticity (Fail to reject H0)')

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# visual inspection (residual plot)

# plot residuals vs fitted values
plt.scatter(model.fittedvalues, model.resid)
plt.axhline(y=0, color='r', linestyle='-')
plt.xlabel('Fitted values')
plt.ylabel('Residuals')
plt.title('Residuals vs Fitted Values')
plt.show()

'''
How to interpret the plot:

Homoscedasticity:
	residuals are randomly scattered around the horizontal axis (y=0) with roughly constant spread.
	
Heteroscedasticity:
	residuals form a pattern (e.g., a cone shape) where the spread increases or decreases as the fitted values increase.

'''
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
