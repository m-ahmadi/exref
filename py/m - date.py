import datetime as dt

# date and time
d = dt.datetime(2021,1,1)
d.timestamp() # 1609446600.0
d.year, d.month, d.day, d.hour, d.minute, d.second # (2021, 1, 1, 0, 0, 0)

# timestamp of now (seconds)
dt.datetime.today().timestamp()

# measure time
t1 = dt.datetime.today().timestamp()
t2 = dt.datetime.today().timestamp()
print('took', round((t2-t1)/60, 2), 'min')

# date only
d = dt.date.today()
d.year, d.month, d.day # (2021, 10, 26)
str(d)                 # '2021-10-26'