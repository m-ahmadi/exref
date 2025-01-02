import calendar as cal
# https://docs.python.org/3/library/calendar.html

timestamp = cal.timegm(timetuple)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# baisc
print(cal.month(2024,11)) | cal.prmonth(2024, 1) '''
   November 2024
Mo Tu We Th Fr Sa Su
             1  2  3
 4  5  6  7  8  9 10
11 12 13 14 15 16 17
18 19 20 21 22 23 24
25 26 27 28 29 30 '''

# some method
text_calendar = cal.TextCalendar()
[i for i in text_calendar.iterweekdays()] # [0,1,2,3,4,5,6]

# timetuple to timestamp
import datetime as dt
d = dt.datetime(2024,11,5, tzinfo=dt.UTC)
timetuple = d.utctimetuple()
timestamp = cal.timegm(timetuple)
timestamp == d.timestamp() # True

d = dt.datetime(2024,11,5)
timetuple = d.timetuple()
timestamp = cal.timegm(timetuple)
timestamp == d.timestamp() # False
