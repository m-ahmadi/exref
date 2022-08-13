import sklearn # pip install scikit-learn
import numpy as np

X = np.array([[1, 1], [1, 2], [2, 2], [2, 3]]) # y = 1 * x_0 + 2 * x_1 + 3
y = np.dot(X, np.array([1, 2])) + 3

reg = sklearn.linear_model.LinearRegression().fit(X, y)

print(
	reg.score(X, y),                 # 1.0
	reg.coef_,                       # [1., 2.]
	reg.intercept_,                  # 3.0
	reg.predict(np.array([[3, 5]])), # [16.]
)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# preprocessing
# https://scikit-learn.org/stable/modules/classes.html#module-sklearn.preprocessing

# two-point transform
from sklearn.preprocessing import minmax_scale
minmax_scale(X, feature_range=(0,1), *, axis=0, copy=True)

# whole range
minmax_scale([0,10,4,5], (0,1)) # [0, 1, .4, .5]

# single number
y = minmax_scale([x,a,b], (c,d))[0] # transform x in range [a,b] to y in [c,d]
minmax_scale([5,1,10], (10,100))[0] # 50

#————————————————————————————————————————————————
# alt (mean removal and variance scaling)
from sklearn.preprocessing import StandardScaler
StandardScaler(*, copy=True, with_mean=True, with_std=True)

X_train = np.array([
	[1, -1,  2],
	[2,  0,  0],
	[0,  1, -1]
])
scaler.mean_  # [1.        , 0.        , 0.33333333]
scaler.scale_ # [0.81649658, 0.81649658, 1.24721913]
X_scaled = scaler.transform(X_train)
X_scaled 
	# [[ 0.        , -1.22474487,  1.33630621],
	#  [ 1.22474487,  0.        , -0.26726124],
	#  [-1.22474487,  1.22474487, -1.06904497]])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# model_selection
# https://scikit-learn.org/stable/modules/classes.html#module-sklearn.model_selection

# K-Fold cross-validator
sklearn.model_selection.KFold(n_splits=5, *, shuffle=False, random_state=None|0)

import numpy as np
from sklearn.model_selection import KFold

data = np.array([1,2,3,4,5,6,7,8,9])
kfold = KFold(n_splits=3)

for train, test in kfold.split(data):
	print('train:', data[train], 'test:', data[test])
'''
train: [4 5 6 7 8 9] test: [1 2 3]
train: [1 2 3 7 8 9] test: [4 5 6]
train: [1 2 3 4 5 6] test: [7 8 9]
'''

# random train,test splitter
sklearn.model_selection.train_test_split(*arrays, test_size=None, train_size=None, random_state=None, shuffle=True, stratify=None)

train_test_split([0,1,2,3,4], shuffle=False) # [ [0,1,2], [3,4] ]

X = [ [0,1], [2,3], [4,5], [6,7], [8,9] ]
y = [  0,     1,     2,     3,     4    ]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
X_train # [ [4,5], [0,1], [6,7] ]
y_train # [  2,     0,     3    ]
X_test  # [ [2,3], [8,9] ]
y_test  # [  1,     4    ]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# util
# https://scikit-learn.org/stable/modules/classes.html#module-sklearn.utils

sklearn.utils.class_weight.compute_class_weight(class_weight={}|'balanced'|None, *, classes=[], y=[])

from sklearn.utils.class_weight import compute_class_weight
weights = compute_class_weight('balanced', classes=np.unique(y_train), y=y_org)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# metrics

#————————————————————————————————————————————————
# roc_curve
# https://scikit-learn.org/stable/modules/generated/sklearn.metrics.roc_curve.html
from sklearn.metrics import roc_curve, auc
import matplotlib.pyplot as plt

# perfect classifier
fpr, tpr, _ = roc_curve([1,1,1,1,0,0,0,0], [1,1,1,1,0,0,0,0])

# 1 false positive (fpr=1/4=0.25, tpr=4/4=1)
fpr, tpr, _ = roc_curve([1,1,1,1,0,0,0,0], [1,1,1,1,0,0,1,0])
plt.plot(fpr, tpr)
plt.show()

# 1 false negative (fpr=0/4=0, tpr=3/4=0.75)
fpr, tpr, _ = roc_curve([1,1,1,1,0,0,0,0], [1,0,1,1,0,0,0,0])
plt.plot(fpr, tpr)
plt.show()
#————————————————————————————————————————————————
# auc
# https://scikit-learn.org/stable/modules/generated/sklearn.metrics.auc.html

fpr, tpr, _ = roc_curve([1, 1, 2, 2], [0.1, 0.4, 0.35, 0.8], pos_label=2)
auc(fpr, tpr)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# decision tree classifier
# https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score

clf = DecisionTreeClassifier(random_state=0)
iris = load_iris()
cross_val_score(clf, iris.data, iris.target, cv=10)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# random forest
# https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html
from sklearn.ensemble import RandomForestClassifier # univariate only

x = [ [0,0], [0,1], [1,0], [1,1] ]
y = [  0,     1,     1,     0    ]
clf = RandomForestClassifier(n_estimators=10, max_depth=2, random_state=0)
clf.fit(x, y)
clf.predict(x) # [0,1,1,0]

# multivariate workaround (chain 3rd dim into flat 2nd)
x_train_2d = [ [1,1,9,9], [2,2,8,8], [3,3,7,7], [4,4,6,6] ]
# instead of:
x_train_3d = [ [[1,1],[9,9]], [[2,2],[8,8]], [[3,3],[7,7]], [[4,4],[6,6]] ]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# gradient boosting
# https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html
from sklearn.datasets import make_hastie_10_2
from sklearn.ensemble import GradientBoostingClassifier

x, y = make_hastie_10_2(random_state=0)
x_train, x_test = x[:2000], x[2000:]
y_train, y_test = y[:2000], y[2000:]

clf = GradientBoostingClassifier(n_estimators=100, learning_rate=1.0, max_depth=1, random_state=0)
clf.fit(x_train, y_train)
clf.score(x_test, y_test) # 0.913
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# bagging classifier
# https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingClassifier.html
from sklearn.ensemble import BaggingClassifier
from sklearn.svm import SVC
from sklearn.datasets import make_classification

x = [ [-1,0,1,2,3], [-1,0,1,2,3], [-1,0,1,2,3], [-1,0,1,2,3] ]
y = [   0,            1,            0,            1          ]
x, y = make_classification(n_samples=100, n_features=4, n_informative=2, n_redundant=0, random_state=0, shuffle=False)
clf = BaggingClassifier(base_estimator=SVC(), n_estimators=10, random_state=0)
clf.fit(x, y)
clf.predict([[0,0,0,0]])
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# one v rest classifier
# https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsRestClassifier.html
import numpy as np
from sklearn.multiclass import OneVsRestClassifier
from sklearn.svm import SVC

x = [ [10,10], [8,10], [-5,5.5], [-5.4,5.5], [-20,-20], [-15,-20] ]
y = [  0,       0,       1,        1,          2,         2       ]
clf = OneVsRestClassifier(SVC())
clf.fit(x, y)
clf.predict([ [-19,-20], [9,9], [-5,5] ]) # [2, 0, 1]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@