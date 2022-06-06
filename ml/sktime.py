import numpy as np
import sktime

sktime.datatypes.check_is_mtype(obj, mtype)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# time series forest classifier
from sktime.classification.interval_based import TimeSeriesForestClassifier

TimeSeriesForestClassifier(n_estimators=200, min_interval=3, n_jobs=1, random_state=None|0)
	# cannot handle multivariate series
	.fit(X, y, **kwargs)
	.predict(X, **kwargs)
	.predict_proba(X, **kwargs)

# example:
time_series = [1,2,3,4,5,6,7,8,9]
x_train = [ [1,2,3], [2,3,4], [3,4,5], [4,5,6] ]
y_train = [ '1',     '1',     '0',     '0',    ]
model = TimeSeriesForestClassifier(n_estimators=5, min_interval=2)
model.fit(np.array(x_train), np.array(y_train))
y_pred = model.predict(np.array(x_train))
print(y_pred) # ['1', '1', '0', '0']

# examine input output structure:
from sktime.datasets import load_unit_test
X_train, y_train = load_unit_test(split='train', return_X_y=True)
X_test, y_test = load_unit_test(split='test', return_X_y=True)
x = [ [list(j) for j in i] for i in X_train.to_numpy()]
y = list(y_train)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@