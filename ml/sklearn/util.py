# https://scikit-learn.org/stable/modules/classes.html#module-sklearn.utils
# https://scikit-learn.org/stable/modules/classes.html#module-sklearn.preprocessing

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# two-point transform
from sklearn.preprocessing import minmax_scale
minmax_scale(X, feature_range=(0,1), *, axis=0, copy=True)

# whole range
minmax_scale([0,10,4,5], (0,1)) # [0, 1, .4, .5]

# single number
y = minmax_scale([x,a,b], (c,d))[0] # transform x in range [a,b] to y in [c,d]
minmax_scale([5,1,10], (10,100))[0] # 50
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# mean removal and variance scaling
from sklearn.preprocessing import StandardScaler
StandardScaler(*, copy=True, with_mean=True, with_std=True)

x = [ [0,0], [0,0], [1,1], [1,1] ]
scaler = StandardScaler()
scaler.fit(x)
scaler.mean_              # [0.5, 0.5]
scaler.transform(x)       # [ [-1,-1], [-1,-1], [1, 1], [ 1,1] ]
scaler.transform([[2,2]]) # [[3,3]]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# binarize label
from sklearn.preprocessing import label_binarize
label_binarize(y=[], *, classes=[], neg_label=0, pos_label=1, sparse_output=False)

label_binarize([1,6], classes=[1,2,4,6]) # [ [1,0,0,0], [0,0,0,1] ]
label_binarize([0,0,6], classes=[4,6,0]) # [ [0,0,1], [0,0,1], [0,1,0] ]
label_binarize(['yes','no','no','yes'], classes=['yes', 'no']) # [ [0], [1], [1], [0] ]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# class weight
from sklearn.utils.class_weight import compute_class_weight
compute_class_weight(class_weight={}|'balanced'|None, *, classes=[], y=[])

weights = compute_class_weight('balanced', classes=np.unique(y_train), y=y_org)
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# random train,test splitter
from sklearn.model_selection import train_test_split
train_test_split(*arrays, test_size=None, train_size=None, random_state=None, shuffle=True, stratify=None)

train_test_split([0,1,2,3,4], shuffle=False) # [ [0,1,2], [3,4] ]

X = [ [0,1], [2,3], [4,5], [6,7], [8,9] ]
y = [  0,     1,     2,     3,     4    ]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
X_train # [ [4,5], [0,1], [6,7] ]
y_train # [  2,     0,     3    ]
X_test  # [ [2,3], [8,9] ]
y_test  # [  1,     4    ]
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@