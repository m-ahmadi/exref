from xgboost import XGBClassifier

# https://xgboost.readthedocs.io/en/stable/python/python_api.html#xgboost.XGBClassifier
model = XGBClassifier(n_estimators=10, max_depth=2, random_state=21)
x = [ [1,2,3,4], [2,2,3,4], [-5,1,0,0], [8,4,2,0] ]
y = [  0,         1,          2,         3        ]
model.fit(x, y)
model.score(x, y) # 0.25
model.predict(x)  # [0,0,0,0]