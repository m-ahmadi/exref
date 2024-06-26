import jdatetime as jdt # pip install jdatetime
import datetime as dt

d = jdt.date(year, month, day)
d = jdt.datetime(year, month, day, hour, minute, second)
d.togregorian()
d.isleap()

jdt.date.fromgregorian(day=0, month=0, year=0)
jdt.date.fromgregorian(date=datetime.date)
jdt.date.togregorian(jdt.date | jdt.datetime)
jdt.date.today()

jdt.datetime.fromgregorian(day=0, month=0, year=0, hour=0, minute=0, second=0)
jdt.datetime.fromgregorian(datetime=datetime.datetime)
jdt.datetime.togregorian(jdt.date | jdt.datetime)
jdt.datetime.now()

jdt.timedelta(...dt.timedelta)

jdt.FA_LOCALE

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

fmt_date = '%a, %d %B %Y'
fmt_datetime = '%a, %d %B %Y %H:%M:%S'

# basic
d = jdt.date(1403,1,1)
d + jdt.timedelta(days=4) # jdt.date(1403, 1, 5)
d.strftime(fmt_date)      # 'Wed, 01 Farvardin 1403'
d.isleap                  # True
d.togregorian()           # dt.date(2024, 3, 20)

d = jdt.datetime(1403,1,1,17,30,10)
d.strftime(fmt_datetime)  # 'Wed, 01 Farvardin 1403 17:30:10'

jdt.date.today()   # jdt.date(1403, 12, 4)
jdt.datetime.now() # jdt.datetime(1403, 4, 6, 8, 37, 31, 855729)

# fa locale
locl = jdt.FA_LOCALE
jdt.date(1403,1,1, locale=locl).strftime(fmt_date)                  # 'چهارشنبه, 01 فروردین 1403'
jdt.datetime(1403,1,1,17,30,10, locale=locl).strftime(fmt_datetime) # 'چهارشنبه, 01 فروردین 1403 17:30:10'

# conversion
jdt.date.fromgregorian(day=1,month=1,year=2024)    # jdatetime.date(1402, 10, 11)
jdt.date.fromgregorian(date=dt.datetime(2024,1,1)) # ...
jdt.datetime.fromgregorian(day=1,month=1,year=2024,hour=14,minute=30) # jdatetime.datetime(1402, 10, 11, 14, 30)
jdt.datetime.fromgregorian(datetime=dt.datetime(2024,1,1,14,30))      # ...

jdt.date.togregorian(jdt.date(1403,4,6))               # dt.date(2024, 6, 26)
jdt.datetime.togregorian(jdt.datetime(1403,4,6,12,30)) # dt.datetime(2024, 6, 26, 12, 30)

# set locale globally - using the module
jdt.date.today().strftime(fmt_date) # 'Wed, 06 Tir 1403'
jdt.set_locale(jdt.FA_LOCALE)
jdt.date.today().strftime(fmt_date) # 'چهارشنبه, 06 تیر 1403'

# set locale globally - using `locale` module
import locale
jdt.datetime.now().strftime(fmt_datetime)      # 'Wed, 06 Tir 1403 04:54:50'
locale.setlocale(locale.LC_ALL, jdt.FA_LOCALE) # 'Persian_Iran.1256'
jdt.datetime.now().strftime(fmt_datetime)      # 'چهارشنبه, 06 تیر 1403 05:11:16'
