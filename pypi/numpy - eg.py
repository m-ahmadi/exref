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
np.min([1,2])  # 1
np.max([1,2])  # 2
np.amin([1,2]) # 1
np.amax([1,2]) # 2

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

# creation
np.arange(2.7, 3.2, 0.1) # [2.7, 2.8, 2.9, 3. , 3.1, 3.2]
np.concatenate( ([1,2], [3,4]) ) # [1,2,3,4]

# map
a = np.array([1,2,3,4,5])
np.where(a<4, a+10, a*2) # [11,12,13,8,10]

a = np.array([1,2,3,4])
b = np.array([0,0,0,0])
np.where(a % 2 == 0, a, b) # [0,2,0,4]

# filter
a = np.arange(10)
a[a%2==0] # [0,2,4,6,8]
a[a%2==1] # [1,3,5,7,9]
a = np.array([ [1,2,3,4], [5,6,7,8], [9,10,11,12] ])
b = np.array([0,1,0])
a[:, :2][b == 0] # [ [1,2], [9,10] ]
a[:, :2][b == 1] # [ [5,6] ]

# 2d arr slicing
a = np.array([ [1,2,3,4], [5,6,7,8], [9,10,11,12] ])
a[:, :2] # [ [1,2], [5,6], [9,10] ]
a[0, :2] # [1,2]
a[1, :2] # [5,6]
a[:, 2:] # [ [3,4], [7,8], [11,12] ]

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
np.random.uniform()      # 0.78
np.random.uniform(2,4)   # 3.40
np.random.uniform(1,5,5) # [2.752647, 1.19705214, 3.33665323, 1.93819238, 3.36881953]

np.random.randint(5)     # 4
np.random.randint(15,20) # 17

np.random.rand()    # 0.04
np.random.rand(3,2) # [ [0.51, 0.58], [0.32, 0.68], [0.43, 0.05] ]

# round
np.round(np.random.uniform(1,5,5), 2) # [4.87, 3.47, 1.61, 4.99, 3.85]

# trim mean
def avgtrim(arr, percent):
	n = len(arr)
	k = int(round( n*(float(percent)/100)/2 ))
	return np.mean(arr[k+1:n-k])