# K-Fold cross-validator
# https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html
from sklearn.model_selection import KFold
KFold(n_splits=5, *, shuffle=False, random_state=None|0)

import numpy as np
data = np.array([1,2,3,4,5,6,7,8,9])
kfold = KFold(n_splits=3)

for train, test in kfold.split(data):
	print('train:', data[train], 'test:', data[test])
'''
train: [4 5 6 7 8 9] test: [1 2 3]
train: [1 2 3 7 8 9] test: [4 5 6]
train: [1 2 3 4 5 6] test: [7 8 9]
'''
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# evaluate multiclass
# precision,recall,... first for each class separately, then averaged

y_test # [ [0,1,2], [0,1,2], ... ]
y_pred = clf.predict_proba(x_test)
fpr, tpr, roc_auc = {}, {}, {}
for clas in [0,1,2]:
	clas_y_true = y_test[:, clas]
	clas_y_pred = y_pred[:, clas]
	clas_fpr, class_tpr, _ = roc_curve(clas_y_true, clas_y_pred)
	clas_auc = auc(clas_fpr, clas_tpr)
	fpr[clas]     = clas_fpr
	tpr[clas]     = clas_tpr
	roc_auc[clas] = clas_auc
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@