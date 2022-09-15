from sklearn.metrics import roc_curve, auc, roc_auc_score
# https://scikit-learn.org/stable/auto_examples/model_selection/plot_roc.html

import numpy as np
import matplotlib.pyplot as plt
from sklearn import svm, datasets
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import label_binarize
from sklearn.multiclass import OneVsRestClassifier
plt.style.use('bmh')

def main(proba=False):
	classes, y_test, y_pred, y_prob = get_model_related_things()
	
	fpr, tpr, roc_auc = get_multiclass_roc(classes, y_test, y_prob if proba else y_pred)
	
	# plot one specific class
	plt.figure()
	lw = 2
	plt.plot(fpr[2], tpr[2], color='darkorange', lw=lw, label=f'ROC curve of class 2 (area = {roc_auc[2]:0.2f})')
	plt.plot([0,1], [0,1],   color='navy',       lw=lw, label='random classifier', linestyle='--')
	plt.xlim([0.0, 1.0])
	plt.ylim([0.0, 1.05])
	plt.xlabel('FPR')
	plt.ylabel('TPR')
	plt.legend(loc='lower right')
	plt.show()
	
	# plot multiclass ROC
	plt.figure()
	plt.plot(fpr['micro'], tpr['micro'], color='deeppink', linestyle=':', linewidth=4, label=f'micro-average ROC curve (area = {roc_auc["micro"]:0.2f})')
	plt.plot(fpr['macro'], tpr['macro'], color='navy',     linestyle=':', linewidth=4, label=f'macro-average ROC curve (area = {roc_auc["macro"]:0.2f})')
	
	colors = ['aqua', 'cornflowerblue', 'darkorange']
	for i, color in zip(classes, colors):
		plt.plot(fpr[i], tpr[i], color=color, lw=lw, label=f'ROC curve of class {i} (area = {roc_auc[i]:0.2f})')
	
	plt.plot([0,1], [0,1], 'k--', lw=lw)
	plt.xlim([0.0, 1.0])
	plt.ylim([0.0, 1.05])
	plt.xlabel('FPR')
	plt.ylabel('TPR')
	plt.title('multiclass ROC')
	plt.legend(loc='lower right')
	plt.show()
	
	# auc only
	ovo_macro    = roc_auc_score(y_test, y_prob, multi_class='ovo', average='macro')
	ovo_weighted = roc_auc_score(y_test, y_prob, multi_class='ovo', average='weighted')
	ovr_macro    = roc_auc_score(y_test, y_prob, multi_class='ovr', average='macro')
	ovr_weighted = roc_auc_score(y_test, y_prob, multi_class='ovr', average='weighted')
	print(f'''
	One-vs-One:
		macro:     {ovo_macro:.6f}
		weighted:  {ovo_weighted:.6f}

	One-vs-Rest:
		macro:     {ovr_macro:.6f}
		weighted:  {ovr_weighted:.6f}
	''')


def get_multiclass_roc(classes, y_test, y_pred):
	# compute roc curve and area for each class
	fpr, tpr, roc_auc = {}, {}, {}
	for i in classes:
		fpr[i], tpr[i], _ = roc_curve(y_test[:, i], y_pred[:, i])
		roc_auc[i] = auc(fpr[i], tpr[i])
	
	# micro
	fpr['micro'], tpr['micro'], _ = roc_curve(y_test.ravel(), y_pred.ravel()) # `roc_curve` only supports binary classification
	roc_auc['micro'] = auc(fpr['micro'], tpr['micro'])
	
	
	# macro
	
	# aggregate all fprs
	all_fpr = [fpr[i] for i in classes]
	all_fpr = np.concatenate(all_fpr)
	all_fpr = np.unique(all_fpr)

	# interpolate all roc curves
	mean_tpr = np.zeros_like(all_fpr)
	for i in classes:
		mean_tpr += np.interp(all_fpr, fpr[i], tpr[i])
	mean_tpr /= len(classes) # average it
	
	fpr['macro'] = all_fpr
	tpr['macro'] = mean_tpr
	roc_auc['macro'] = auc(fpr['macro'], tpr['macro'])
	
	return [fpr, tpr, roc_auc]


def get_model_related_things():
	iris = datasets.load_iris()
	x, y = iris.data, iris.target
	classes = np.unique(y)
	y_bin = label_binarize(y, classes=classes)
	
	# add noisy features to make the problem harder
	random_state = np.random.RandomState(0)
	n_samples, n_features = x.shape
	x = np.c_[x, random_state.randn(n_samples, 200 * n_features)]
	
	x_train, x_test, y_train, y_test = train_test_split(x, y_bin, test_size=0.5, random_state=0)
	
	clf = OneVsRestClassifier(svm.SVC(kernel='linear', probability=True, random_state=random_state))
	clf.fit(x_train, y_train)
	y_pred = clf.decision_function(x_test)
	y_prob = clf.predict_proba(x_test)
	
	return [classes, y_test, y_pred, y_prob]


main()
main(True)
