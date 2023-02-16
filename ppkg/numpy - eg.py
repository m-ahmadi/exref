# help
np.info(np.sum) # prints to stdout
# py -c "import numpy as np; np.info(np.sum)"

# 100 solutions: https://github.com/rougier/numpy-100/blob/master/100_Numpy_exercises_with_solutions.md

# math
np.multiply([2,2], [2,4]) # [4,8]
np.dot(2, [2,4])          # ...
np.dot([2,2], [2,4])      # 12
np.ceil(2.9)              # 3
np.sum([1,2,3])           # 6
np.mean([2,3])            # 2.5
np.mean([[2,4], [3,5]])   # 3.5 (3.5 + 4.5/ 2)
np.average()
np.std()
np.var()
np.matmul([ [1,2],[3,4] ], [ [4,5],[6,7] ]) # [[16, 19],[36, 43]]
np.cov([ [1,2,3,4], [2,3,2,1] ])[0][1]
np.percentile([1,2,3,4], 50) # 2.5
np.quantile()

# math - sum
np.sum([1,2,3])       # 6
np.sum([])            # 0.0
np.sum([0.2, 0.6])    # 0.8
np.sum([[1,2],[3,4]]) # 10
np.sum([0.2, 0.6], dtype='int32') # 0
np.sum([1,2,3], initial=10)       # 16

np.sum([ [1,2],
				 [1,2],
				 [1,2] ], axis=0)   # [3,6]

np.sum([ [1,1,1],
				 [2,2,2] ], axis=1) # [3,6]

np.sum([ [1,2,False], [3,4,False] ], axis=1, where=[True,True,False]) # [3,7]

# math - interp
x = [1,2,3]
y = [2,4,6]
np.interp(1, x, y)   # 2
np.interp(2, x, y)   # 4
np.interp(1.5, x, y) # 3
np.interp(4, x, y)   # 6
np.interp([1.5, 2.5], x, y) # [3, 5]

# as operand
a = np.array([1,2,3,4])
a * 2  # element-wise product: [2,4,6,8]
	[i*2 for i in [1,2,3,4]] == list(a*2) # True
	list(map(lambda i: i*2, [1,2,3,4])) == list(a*2) # True
a + 2  # [3,4,5,6]
a - 2  # [-1,0,1,2]
a / 2  # [.5,1,1.5,2]
a // 2 # [0,1,1,2]
a ** 2 # [1,4,9,16]

# inverse bool arr (unary invert operator, hacky)
~np.array([True, False]) # [False,  True]

# as arg of python's toplevel fns
abs([-2,2]),            # err
abs(np.array([-2,2]))   # [2,2]
pow([2,4], 2)           # err
pow(np.array([2,4]), 2) # [4,16]

# slice by another arr
a = np.array([10,20,30,40,50,60])
a[np.array([1,2,3,4])] # [20,30,40,50]

# creation
np.arange(2.7, 3.2, 0.1)         # [2.7, 2.8, 2.9, 3., 3.1, 3.2]
np.concatenate( ([1,2], [3,4]) ) # [1,2,3,4]
np.linspace(1, 2, 5)             # [1, 1.25, 1.5, 1.75, 2]
np.zeros(4)                      # [0., 0., 0., 0.]
np.zeros_like([1,2,3,4])         # [0, 0, 0, 0]

# index of
np.argmax([1,2,3,4]) # 3
np.argmax([4,3,2,1]) # 3

a = np.array([1,2,3,4])
a.argmin() # 0
a.argmax() # 3
np.where(a == a.min()) # [0]
np.where(a == a.max()) # [3]

# min max
np.min == np.amin # True
np.max == np.amax # True
np.min([4,6]) # 4
np.max([4,6]) # 6

# map
a = np.array([1,2,3,4,5])
np.where(a<4, a+10, a*2) # [11,12,13,8,10]

a = np.array([1,2,3,4])
b = np.array([0,0,0,0])
np.where(a % 2 == 0, a, b)     # [0,    2, 0,    4]
np.where(a % 2 == 0, a, None)  # [None, 2, None, 4]
np.where(a % 2 == 0, a, False) # [0,    2, 0,    4]
np.where(a % 2 == 0, a, True)  # [1,    2, 1,    4]

a = np.array([1,2,3,None,4,5,None,6])
b = np.array([9,9,9,9,9,9,9,9])
np.where(a == None) # [3,6]  index of match
np.where(a is None) # []     bad
np.where(a == None, a, b)     # [9, 9, 9, None, 9, 9, None, 9]
np.where(a != None, a, b)     # [1, 2, 3, 9,    4, 5, 9,    6]
np.where(a is None, a, b)     # [9, 9, 9, 9,    9, 9, 9,    9]  bad
np.where(a is not None, a, b) # [1, 2, 3, None, 4, 5, None, 6]  bad

