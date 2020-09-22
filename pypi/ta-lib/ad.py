import numpy as np
from talib._ta_lib import *

h = [3,4,5,6,7,8,9,7,8]
l = [1,2,1,1,1,1,1,1,1]
c = [4,5,6,7,8,9,2,3,4]
v = [10,20,30,40,50,60,70,80,90]

high  = np.array(h, 'double')
low   = np.array(l, 'double')
close = np.array(c, 'double')
vol   = np.array(v, 'double')

res =  AD(high, low, close, vol)
print(res)
# [ 20.  60.  105.  161.  227.66666667  304.80952381  252.30952381  225.64285714  212.78571429]