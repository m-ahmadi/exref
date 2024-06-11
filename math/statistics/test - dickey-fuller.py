from statsmodels.tsa.stattools import adfuller

adfuller(x=[], maxlag=None|0, regression='c|ct|ctt|n', autolag='AIC|BIC|t-stat'|None, store=False, regresults=False)
# https://www.statsmodels.org/dev/generated/statsmodels.tsa.stattools.adfuller.html
# H₀ = unit root exists         (non-stationary series)
# H₁ = unit root does not exist (stationary series)

adfuller([1,2,1,2,1,2,1])        # -2848326498395271.5,  0.0
adfuller([1,50,10,70,60,90,150]) # 1.5556828641718772,   0.9977183379488197
