import datetime as dt
# https://docs.python.org/3/library/datetime.html

# date and time
d = dt.datetime(2021,1,1)
d.timestamp() # 1609446600.0
d.year, d.month, d.day, d.hour, d.minute, d.second # (2021, 1, 1, 0, 0, 0)

d = dt.datetime(2021,1,1, tzinfo=dt.timezone.utc)
d = dt.datetime(2021,1,1, tzinfo=dt.UTC) # v3.11+
d.timestamp() # 1609459200.0

# date or timestamp of now
dt.datetime.now()   # <datetime>
dt.datetime.today() # ...
dt.datetime.now() == dt.datetime.today() # True

dt.datetime.utcnow()                                  # v3.12 deprecated (naive)
dt.datetime.now(dt.timezone.utc).replace(tzinfo=None) # ... (naive in v3.12+)
dt.datetime.now(dt.timezone.utc)                      # aware
dt.datetime.now(dt.UTC)                               # ... v3.11+

dt.datetime.now().timestamp()   # timestamp (seconds)
dt.datetime.today().timestamp() # ...
dt.datetime.now().timestamp() == dt.datetime.today().timestamp() # True

# date only
d = dt.date.today()
d.year, d.month, d.day # (2021, 10, 26)
str(d)                 # '2021-10-26'

# date obj from timestamp
ts = dt.datetime(2021,1,1).timestamp()
d = dt.datetime.fromtimestamp(ts) # datetime(2021, 1, 1, 0, 0)

dt.datetime.fromtimestamp(1254130200)                                          # Timestamp('2009-09-28 13:00:00')
dt.datetime.utcfromtimestamp(1254130200)                                       # Timestamp('2009-09-28 09:30:00')  naive, v3.12 deprecated
dt.datetime.fromtimestamp(1254130200, tz=dt.timezone.utc).replace(tzinfo=None) # ... (naive in v3.12+)
dt.datetime.fromtimestamp(1254130200, tz=dt.timezone.utc)                      # Timestamp('2009-09-28 09:30:00+0000', tz='UTC')  aware
dt.datetime.fromtimestamp(1254130200, tz=dt.UTC)                               # ... v3.11+

# str
dt.datetime(2021,1,1).strftime('%Y %m %d')     # format:  '2021 01 01'
dt.datetime(2021,1,1).strftime('%Y%m%d')       # format:  '20210101'
dt.datetime.today().strftime('%Y%m')           # format:  '202202'
dt.datetime.strptime('2021 01 01', '%Y %m %d') # parse:   datetime(2021,1,1,0,0)
dt.datetime.strptime('20220101', '%Y%m%d')     # parse:   datetime(2022,1,1,0,0)
dt.datetime.strptime('2023-12-27 14:42:00', '%Y-%m-%d %H:%M:%S') # parse:  datetime(2023,12,27,14,42)
# https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes

# change date
dt.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)
d = dt.datetime(2021,10,1)
d - dt.timedelta(days=1)  # datetime(2021, 9, 30, 0, 0)
d = dt.date(2021,10,1)
d - dt.timedelta(days=30) # date(2021, 9, 1)

[dt.date(2021,1,1) - dt.timedelta(days=i) for i in range(1,4)]                 # [date(2021,9,30), date(2021,9,29), date(2021,9,28)]
[dt.date(2021,1,1) + dt.timedelta(days=i) for i in range(4)]                   # [date(2021,1,1), date(2021,1,2), date(2021,1,3), date(2021,1,4)]
[(dt.date(2021,1,1)-dt.timedelta(i)).strftime('%Y-%m-%d') for i in range(1,4)] # ['2021-09-30', '2021-09-29', '2021-09-28']

# set date
d = dt.datetime(2024,1,1)
d2 = d.replace(month=6, day=22)
str(d2) # '2024-06-22 00:00:00'

d = dt.datetime(2020,1,1,9,18)
d2 = d.replace(hour=11, minute=36)
str(d2) # '2020-01-01 11:36:00'
