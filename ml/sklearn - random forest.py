# https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html

from sklearn.ensemble import RandomForestClassifier
X = [ [0,0], [0,1], [1,0], [1,1] ]
Y = [  0,     1,     1,     0    ]
clf = RandomForestClassifier(n_estimators=10)
clf = clf.fit(X, Y)
clf.predict([ [0,0], [0,1], [1,0], [1,1] ]) # [0,1,1,0]