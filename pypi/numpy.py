# pip install numpy
import numpy as np

np.Inf | Infinity | PINF | infty
np.NAN
np.pi

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
np.percentile()
np.quantile()
np.amin()
np.amax()

# manipulate
np.where()
a = np.array([1,2,3,4,5])
np.where(a<4, a+10, a*2) # [11,12,13,8,10]

# % diff
a = np.array([1,2,3,4,5])
b = np.array([ [1,2,3], [1,2,3] ])
np.diff(a) / a[1:]   # [0.5, 0.33, 0.25, 0.2]
np.diff(b) / b[:,1:] # [ [0.5, 0.33, 0.25], [0.5, 0.33, 0.25] ]

# arr element-wise product
a = [1,2,3,4,5,6]
b = np.array(a)
list(map(lambda i: i*2, a)) == list(b*2) # True

a = np.array([ [1,2], [3,4], [5,6] ])
a.shape     # (3,2)
np.shape(a) # ...

# covariance
x=[1,2,3,4]
y=[2,3,2,1]
print(np.cov([x,y])[0][1])

# 2d arr slicing
a = np.array([ [1,2,3,4], [5,6,7,8], [9,10,11,12] ])
a[:, :2] # [ [1,2], [5,6], [9,10] ]
a[0, :2] # [1,2]
a[1, :2] # [5,6]
a[:, 2:] # [ [3,4], [7,8], [11,12] ]

# arr filtering
b = np.array([0,1,0])
a[:, :2][b == 0] # [ [1,2], [9,10] ]
a[:, :2][b == 1] # [ [5,6] ]

# range creation
np.arange(2.7, 3.2, 0.1) # [2.7, 2.8, 2.9, 3. , 3.1, 3.2]