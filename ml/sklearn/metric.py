# https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
from sklearn.metrics import roc_curve
import matplotlib.pyplot as plt

# perfect classifier
fpr, tpr, _ = roc_curve([1,1,1,1, 0,0,0,0], [1,1,1,1, 0,0,0,0])

# 1 false positive (fpr=1/4=0.25, tpr=4/4=1)
fpr, tpr, _ = roc_curve([1,1,1,1, 0,0,0,0], [1,1,1,1, 0,0,0,1])
plt.plot(fpr, tpr)
plt.show()

# 1 false negative (fpr=0/4=0, tpr=3/4=0.75)
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