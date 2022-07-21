# pip install imbalanced-learn
from imblearn.ensemble import BalancedBaggingClassifier

from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix

from collections import Counter

X, y = make_classification(
	n_classes=2,
	class_sep=2,
	weights=[0.1, 0.9],
	n_informative=3,
	n_redundant=1,
	flip_y=0,
	n_features=20,
	n_clusters_per_class=1,
	n_samples=1000,
	random_state=10
)

print('Original dataset shape %s' % Counter(y))

X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)

bbc = BalancedBaggingClassifier(random_state=42)
bbc.fit(X_train, y_train) 

y_pred = bbc.predict(X_test)
print(confusion_matrix(y_test, y_pred))