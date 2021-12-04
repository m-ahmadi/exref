1+2*3/4 # arithmetic: 2.5
9 % 2   # remainder: 1
4 ** 2  # squared: 16
4 ** 3  # cubed: 64

round(12.3456, 2) # 12.35

import math
float('inf')  == math.inf  # True
float('-inf') == -math.inf # True

# check for whole number
2.1 % 1 == 0 # False
2.0 % 1 == 0 # Tru

(2.2).is_integer() # False
(2.0).is_integer() # True

2.3 == int(2.3) # False
2.0 == int(2.0) # True