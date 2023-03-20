from deepdiff import DeepDiff # pip install deepdiff

a = {'a':1, 'b':2}

b = {'a':1, 'b':2}
c = {'a':1, 'b':3}
d = {'a':1, 'b':2, 'c': 3}
e = {'a':1, 'c':3}

DeepDiff(a, b) # {}
DeepDiff(a, c) # {'values_changed': {"root['b']": {'new_value': 3, 'old_value': 2}}}
DeepDiff(a, d) # {'dictionary_item_added': [root['c']]}
DeepDiff(a, e) # {'dictionary_item_added': [root['c']], 'dictionary_item_removed': [root['b']]}
