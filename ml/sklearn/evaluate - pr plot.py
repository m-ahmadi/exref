from sklearn.metrics import precision_recall_curve
from sklearn.metrics import PrecisionRecallDisplay
from sklearn.metrics import average_precision_score
# https://scikit-learn.org/stable/auto_examples/model_selection/plot_precision_recall.html

import numpy as np
import matplotlib.pyplot as plt
from itertools import cycle

from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import label_binarize

from sklearn.svm import LinearSVC
from sklearn.multiclass import OneVsRestClassifier

random_state = np.random.RandomState(0)

x, y = load_iris(return_X_y=True)

# add noisy features to make the problem harder
n_samples, n_features = x.shape
noise = random_state.randn(n_samples, 200 * n_features)
x = np.concatenate([x, noise], axis=1)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# binary classification

x_binclf, y_binclf = x[y<2], y[y<2] # mimic binary
x_train, x_test, y_train, y_test = train_test_split(x_binclf, y_binclf, test_size=0.5, random_state=random_state)
clf = make_pipeline(StandardScaler(), LinearSVC(random_state=random_state))
clf.fit(x_train, y_train)
y_pred = clf.decision_function(x_test)

y_true = y_test

precision, recall, _ = precision_recall_curve(y_true, y_pred)

lw = 2
plt.figure()
plt.plot(recall, precision, lw=lw, color='darkorange', label='Precision-Recall curve')
plt.plot([0,1], [0.5,0.5],  lw=lw, color='navy',       label='Random classifier', linestyle='--')
plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.05])
plt.xlabel('Recall')
plt.ylabel('Precision')
plt.title('Precision-Recall Curve')
plt.legend()
plt.show()


# another way (convenience class)

# without preds (computes preds itself)
disp = PrecisionRecallDisplay.from_estimator(clf, x_test, y_test, name='LinearSVC')
disp.ax_.set_title('2-class Precision-Recall curve')
plt.show()

# with preds
disp = PrecisionRecallDisplay.from_predictions(y_true, y_pred, name='LinearSVC')
disp.ax_.set_title('2-class Precision-Recall curve')
plt.show()

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# multiclass

classes = [0,1,2]
ybin = label_binarize(y, classes=classes)
x_train, x_test, y_train, y_test = train_test_split(x, ybin, test_size=0.5, random_state=random_state)
clf = OneVsRestClassifier(make_pipeline(StandardScaler(), LinearSVC(random_state=random_state)))
clf.fit(x_train, y_train)
y_score = clf.decision_function(x_test)


# average precision score for each class
ppv, tpr, ppv_avg = {}, {}, {}
for i in classes:
	clas_y_true, clas_y_pred = y_test[:, i], y_score[:, i]
	ppv[i], tpr[i], _ = precision_recall_curve(clas_y_true, clas_y_pred)
	ppv_avg[i] = average_precision_score(clas_y_true, clas_y_pred)

ppv['micro'], tpr['micro'], _ = precision_recall_curve(y_test.ravel(), y_score.ravel())
ppv_avg['micro'] = average_precision_score(y_test, y_score, average='micro')

# plot micro-averaged precision-recall curve
disp = PrecisionRecallDisplay(recall=tpr['micro'], precision=ppv['micro'], average_precision=ppv_avg['micro'])
disp.plot()
disp.ax_.set_title('Micro-averaged over all classes')


# plot precision-recall curve for each class and iso-f1 curves

# setup plot details
colors = cycle(['navy', 'turquoise', 'darkorange', 'cornflowerblue', 'teal'])
_, ax = plt.subplots(figsize=(7,8))

f_scores = np.linspace(0.2, 0.8, num=4)
lines, labels = [], []
for f_score in f_scores:
	x = np.linspace(0.01, 1)
	y = f_score * x / (2 * x - f_score)
	(l,) = plt.plot(x[y >=0], y[y >= 0], color='gray', alpha=0.2)
	plt.annotate(f'f1={f_score:0.1f}', xy=(0.9, y[45] + 0.02))

disp = PrecisionRecallDisplay(recall=tpr['micro'], precision=ppv['micro'], average_precision=ppv_avg['micro'])
disp.plot(ax=ax, name='Micro-average precision-recall', color='gold')

for i, color in zip(classes, colors):
	disp = PrecisionRecallDisplay(recall=tpr[i], precision=ppv[i], average_precision=ppv_avg[i])
	disp.plot(ax=ax, name=f'Precision-recall for class {i}', color=color)

# add the legend for the iso-f1 curves
handles, labels = disp.ax_.get_legend_handles_labels()
handles.extend([l])
labels.extend(['iso-f1 curves'])
# set the legend and the axes
ax.set_xlim([0.0, 1.0])
ax.set_ylim([0.0, 1.05])
ax.legend(handles=handles, labels=labels, loc='best')
ax.set_title('Extension of Precision-Recall curve to multi-class')

plt.show()
