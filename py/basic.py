3 is 3             # points to same obj: True
[3] is [3]         # ...: False
None is type(None) # ...: False (if var/prop contains NoneType, use `is` instead of `==`)
2 in [1,2,3] # containment: True    O(N)
1 in {1,2}   # ...: true            O(1)
1 in (1,2)   # ...: true            O(N)
isinstance(3, type(3))     # instanceof: True
isinstance([3], type([3])) # ...: True

# semicolon only separates (for multiple statements on single line)
2+2; 3+3;
# 4
# 6
a=2; a*2      # 4
a=4; b=5; a*b # 20