/*
a scale is an abstraction for mapping a dimension of abstract data to a visual representation.
(map a measurement in meters to a position in pixels for dots in a scatterplot)
	
scales:
	are used for position-encoding quantitative data
	can represent diverging colors, stroke widths, symbol size, etc
	work with any type of data: named categorical, discrete

types:
	continuous
	linear
	power
	log
	identity
	time
	sequential color
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// continuous scale
/*
maps a continuous quantitative input domain to a continuous output range.
if the range is numeric, the mapping may be inverted.
a value from the domain, returns the corresponding value from the range.
*/
// apply a position encoding:
var x = d3.scaleLinear()
	.domain([10, 130])
	.range([0, 960]);
x(10);  // 0
x(130); // 960

// apply a color encoding:
var color = d3.scaleLinear()
	.domain([10, 100])
	.range(['brown', 'steelblue']);
color(10);  // 'brown'
color(100); // 'steelblue'
color(50);  // 'rgb(123, 81, 103)'

// shorthand:
var x = d3.scaleLinear([10, 130], [0, 960]);
var color = d3.scaleLinear([10, 100], ['brown', 'steelblue']);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
time scales
a variant of linear scales
domain values are coerced to dates rather than numbers
.invert() returns a date
*/
var x = d3.scaleTime()
    .domain([new Date(2000, 0, 1), new Date(2000, 0, 2)])
    .range([0, 960]);

x(new Date(2000, 0, 1,  5)); // 200
x(new Date(2000, 0, 1, 16)); // 640
x.invert(200); // Sat Jan 01 2000 05:00:00 GMT-0800 (PST)
x.invert(640); // Sat Jan 01 2000 16:00:00 GMT-0800 (PST)

// another example:
var x = d3.scaleTime()
    .domain([new Date(2010, 7, 1), new Date(2012, 7, 1)])
    .range([0, width]);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ticks and tickFormat
// returns approximately count representative values from the scale's domain.

var x = d3.scaleLinear()
	.domain([-1, 1])
	.range([0, 960]);

x(-1) // 0
x(0)  // 480
x(1)  // 960

var ticks = x.ticks(5); // [-1, -0.5, -0, 0.5, 1]
var tickFormat = x.tickFormat(5, '+%');

ticks.map(tickFormat); // ['-100%', '-50%', '+0%', '+50%', '+100%']
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@