'''
y       = [ [sample,label], ..., ]
y_pred  = [ [sample,label], ..., ]
labels  = [label  for _, label  in y]
samples = [sample for sample, _ in y]
'''

from sklearn.metrics import precision_score

def micro(a, b):
	norm = lambda i: len(i)
	intersect = [*filter(lambda i: i, [1 if i in a else 0 for i in b])]
	return norm(intersect) / norm(b)

y_true = [1,1,1,1]

y_pred = [1,1,1,0]
micro(y_true, y_pred)                            # 0.75
precision_score(y_true, y_pred, average='micro') # 0.75

y_pred = [1,0,0,0]
micro(y_true, y_pred)                            # 0.25
precision_score(y_true, y_pred, average='micro') # 0.25