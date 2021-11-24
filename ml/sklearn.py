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

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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