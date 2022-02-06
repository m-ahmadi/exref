# help
np.info(np.sum) # prints to stdout
# py -c "import numpy as np; np.info(np.sum)"

# 100 solutions: https://github.com/rougier/numpy-100/blob/master/100_Numpy_exercises_with_solutions.md

# math
np.multiply([2,2], [2,4]) # [4,8]
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

# as operand
a = np.array([1,2,3,4])
a*2    # element-wise product: [2,4,6,8]
	[i*2 for i in [1,2,3,4]] == list(a*2) # True
	list(map(lambda i: i*2, [1,2,3,4])) == list(a*2) # True
a + 2  # [3,4,5,6]
a - 2  # [-1,0,1,2]
a / 2  # [.5,1,1.5,2]
a // 2 # [0,1,1,2]
a ** 2 # [1,4,9,16]

# slice by another arr
a = np.array([10,20,30,40,50,60])
a[np.array([1,2,3,4])] # [20,30,40,50]

# creation
np.arange(2.7, 3.2, 0.1) # [2.7, 2.8, 2.9, 3. , 3.1, 3.2]
np.concatenate( ([1,2], [3,4]) ) # [1,2,3,4]

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
np.append([1,2], [ [3,4], [5,6] ])             # [1,2,3,4,5,6]
np.append([ [1,2], [3,4] ], [ [6,7] ], axis=0) # [ [1,2], [3,4], [5,6] ]
np.append([ [1,2], [3,4] ], [5,6], axis=0)     # err

# misc
a = np.array([ [1,2], [3,4], [5,6] ])
a.shape     # (3,2)
np.shape(a) # ...

# sol - % diff
a = [1,2,3,4,5]
np.diff(a) / a[1:]         # [.5, .33, .25, .2]
np.diff(a) / a[1:] * 100   # [50, 33.33, 25, 20]
b = np.array([ [1,2,3], [1,2,3] ])
np.diff(b) / b[:,1:] * 100 # [ [.5, .33], [.5, .33] ]

# random
np.random.random()       # 0.14
np.random.random(3)      # [0.08, 0.62, 0.74]

np.random.uniform()      # 0.78
np.random.uniform(2,4)   # 3.40
np.random.uniform(1,5,5) # [2.752647, 1.19705214, 3.33665323, 1.93819238, 3.36881953]

np.random.randint(5)     # 4
np.random.randint(15,20) # 17

np.random.rand()    # 0.04
np.random.rand(3,2) # [ [0.51, 0.58], [0.32, 0.68], [0.43, 0.05] ]

np.random.permutation(4)         # [3,1,0,2]
np.random.permutation([6,7,8,9]) # [7,9,6,8]

np.random.normal(0.5, .1, 3) # [0.72124197, 0.48887206, 0.51517659]

# round
np.round(np.random.uniform(1,5,5), 2) # [4.87, 3.47, 1.61, 4.99, 3.85]

# trim mean
def avgtrim(arr, percent):
	n = len(arr)
	k = int(round( n*(float(percent)/100)/2 ))
	return np.mean(arr[k+1:n-k])


# misc
np.min([1,2])  # 1
np.max([1,2])  # 2
np.amin([1,2]) # 1
np.amax([1,2]) # 2
np.argmax([1,2,3,4]) # index of max: 3
np.argmax([4,3,2,1]) # index of min: 3

np.bincount([1,1,1])       # count occurrence: [0,3]
np.bincount([1,1,1,4,4,4]) # ...               [0,3,0,0,3]

np.array([1.5, 2.5, 3.5]).astype('int') # [1,2,3]