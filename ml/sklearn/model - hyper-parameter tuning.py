import pandas as pd
from sklearn.model_selection import GridSearchCV, RandomizedSearchCV, StratifiedKFold
from sklearn import datasets
from sklearn.ensemble import RandomForestClassifier

def print_results(cvres):
	items = [{'score': score, **params} for score, params in zip(cvres['mean_test_score'], cvres['params'])]
	df = pd.DataFrame(items).sort_values(by='score', ascending=False)
	print(df)

X, y = datasets.load_iris(return_X_y=True)

# when you have no idea what value a hyperparameter should have,
# try out consecutive powers of 10 (or smaller number for more fine-grained search)

param_grid = [
	{
		'n_estimators': [3, 10, 30],
		'max_features': [1, 2, 3, 4]
	},
	
	{
		'bootstrap': [False],
		'n_estimators': [3, 10],
		'max_features': [1, 2, 3, 4]
	},
]

clf = RandomForestClassifier()
cv = 5
cv = StratifiedKFold(n_splits=5)
gs = GridSearchCV(clf, param_grid, cv=cv, scoring='roc_auc_ovr', return_train_score=True)
gs.fit(X, y)

# access the best params
gs.best_params_    # {'max_features': 8, 'n_estimators': 30}

# access the best estimator class
gs.best_estimator_ # RandomForestClassifier(n_estimators=3, max_features=4, bootstrap=False, ...)

print_results(gs.cv_results_)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# randomized search

param_distribs = {
	'n_estimators': range(1, 200),
	'max_features': [1,2,3,4],
}
rs = RandomizedSearchCV(clf, param_distribs, cv=cv, scoring='roc_auc_ovr', return_train_score=True)
rs.fit(X, y)
print_results(rs.cv_results_)
