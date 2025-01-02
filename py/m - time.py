# https://docs.python.org/3/library/time.html
import time

time.sleep(secs)
timetuple = time.gmtime(secs)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# sleep
print(1)
time.sleep(1)
print(2)

# timestamp to timetuple
import datetime as dt
d = dt.datetime(2024,12,25, tzinfo=dt.UTC)
secs = d.timestamp()
timetuple = time.gmtime(secs)
timetuple == d.timetuple()    # False
timetuple == d.utctimetuple() # True
