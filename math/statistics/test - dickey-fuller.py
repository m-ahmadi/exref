from statsmodels.tsa.stattools import adfuller
# H₀ = unit root exists
# H₁ = unit root does not exist
adfuller([1,2,1,2,1,2,1])        # -2848326498395271.5,  0.0
adfuller([1,50,10,70,60,90,150]) # 1.5556828641718772,   0.9977183379488197