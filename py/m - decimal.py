from decimal import Decimal
# https://docs.python.org/3/library/decimal.html

Decimal(value='0'|0|()|0.|Decimal, context=None)
# https://docs.python.org/3/library/decimal.html#decimal.Decimal

Decimal(10)     # '10'
Decimal('3.14') # '3.14'
Decimal(3.14)   # 3.140000000000000124344978758017532527446746826171875'

Decimal((0, (3,1,4), -2)) # '3.14'
Decimal((0, (3,1,4), -3)) # '0.314'
Decimal((1, (3,1,4), -3)) # '-0.314'

Decimal(str(2.0 ** 0.5))     # '1.4142135623730951'
Decimal(1) / Decimal(7)      # '0.1428571428571428571428571429'
Decimal(2) ** Decimal('0.5') # '1.414213562373095048801688724'

Decimal('NaN')       # Decimal('NaN')
Decimal('-Infinity') # Decimal('-Infinity')
