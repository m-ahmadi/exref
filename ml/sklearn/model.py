# linear regression
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1, 1], [1, 2], [2, 2], [2, 3]])
# y = 1 * x_0 + 2 * x_1 + 3
y = np.dot(X, np.array([1, 2])) + 3

reg = sklearn.linear_model.LinearRegression().fit(X, y)

reg.score(X, y),                 # 1.0
reg.coef_,                       # [1., 2.]
reg.intercept_,                  # 3.0
reg.predict(np.array([[3, 5]])), # [16.]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# support vector machine
from sklearn.svm import SVC
SVC(*, C=1.0, kernel='rbf|linear|poly|sigmoid|precomputed'|fn, degree=3,
	gamma='scale|auto', # for non linear hyperplanes (higher = more overfit)
	coef0=0.0, shrinking=True, probability=False,
	tol=0.001, cache_size=200, class_weight=None, verbose=False,
	max_iter=-1, decision_function_shape='ovr', break_ties=False, random_state=None)
# https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html

x = [ [-1, -1], [-2, -1], [1, 1], [2, 1] ]
y = [   1,        1,       2,      2     ]
clf = SVC()
clf.fit(x, y)
clf.predict(x)           # [1, 1, 2, 2]
clf.decision_function(x) # [-1, -1, 1, 1]

# predict_proba (probability that data point falls in underlying class)
# results are meaningless on very small datasets
# results can be slightly different than `predict`
# result columns map to classes in sorted order `clf.classes_`
x = [ [0,0], [1,0], [0,1], [1,1] ]
y = [  0,     1,     1,     0    ]
clf = SVC(probability=True).fit(x, y)
clf.predict(x)       # [  0,          1,          1,          0         ]
clf.predict_proba(x) # [ [.25, .75], [.75, .25], [.75, .25], [.25, .75] ]
clf.classes_         #   [0,    1]

from sklearn.pipeline import make_pipeline
clf = make_pipeline(StandardScaler(), SVC(gamma='auto'))
clf.fit(X, y)
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

x = [ [0,0], [0,0], [1,1], [1,1],   [0,1], [0,1] ] 
y = [  1,     1,     2,     2,       3,     3    ]
clf = OneVsRestClassifier(SVC())
clf.fit(x, y)
clf.predict(x) # [1,1,2,2,3,3]

'''
OneVsRest converts multiclass clf into multiple binary clfs for each class

example:

label: good|bad|ugly (3 classes)

3 binary clfs:
	clf1 = good vs [bad,ugly]   (good | !good)
	clf2 = bad  vs [good,ugly]  (bad  | !bad)
	clf3 = ugly vs [good,bad]   (ugly | !ugly)

3 binary clf metrics
	metrics = [ clf.precision|recall for clf in [clf1, clf2, clf3] ]
	metrics = [clf1, clf2, clf3].map(clf => clf.precision|recall)

average of 3 binary metrics
	macro:      mean of metric from each class (good for balanced data)
	weighted:   mean of metric from each class weighted by number of samples in that class (good for imbalanced data)
	micro:      same as accuracy:  sum(matrix.diagonal_cells) / sum(matrix.cells)

example with precision metric:
          TP  FP  PPV
class A:  1   1   0.5
class B:  10  90  0.1
class C:  1   1   0.5
macro avg = (0.5 + 0.1 + 0.4) / 3        = 0.3666
micro avg = (1 + 10 + 1) / (2 + 100 + 2) = 0.1154
'''

# SVC handles multiclass internally using a one-vs-one scheme
# otherwise this would be an error since svm only handles binary classification
x = [ [0,0], [0,0], [1,1], [1,1],   [0,1], [0,1] ] 
y = [  1,     1,     2,     2,       3,     3    ]
clf = SVC()
clf.fit(x, y)
clf.predict(x) # [1,1,2,2,3,3]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@