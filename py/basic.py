3 is 3             # points to same obj: True
[3] is [3]         # ...: False
None is type(None) # ...: False (if var/prop contains NoneType, use `is` instead of `==`)
2 in [1,2,3] # containment: True
1 in {1,2}   # ...: true
1 in (1,2)   # ...: true
isinstance(3, type(3))     # instanceof: True
isinstance([3], type([3])) # ...: True