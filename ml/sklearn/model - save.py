# https://scikit-learn.org/stable/model_persistence.html

import pickle
from sklearn import svm
from sklearn import datasets

x, y = datasets.load_iris(return_X_y=True)
clf = svm.SVC()
clf.fit(x, y)
x_test = x[0:100]
y_pred  = clf.predict(x_test)


# save
with open('my_model', 'wb') as f:
	pickle.dump(clf, f)

# load
with open('my_model', 'rb') as f:
	clf2 = pickle.load(f)


y_pred2 = clf2.predict(x_test)
y_pred.tolist() == y_pred2.tolist() # True