# some & every
np.any([False, False, True])  # True
np.any([False, False, False]) # False
np.all([True, True, True])    # True
np.all([True, True, False])   # False

a = np.array([1,2,3,4])
b = np.array([1,2,3,4])
c = np.array([1,2,3,5])
np.all(a == b) # True
np.all(a == c) # False
np.any(a == c) # True

# filter
a = np.arange(10)
a[a%2==0] # [0,2,4,6,8]
a[a%2==1] # [1,3,5,7,9]
a = np.array([ [1,2,3,4], [5,6,7,8], [9,10,11,12] ])
b = np.array([0,1,0])
a[:, :2][b == 0] # [ [1,2], [9,10] ]
a[:, :2][b == 1] # [ [5,6] ]

a = np.array([1,2,None,4])
a[a == None]     # [None]
a[a != None]     # [1,2,4]
a[a is None]     # []                    bad
a[a is not None] # [[[1, 2, None, 4]]    bad

# flat
a = np.array([ [[1],[2]], [[3],[4]] ])
a.ravel()      # array([1,2,3,4])
a.flatten()    # ...
a.reshape(-1)  # ... 
[*a.flat]      # [1,2,3,4]

# transpose
a = np.array([ [1,2], [3,4] ])
np.transpose(a) # [ [1,3], [2,4] ]
a.T             # ...

# translate
np.c_[[1,2,3], [4,5,6]]  # [ [1,4], [2,5], [3,6] ]
a = [[1,1],
     [2,2]]
b = [[3,3],
		 [4,4]]
np.c_[a, b]                    # [[1,1,3,3], [2,2,4,4]]
np.concatenate([a, b], axis=1) # ...

np.r_[[1,2], [3,4], 5,6] # [1,2,3,4,5,6]

# infer shape (from array length and remaining dimensions)
np.arange(20).reshape((4,5))
np.arange(20).reshape((-1,5)) # 4x5
np.arange(20).reshape((-1,4)) # 5x4
np.arange(20).reshape((-1,2)) # 2x10

# 2d arr slicing
a = np.array([ [1,2], [3,4] ])
a[0, 0] # 1
a[0, 1] # 2
a[1, 0] # 3
a[1, 1] # 4
a = np.array([ [1,2,3,4], [5,6,7,8], [9,10,11,12] ])
a[:, :2] # [ [1,2], [5,6], [9,10] ]
a[0, :2] # [1,2]
a[1, :2] # [5,6]
a[:, 2:] # [ [3,4], [7,8], [11,12] ]

a = np.array([ [1,2], [3,4], [5,6], [7,8] ])
a[:, 0] # [1,3,5,7]
a[:, 1] # [2,4,6,8]

a = np.array([ # np.arange(1,17).reshape((4,4))
	[ 1,  2,  3,  4],
	[ 5,  6,  7,  8],
	[ 9, 10, 11, 12],
	[13, 14, 15, 16]
])
a[:2, :2] # top left: [ [1,2], [5,6] ]

# 3d arr slicing
a = np.array([ # np.arange(1,25).reshape(3,2,4)
	[ [ 1,  2,  3,  4],
	  [ 5,  6,  7,  8] ],
	[ [ 9, 10, 11, 12],
	  [13, 14, 15, 16] ],
	[ [17, 18, 19, 20],
	  [21, 22, 23, 24] ]
])
a[0,0,0] # 1
a[0,0,1] # 2
a[0,1,0] # 5
a[0,1,1] # 6
a[1,0,0] # 9
a[1,0,1] # 10
a[0, :2, :2] # top left: [ [1,   2], [5,   6] ]
a[1, :2, :2] # mid left: [ [9,  10], [13, 14] ]
a[1, :2, :2] # bot left: [ [17, 18], [21, 22] ]

a = np.arange(20).reshape(10,2,1)
a[:, -1]   # a.map(i=> i.map(j=> j.slice(-1)[0] ).slice(-1) )
a[:, 1, 0] # a.map(i=> i.map(j=> j[0] ).slice(-1)[0] )
a[:, 0, 0] # a.map(i=> i.map(j=> j[0] ).slice(-2)[0] )

# ellipsis operator
a = np.arange(1,9).reshape((2,2,2))
a[:, :, 0] # [ [1,3], [5,7] ]
a[..., 0]  # ...
a[:, :, 1] # [ [2,4], [6,8] ]
a[..., 1]  # ...

a = np.arange(1,17).reshape((2,2,2,2))
a[0, :, :, 0] # [ [1,3], [5,7] ]
a[..., 0]     # ...
a[0, :, :, 1] # [ [2,4], [6,8] ]
a[..., 1]     # ...

