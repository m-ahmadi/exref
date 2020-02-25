/*
	axis component renders human-readable reference marks for scales.
	axes are always rendered at the origin.
	to change the position of the axis, specify a transform attribute on the containing element.
*/
var scale = d3.scaleLinear()
	.domain([-1, 1])
	.range([0, 960]);
var axis = d3.axisLeft(scale);

d3.select('body').append('svg')
		.attr('width', 960)
		.attr('height', 30)
	.append('g')
		.attr('transform', 'translate(0,30)')
		.call(axis);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// how to render
/*
	1. scale
	2. axix from scale
	3. append elements
	4. calling axis
*/
// setup:
var x = d3.scaleTime().domain().range();
var y = d3.scaleLinear().domain().range();
var xAxis = d3.axisBottom().scale(x);
var yAxis = d3.axisLeft().scale(y);

var g = svg.append('g').attr('transform', 'translate(10, 30)');

// finally - method 1:
g.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.call(xAxis);
g.append('g')
	.call(yAxis);

// finally - method 2:
svg.selectAll('g.x.axis').call(xAxis);
svg.selectAll('g.y.axis').call(yAxis);