import datetime as dt

# date and time
d = dt.datetime(2021,1,1)
d.timestamp() # 1609446600.0
d.year, d.month, d.day, d.hour, d.minute, d.second # (2021, 1, 1, 0, 0, 0)

# timestamp of now (seconds)
dt.datetime.today().timestamp()

# date only
d = dt.date.today()
d.year, d.month, d.day # (2021, 10, 26)
str(d)                 # '2021-10-26'

# date obj from timestamp
ts = dt.datetime(2021,1,1).timestamp()
d = dt.datetime.fromtimestamp() # dt.datetime(2021, 1, 1, 0, 0)

# str
dt.datetime(2021,1,1).strftime('%Y %m %d')     # format:  '2021 01 01'
dt.datetime.strptime('2021 01 01', '%Y %m %d') # parse:   dt.datetime(2021,1,1,0,0)
# https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes