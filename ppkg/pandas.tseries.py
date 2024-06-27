import pandas as pd
import datetime as dt

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# CustomBusinessDay
from pandas.tseries.offsets import CustomBusinessDay

CustomBusinessDay(n=1, normalize=False, weekmask='Mon Tue Wed Thu Fri', holidays=[], calender=np.busdaycalender, offset=dt.timedelta(0))
# https://pandas.pydata.org/docs/reference/api/pandas.tseries.offsets.CustomBusinessDay.html

# example
ts = pd.Timestamp(2022, 8, 5)
ts + pd.offsets.CustomBusinessDay() # Timestamp('2022-08-08 16:00:00')

freq = CustomBusinessDay(weekmask='Mon Wed Fri')
pd.date_range(dt.date(2022,12,10), dt.date(2022,12,17), freq=freq).strftime('%Y/%m/%d') # ['2022/12/12', '2022/12/14', '2022/12/16']

d1, d2 = dt.date(2024,1,1), dt.date(2024,7,1)
idx = pd.date_range(d1, d2)
df = pd.DataFrame([i.day for i in idx], index=idx)
freq = CustomBusinessDay(weekmask='Sat Sun Mon Tue Wed')
df2 = df.asfreq(freq)
idx2 = pd.date_range(d1, d2, freq=freq)
df2.index.equals(idx2) # True
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@