# append
np.append([1,2,3], 4)                          # [1,2,3,4]
np.append([1,2], [3,4])                        # ...
np.append([1,2], [ [3,4], [5,6] ])             # [1,2,3,4,5,6]
np.append([ [1,2], [3,4] ], [ [6,7] ], axis=0) # [ [1,2], [3,4], [5,6] ]
np.append([ [1,2], [3,4] ], [5,6], axis=0)     # err

# preppend
np.append([1,2], [3,4])          # [1,2,3,4]
np.concatenate(( [1,2], [3,4] )) # ...
np.insert([3,4], 0, [1,2])       # ...  (slowest)

# splice
np.insert([3,4], 1, [1,2]) # [3,1,2,4]

# misc
a = np.array([ [1,2], [3,4], [5,6] ])
a.shape     # (3,2)
np.shape(a) # ...

# diff
a = [2,8,16,28]
np.diff(a, 0) # [2,8,16,28]
np.diff(a, 1) # [6,8,12]
np.diff(a, 2) # [-2,4])

# sol - % diff
a = [1,2,3,4,5]
np.diff(a) / a[1:]         # [.5, .33, .25, .2]
np.diff(a) / a[1:] * 100   # [50, 33.33, 25, 20]
b = np.array([ [1,2,3], [1,2,3] ])
np.diff(b) / b[:,1:] * 100 # [ [.5, .33], [.5, .33] ]

# sol - split array
np.array_split([1,2,3,4,5,6], 2) # [ [1,2,3], [4,5,6] ]
np.array_split([1,2,3,4,5,6], 3) # [ [1,2], [3,4], [5,6] ]
np.array_split([1,2,3,4,5,6], 4) # [ [1,2], [3,4], [5] , [6] ]

# random
np.random.random()       # 0.14
np.random.random(3)      # [0.08, 0.62, 0.74]

np.random.uniform()      # 0.78
np.random.uniform(2,4)   # 3.40
np.random.uniform(1,5,5) # [2.752647, 1.19705214, 3.33665323, 1.93819238, 3.36881953]

np.random.randint(5)       # 4
np.random.randint(15,20)   # 17
np.random.randint(15,20,3) # [17, 17, 18]

np.random.rand()    # 0.04
np.random.rand(3)   # [0.41532406, 0.86290618, 0.29035438]
np.random.rand(3,2) # [ [0.51, 0.58], [0.32, 0.68], [0.43, 0.05] ]
np.random.random_sample() # ...

np.random.permutation(4)         # [3,1,0,2]
np.random.permutation([6,7,8,9]) # [7,9,6,8]

distr_mean, dist_stdv = 20, 50
np.random.normal(distr_mean, distr_stdv, 3) # [86.2179375 , 11.38996037, 56.51758952]

np.random.randn(2, 2) # [ [-0.35007154,  0.60158319], [1.05053568, -0.22653905] ]

np.random.choice(5, 3)                           # [4, 0, 2]
np.random.choice(10, 3)                          # [2, 8, 9]
np.random.choice(4, 6, p=[.1,.1,.4,.4])          # [2, 2, 2, 3, 3, 3]
np.random.choice(['a','b','c'], 6, p=[.6,.2,.2]) # ['b', 'a', 'a', 'a', 'c', 'a']

# round
a = [1.111, 2.222, 3.333, 4.444]
np.round(a, 1)  # [1.1, 2.2, 3.3, 4.4]
np.round_(a, 1) # ...
np.around(a, 1) # ...

# trim mean
def avgtrim(arr, percent):
	n = len(arr)
	k = int(round( n*(float(percent)/100)/2 ))
	return np.mean(arr[k+1:n-k])

# pass by reference
a = [ [1,2], [3,4] ]
b = a[:]
b[0][0] = 57
a[0][0] # 57

a = np.array([ [1,2], [3,4] ])
b = a.copy()
b[0][0] = 57
a[0][0] # 1

# misc
np.flip([1,2,3]) # [3,2,1]
np.flip([1,2,3]).tolist() == [*reversed([1,2,3])] # True

np.bincount([1,1,1])       # count occurrence: [0,3]
np.bincount([1,1,1,4,4,4]) # ...               [0,3,0,0,3]

np.array([1.5, 2.5, 3.5]).astype('int') # [1,2,3]

np.unique([1,1,2,2,3,3]) # [1,2,3]
np.unique([[1,1],[2,3]]) # [1,2,3]
a = [ [1,0,0],
			[1,0,0],
			[2,3,4] ]
np.unique(a)         # [0,1,2,3,4]
np.unique(a, axis=0) # [ [1,0,0], [2,3,4] ]

np.sign([-2, 0, 2]) # [-1, 0, 1]
