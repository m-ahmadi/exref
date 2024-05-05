import decimal
# https://docs.python.org/3/library/decimal.html

from decimal import Decimal
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

# rounding
# https://docs.python.org/3/library/decimal.html#rounding-modes
rm = decimal.ROUND_HALF_EVEN
Decimal('7.325').quantize(Decimal('0.01'), rounding=rm) # '7.32'
Decimal('7.325').quantize(Decimal(10)**-2, rounding=rm) # ...

Decimal(10) ** -0 # Decimal('1')
Decimal(10) ** -2 # Decimal('0.01')

# set defaults - decimal places (on the fly)
from decimal import setcontext, Context
Decimal('0.123456789123456789')*1 # '0.123456789123456789'
setcontext(Context(prec=4))
Decimal('0.123456789123456789')*1 # '0.1235'

# set defaults - application-wide (for all threads)
from decimal import setcontext, DefaultContext
DefaultContext.prec = 4
DefaultContext.rounding = decimal.ROUND_HALF_EVEN
setcontext(DefaultContext)
Decimal('0.123456789123456789')*1 # # '0.1235'
