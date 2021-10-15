import sklearn
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

sklearn.preprocessing.minmax_scale(X, feature_range=(0,1), *, axis=0, copy=True)