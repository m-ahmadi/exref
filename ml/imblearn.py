# pip install imbalanced-learn

from imblearn.ensemble import BalancedBaggingClassifier
# https://imbalanced-learn.org/stable/references/generated/imblearn.ensemble.BalancedBaggingClassifier.html
BalancedBaggingClassifier(
	estimator=None|Estimator,
	n_estimators=10, *,
	max_samples=1.0|0,
	max_features=1.0|0,
	bootstrap=True,
	bootstrap_features=False,
	oob_score=False,
	warm_start=False,
	sampling_strategy='auto'|0.|{}|fn,
	replacement=False,
	n_jobs=None|0,
	random_state=None|RandomState|0,
	verbose=0,
	sampler=None|Sampler,
	base_estimator=None|Estimator # v0.10 deprecated (v0.12 remove)
)

from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix

from collections import Counter

x, y = make_classification(
	n_classes=2,
	class_sep=2,
	weights=[0.1, 0.9],
	n_informative=3,
	n_redundant=1,
	flip_y=0,
	n_features=20,
	n_clusters_per_class=1,
	n_samples=1000,
	random_state=10)

print('Original dataset shape %s' % Counter(y))
x_train, x_test, y_train, y_test = train_test_split(x, y, random_state=0)

bbc = BalancedBaggingClassifier(random_state=42)
bbc.fit(x_train, y_train) 

y_pred = bbc.predict(x_test)
print(confusion_matrix(y_test, y_pred))