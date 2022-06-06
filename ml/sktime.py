from sktime.classification.interval_based import TimeSeriesForestClassifier
from sktime.datasets import load_unit_test

TimeSeriesForestClassifier(n_estimators=200, min_intervalint=3, n_jobs=1, random_state=None|0)
	.fit(X, y, **kwargs)
	.predict(X, **kwargs)
	.predict_proba(X, **kwargs)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
X_train, y_train = load_unit_test(split='train', return_X_y=True)
X_test, y_test = load_unit_test(split='test', return_X_y=True)

''' input shape
x = [ [list(j) for j in i] for i in X_train.to_numpy()]
y = list(y_train)
'''

clf = TimeSeriesForestClassifier(n_estimators=5)
clf.fit(X_train, y_train)
y_pred = clf.predict(X_test)