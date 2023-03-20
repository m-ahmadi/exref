import numpy as np
import matplotlib.pyplot as plt
from sklearn import svm, datasets
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import label_binarize
from sklearn.multiclass import OneVsRestClassifier
from sklearn.preprocessing import minmax_scale

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


''' decision_function()
output numbers in [-inf,inf] range
distance of sample from separating hyperplane
higher distance = higher probability
(in multiclass, its result is the output from each of the pairwise classifiers)
'''
y_pred = clf.decision_function(x_test)


''' predict_proba()
output numbers in [0,1] range
probability of sample belonging to class
in multiclass, outputs probability for each class (sums to 1)
'''
y_prob = clf.predict_proba(x_test)



figsize = (15,8)
label_1 = 'decision_function() in default [-inf,inf] range'
label_1_a = 'decision_function() scaled to [0,1] range'
label_2 = 'predict_proba() in default [0,1] range'



plt.figure(constrained_layout=True, figsize=figsize)
plt.title('class 0')
plt.plot(y_pred[:,0], label=label_1)
plt.plot(y_prob[:,0], label=label_2)
plt.legend()
plt.show()



for i in [0,1,2]:
	y1 = y_pred[:,i]
	y2 = y_prob[:,i]
	y1_scaled = minmax_scale(y1, [0,1])
	plt.figure(constrained_layout=True, figsize=figsize)
	plt.title(f'class {i}')
	plt.plot(y1_scaled, color='red',  label=label_1_a)
	plt.plot(y2,        color='blue', label=label_2)
	plt.legend()
	plt.show()



fig, axes = plt.subplots(3, sharex=True, constrained_layout=True, figsize=figsize)
for i in [0,1,2]:
	y1 = y_pred[:,i]
	y2 = y_prob[:,i]
	y1_scaled = minmax_scale(y1, [0,1])
	axes[i].set_title(f'class {i}')
	axes[i].plot(y1_scaled, color='red')
	axes[i].plot(y2, color='blue')
fig.legend([label_1_a, label_2])
plt.show()
