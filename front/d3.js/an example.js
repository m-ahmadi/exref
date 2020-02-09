var svg = d3.select('svg');
var margin = { top: 20, right: 0, bottom: 20, left: 0 };
var width = +svg.attr('width') - margin.left - margin.right;
var height = +svg.attr('height') - margin.top - margin.bottom;
var g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

var formatNumber = d3.format('.1f');

var x = d3.scaleTime()
	.domain([new Date(2010, 7, 1), new Date(2012, 7, 1)])
	.range([0, width]);

var y = d3.scaleLinear()
	.domain([0, 2e6])
	.range([height, 0]);

var xAxis = d3.axisBottom(x).ticks(d3.timeYear);

var yAxis = d3.axisRight(y)
	.tickSize(width)
	.tickFormat(function (d) {
		var s = formatNumber(d / 1e6);
		return this.parentNode.nextSibling
			? '\xa0' + s
			: '$' + s + ' million';
	});

g.append('g')
	.attr('transform', `translate(0,${height})`)
	.call(customXAxis);

g.append('g')
	.call(customYAxis);

function customXAxis(g) {
	g.call(xAxis);
	g.select('.domain').remove();
}

function customYAxis(g) {
	g.call(yAxis);
	g.select('.domain').remove();
	g.selectAll('.tick:not(:first-of-type) line').attr('stroke', '#777').attr('stroke-dasharray', '2,2');
	g.selectAll('.tick text').attr('x', 4).attr('dy', -4);
}