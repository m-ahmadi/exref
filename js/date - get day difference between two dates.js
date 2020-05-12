var date1 = +new Date(2020,2,27);
var date2 = +new Date(2020,3,27);

var diffTime = Math.abs(date2 - date1);
var msPerDay = (1000 * 60 * 60 * 24);
var diffDays = Math.ceil(diffTime / msPerDay);

diffTime // 2678400000 milliseconds
diffDays // 31 days