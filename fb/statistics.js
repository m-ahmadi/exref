// https://cdn.jsdelivr.net/npm/statistics.js/
var statistics = new Statistics(data=[], columns={}, settings={})
statistics.METHOD()

// example
var stats = new Statistics(
	[{id:1,age:33}, {id:2,age:42}, {id:3,age:27}],
	{id:'ordinal', age:'interval'}, {});
stats.arithmeticMean('age')    // 34
stats.standardDeviation('age') // 7.54983

var stats = new Statistics([
	{x:63,y:1.65}, {x:64,y:1.67}, {x:74,y:1.80}, {x:79,y:1.82}, {x:82,y:1.86},
	{x:66,y:1.70}, {x:91,y:1.83}, {x:72,y:1.76}, {x:85,y:1.89}, {x:68,y:1.68}
], {x:'metric', y:'metric'});
stats.correlationCoefficient('x', 'y') // {correlationCoefficient: 0.91, missings: 0}