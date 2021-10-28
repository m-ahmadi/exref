from timeit import default_timer as timer
t1 = timer()
t2 = timer()
print('took', round((t2-t1)/60, 2), 'min')

# other ways
import time
time.time()
time.process_time()
time.perf_counter()

import datetime
datetime.datetime.today().timestamp()
str( datetime.timedelta(t2-t1) ) # '4 days, 23:59:51.956160'