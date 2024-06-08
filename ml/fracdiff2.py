from fracdiff2 import frac_diff_ffd # only has this one function
import numpy as np

frac_diff_ffd(x=[], d=None|0., thres=1e-5, disable_warning=False)
# https://github.com/philipperemy/fractional-differentiation-time-series/blob/master/fracdiff2/fracdiff.py#L89

x = [1,2,6,7]
frac_diff_ffd(x, d=1) # [0, 1, 4, 1]
frac_diff_ffd(x, d=2) # [0, 0, 3, -3]

x = np.random.uniform(size=[10])
d = frac_diff_ffd(x, d=0.5)
