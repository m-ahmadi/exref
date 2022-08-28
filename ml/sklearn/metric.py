# https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics
# sklearn infers number of classes and type of classification from data
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
from sklearn.metrics import precision_score, recall_score

y_true = [1,1,1,1,1, 1,1,1,1,1]
recall_score(y_true, [1,1,1,1,1, 0,0,1,1,1], average='micro') # TP:8  FN:2  8/10=0.8
recall_score(y_true, [1,1,1,1,1, 0,0,1,1,1], average=None)    # [0, 0.8]
recall_score(y_true, [1,1,1,1,1, 0,0,1,1,1], average='macro') # 0.4

y_true = [1,1,1,1, 0,0,0,0]

recall_score(y_true, [1,1,1,1, 0,0,0,1], average=None) # [0.75, 1.00]
recall_score(y_true, [1,1,1,0, 0,0,0,0], average=None) # [1.00, 0.75]

precision_score(y_true, [1,1,1,1, 0,0,0,1], average=None) # [1.0, 0.8 ]  TP:4  FP:1  4/5=0.8
precision_score(y_true, [1,1,1,0, 0,0,0,0], average=None) # [0.8, 1.00]  TP:4  FP:1  4/5=0.8
precision_score(y_true, [1,1,1,1, 0,0,1,1], average=None) # [1.0, 0.66]  TP:4  FP:2  4/6=0.66
precision_score(y_true, [1,1,1,1, 0,1,1,1], average=None) # [1.0, 0.57]  TP:4  FP:3  4/7=0.57

# micro (total, not per class)
precision_score(y_true, [1,1,1,1, 0,0,1,1], average=None)    # [1, 0.66]
precision_score(y_true, [1,1,1,1, 0,0,1,1], average='macro') # 0.83 (1.66 / 2)
precision_score(y_true, [1,1,1,1, 0,0,1,1], average='micro') # TP:6  FP:2  6/8=0.75
precision_score(y_true, [1,1,1,1, 0,1,1,1], average='micro') # TP:5  FP:3  5/8=0.625

precision_score([1,1,1,1], [1,1,1,0], average='micro') # 0.75
precision_score([1,1,1,1], [1,0,0,0], average='micro') # 0.25

# macro (per class, simple mean)
precision_score(y_true, [1,1,1,1, 0,0,0,1], average='macro') # 0.9
precision_score(y_true, [1,1,1,1, 0,0,0,1], average=None)    # [1, 0.8]

# weighted (per class, mean weighted relative to class presence in true data)
y_true = [1,1,1,1, 0,0,0,0, 0,0,0,0]
precision_score(y_true, [1,1,1,1, 0,0,0,0, 0,0,0,0], average='weighted') # 1
precision_score(y_true, [1,1,1,1, 0,0,0,0, 0,0,0,1], average='weighted') # 0.933
precision_score(y_true, [1,1,1,1, 0,0,0,0, 0,0,0,1], average=None)       # [1, 0.8]
np.average([1, 0.8], weights=[2,1]) # 0.933
( (1*2) + (0.8*1) ) / 3             # ...

# multilabel
y_true = [ [0,0,0], [1,1,1], [0,1,1] ]
y_pred = [ [0,0,0], [1,1,1], [1,1,0] ]
precision_score(y_true, y_pred, average=None) # [0.5, 1, 1]

'''
macro
	score of each class averaged
	class with less samples has same weight as rest (good for balanced data)
	overstates low score of infrequent class

weighted
	score of each class averaged weighted relative to class presence in true data sample
	accounts for class imbalance (good for imbalanced data)

micro
	calculated globally instead of per class
	micro averaged precision == accuracy
'''

# interpreting tp & fp (class:TP-FP)
y_true = [1,1,1,1, 2,2,2,2, 3,3,3,3]
precision_score(y_true, [2,2,2,2, 2,2,2,2, 2,2,2,2], average=None) # A:0-4  B:4-8  C:0-4
precision_score(y_true, [1,1,3,3, 2,2,2,2, 3,3,1,1], average=None) # A:2-2  B:4-0  C:2-2
precision_score(y_true, [2,2,2,2, 2,2,2,2, 3,3,3,3], average=None) # A:0-4  B:4-4  C:4-0

''' example
-------    TP  FP  PPV
class 1    2   2   0.5
class 2    2   8   0.2
class 3    2   2   0.5
'''
y_true = [1,1,1,1,1,1,  2,2,2,2,2,2,  3,3,3,3,3,3]
y_pred = [1,1,2,2,2,2,  2,2,3,3,1,1,  3,3,2,2,2,2]
precision_score(y_true, y_pred, average=None)    # [0.5, 0.2, 0.5]
precision_score(y_true, y_pred, average='macro') # 0.39999999999999997
precision_score(y_true, y_pred, average='micro') # 0.3333333333333333
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
from sklearn.metrics import roc_curve
import matplotlib.pyplot as plt

# perfect classifier
fpr, tpr, _ = roc_curve([1,1,1,1, 0,0,0,0], [1,1,1,1, 0,0,0,0])

# 1 false positive (fpr:1/4=0.25, tpr:4/4=1)
fpr, tpr, _ = roc_curve([1,1,1,1, 0,0,0,0], [1,1,1,1, 0,0,0,1])
plt.plot(fpr, tpr)
plt.show()

# 1 false negative (fpr:0/4=0, tpr:3/4=0.75)
fpr, tpr, _ = roc_curve([1,1,1,1, 0,0,0,0], [0,1,1,1, 0,0,0,0])
plt.plot(fpr, tpr)
plt.show()

# `thresholds`: decreasing numbers used to compute `fpr` and `tpr`
# it goes from `max(y_pred) + 1` to near 0
y_true = [1,   1,   2,    2  ]
y_pred = [0.1, 0.4, 0.35, 0.8]
fpr, tpr, thresholds = roc_curve(y_true, y_pred, pos_label=2)
thresholds # [1.8 , 0.8 , 0.4 , 0.35, 0.1 ]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
from sklearn.metrics import auc

fpr, tpr, _ = roc_curve([1,1,1,1, 0,0,0,0], [1,1,1,1, 0,0,0,1])
auc(fpr, tpr) # 0.875

fpr, tpr, _ = roc_curve([1,1,1,1, 0,0,0,0], [0,0,1,1, 0,0,0,0])
auc(fpr, tpr) # 0.75
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
from sklearn.metrics import roc_auc_score

roc_auc_score([1,1,1,1, 0,0,0,0], [1,1,1,1, 0,0,0,1]) # 0.875
roc_auc_score([1,1,1,1, 0,0,0,0], [0,0,1,1, 0,0,0,0]) # 0.75
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
from sklearn.metrics import classification_report

y_true = [0, 1, 2, 2, 0]
y_pred = [0, 0, 2, 1, 0]
target_names = ['class 0', 'class 1', 'class 2']
print(classification_report(y_true, y_pred, target_names=target_names))

print(classification_report([1,1,1,1, 0,0,0,0], [1,1,1,1, 0,0,0,1]))
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@