# pip install numpy
import numpy as np

np.multiply([2,2], [2,4]) # [4,8]
np.ceil(2.9)              # 3
np.sum([1,2,3])           # 6
np.mean([2,3])            # 2.5
np.mean([[2,4], [3,5]])   # 3.5 (3.5 + 4.5/ 2)

# arr math
a = [1,2,3,4,5,6]
b = np.array(a)
list(map(lambda i: i*2, a)) == list(b*2) # True