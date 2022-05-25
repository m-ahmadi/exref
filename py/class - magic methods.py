# https://docs.python.org/3/reference/datamodel.html

# construct
__new__
__init__
__del__
__cmp__

# comparison
__eq__
__ne__
__lt__
__gt__
__le__
__ge__

# opr unary
__pos__
__neg__
__abs__
__invert__
__round__
__floor__
__ceil__
__trunc__

# opr arithmetic
__add__
__sub__
__mul__
__floordiv__
__div__
__truediv__
__mod__
__divmod__
__pow__
__lshift__
__rshift__
__and__
__or__
__xor__

# opr arithmetic reflected
__radd__
__rsub__
__rmul__
__rfloordiv__
__rdiv__
__rtruediv__
__rmod__
__rdivmod__
__rpow__
__rlshift__
__rrshift__
__rand__
__ror__
__rxor__

# opr assignment augmented 
__iadd__
__isub__
__imul__
__ifloordiv__
__idiv__
__itruediv__
__imod__
__ipow__
__ilshift__
__irshift__
__iand__
__ior__
__ixor__

# type conversion
__int__
__long__
__float__
__complex__
__oct__
__hex__
__index__
__trunc__
__coerce__

# representation
__str__
__repr__
__unicode__
__format__
__hash__
__nonzero__
__dir__
__sizeof__

# attr access
__getattr__
__setattr__
__delattr__
__getattribute__

# container
__len__
__getitem__
__setitem__
__delitem__
__iter__
__reversed__
__contains__
__missing__

# reflection
__instancecheck__
__subclasscheck__

# callable object
__call__

# context manager
__enter__
__exit__

# abstract base class (descriptor objects)
__get__
__set__
__delete__

# pickle
__getinitargs__
__getnewargs__
__getstate__
__setstate__
__reduce__
__reduce_ex__