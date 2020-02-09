date.getDay();	// week day  (0: Sunday, 1: Monday, 2: Tuesday)
date.getDate(); // month day

var d = new Date(),
// get weekDay
weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
n = weekday[d.getDay()];
// get monthName
month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
n = month[d.getMonth()];