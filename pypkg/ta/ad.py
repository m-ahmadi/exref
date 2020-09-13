import pandas as pd
import ta

h = [3,4,5,6,7,8,9,7,8]
l = [1,2,1,1,1,1,1,1,1]
c = [4,5,6,7,8,9,2,3,4]
v = [10,20,30,40,50,60,70,80,90]

high  = pd.Series(h)
low   = pd.Series(l)
close = pd.Series(c)
vol   = pd.Series(v)

res = ta.volume.acc_dist_index(high,low,close,vol)
print(res)
# 20.000000  60.000000  105.000000  161.000000  227.666667  304.809524  252.309524  225.642857  212.785714