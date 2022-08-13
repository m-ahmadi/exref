d3.select(selector='body #id .class [attr=value] par>child ...') // prettymuch like jquery

d3.selectAll('p').style('color', 'blue')

d3.select('body').style('background-color', 'black')

var svg = d3.select('#box')

var svg = d3.select('body').append('svg')

var svg = d3.select('body').append('svg')
	.attr('width', 960)
	.attr('height', 500)
	.append('text')
	.attr('y', 10)
	.text('salam olaghe aziz')
	.style('color', 'red')
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// selection function
/*
when data is bound to a selection, each element in the data array is paired with the corresponding node in the selection.
(d, i)
d:  an item from data array bound to the element
i:  index of the element in the selection

data is specified as an array of values
each value is passed as the first argument (d) to selection functions
1st element in data array passed to 1st node in the selection (2nd element to 2nd node & so on)
*/

// randomly color paragraphs:
d3.selectAll('p').style('color', () => `hsl(${Math.random() * 360},100%,50%)`)

// shades of gray for even and odd nodes:
d3.selectAll('p').style('color', (d, i) => i % 2 ? '#fff' : '#eee')

// binding numbers array to paragraphs to set font sizes:
d3.selectAll('p')
  .data([4, 8, 15, 16, 23, 42])
    .style('font-size', d => d + 'px')

// enter and exit selections
// fewer nodes than data: (selection should correspond to data)
// instantiate extra nodes by appending to the enter selection
// 5 paragraphs, 6 data elements (adding 1 paragraph):
d3.select('body')
  .selectAll('p')
  .data([4, 8, 15, 16, 23, 42])
  .enter().append('p')
    .text(d => `I’m number ${d}!`);