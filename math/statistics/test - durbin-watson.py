from statsmodels.formula.api import ols
from statsmodels.stats.stattools import durbin_watson
import pandas as pd

df = pd.DataFrame({
	'rating':   [90, 85, 82, 88, 94, 90, 76, 75, 87, 86],
	'points':   [25, 20, 14, 16, 27, 20, 12, 15, 14, 19],
	'assists':  [5, 7, 7, 8, 5, 7, 6, 9, 9, 5],
	'rebounds': [11, 8, 10, 6, 6, 9, 6, 10, 10, 7]
})
model = ols('rating ~ points + assists + rebounds', data=df).fit()
print(durbin_watson(model.resid))