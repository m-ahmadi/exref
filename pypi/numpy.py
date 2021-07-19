# pip install numpy
import numpy as np

np.Inf | Infinity | PINF | infty
np.NAN
np.pi

# math
np.multiply([2,2], [2,4]) # [4,8]
np.ceil(2.9)              # 3
np.sum([1,2,3])           # 6
np.mean([2,3])            # 2.5
np.mean([[2,4], [3,5]])   # 3.5 (3.5 + 4.5/ 2)
np.average()
np.std()
np.var()
np.matmul(a,b)
np.cov()
	np.cov([ [1,2,3,4], [2,3,2,1] ])[0][1]
np.percentile()
np.quantile()
np.amin()
np.amax()

np.concatenate( ([1,2], [3,4]) ) # [1,2,3,4]
np.split(ary, indices_or_sections, axis=0)
np.split_array(↑..)

np.random.uniform(?low=0.0, ?high=1.0, ?size=None|int|(int..))
numpy.round_(a=[], ?decimals=0, ?out=None)

# as operand
a = np.array([1,2,3,4])
a*2 # element-wise product: [2,4,6,8]
	list(map(lambda i: i*2, [1,2,3,4])) == list(a*2) # True
a + 2  # [3,4,5,6]
a - 2  # [-1,0,1,2]
a / 2  # [.5,1,1.5,2]
a // 2 # [0,1,1,2]
a ** 2 # [1,4,9,16]

# creation
np.arange(?start, stop, ?step, ..)
np.arange(2.7, 3.2, 0.1) # [2.7, 2.8, 2.9, 3. , 3.1, 3.2]
np.zeros(shape=int|(int..), dtype=float, ..)
np.ones(↑..)

# map
a = np.array([1,2,3,4,5])
np.where(a<4, a+10, a*2) # [11,12,13,8,10]

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

# misc
a = np.array([ [1,2], [3,4], [5,6] ])
a.shape     # (3,2)
np.shape(a) # ...

# sol - % diff
a = [1,2,3,4,5]
np.diff(a) / a[1:]       # [.5, .33, .25, .2]
np.diff(a) / a[1:] * 100 # [50, 33.33, 25, 20]
b = np.array([ [1,2,3], [1,2,3] ])
np.diff(b) / b[:,1:] * 100 # [ [.5, .33], [.5, .33] ]

# random
np.random.uniform()      # 0.78
np.random.uniform(2,4)   # 3.40
np.random.uniform(1,5,5) # [2.752647, 1.19705214, 3.33665323, 1.93819238, 3.36881953]
np.round(np.random.uniform(1,5,5), 2) # [4.87, 3.47, 1.61, 4.99, 3.85]