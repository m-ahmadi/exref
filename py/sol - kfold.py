from math import floor

def kfold(n_splits=1, a=[]):
	N = len(a)
	n = floor(N / n_splits)
	r = []
	for c in [0] + [*range(1,n_splits)]:
		C = n * c
		i0, i1 = N-n-C, N-C
		r.append({ 'chunk': a[i0:i1], 'rest': a[0:i0] + a[i1:] })
	return r

print(
	kfold(4, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
)

print(
	kfold(4, [1,2,3,4,5,6,7,8,9,10,11,12])
)
