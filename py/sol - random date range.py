import datetime as dt
from random import uniform

# generate random dates with random minute|second intervals between them
# extra1: set time of starting date to 09:00
# extra2: once reached certain hour of day, move to next day and set time randomly between 09:00 and 12:00
def gen_sequential_dates_With_random_intervals(start_date, n=0, delta_types=['minutes','seconds'], increase_bounds=[10,500]):
	if not start_date: raise TypeError('Must provide `start_date`.')
	d = start_date
	d = d.replace(hour=9) # extra1
	max_idx = len(delta_types) - 1
	rand = lambda min, max: round(uniform(min, max))
	
	dates = []
	for _ in range(n):
		delta_type = delta_types[rand(0, max_idx)]
		increase = rand(*increase_bounds)
		args = {delta_type: increase}
		d += dt.timedelta(**args)
		if d.hour > 16: # extra2
			d += dt.timedelta(days=1)
			d = d.replace(hour=rand(9,12))
		date = dt.datetime.fromtimestamp(d.timestamp())
		dates.append(date)
	return dates

a = gen_sequential_dates_With_random_intervals(dt.datetime(2020,1,1), 10)
print([str(i) for i in a])
[
'2020-01-01 12:08:00',
'2020-01-02 10:45:00',
'2020-01-02 15:30:00',
'2020-01-03 11:12:00',
'2020-01-03 11:19:22',
'2020-01-03 12:48:22',
'2020-01-04 10:42:22',
'2020-01-04 10:42:34',
'2020-01-04 13:53:34',
'2020-01-05 10:20:34'
]
