import datetime as dt

# date and time
d = dt.datetime(2021,1,1)
d.timestamp() # 1609446600.0
d.year, d.month, d.day, d.hour, d.minute, d.second # (2021, 1, 1, 0, 0, 0)

# date or timestamp of now
dt.datetime.now()   # <datetime>
dt.datetime.today() # ...
dt.datetime.now() == dt.datetime.today() # True

dt.datetime.now().timestamp()   # timestamp (seconds)
dt.datetime.today().timestamp() # ...
dt.datetime.now().timestamp() == dt.datetime.today().timestamp() # True

# date only
d = dt.date.today()
d.year, d.month, d.day # (2021, 10, 26)
str(d)                 # '2021-10-26'

# date obj from timestamp
ts = dt.datetime(2021,1,1).timestamp()
d = dt.datetime.fromtimestamp() # dt.datetime(2021, 1, 1, 0, 0)

# str
dt.datetime(2021,1,1).strftime('%Y %m %d')     # format:  '2021 01 01'
dt.datetime.today().strftime('%Y%m')           # format:  '202202'
dt.datetime.strptime('2021 01 01', '%Y %m %d') # parse:   dt.datetime(2021,1,1,0,0)
dt.datetime.strptime('20220101', '%Y%m%d')     # parse:   dt.datetime(2022,1,1,0,0)
# https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes

# change date
dt.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)
d = dt.datetime(2021,10,1)
d - dt.timedelta(days=1)  # datetime(2021, 9, 30, 0, 0)
d = dt.date(2021,10,1)
d - dt.timedelta(days=30) # date(2021, 9, 1)

[dt.date(2021,10,1) - dt.timedelta(days=i) for i in range(1,4)]                 # [date(2021,9,30), date(2021,9,29), date(2021,9,28)]
[(dt.date(2021,10,1)-dt.timedelta(i)).strftime('%Y-%m-%d') for i in range(1,4)] # ['2021-09-30', '2021-09-29', '2021-09-28']