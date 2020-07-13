/*
uPlot.css
uPlot.iife.js

cdn
https://cdn.jsdelivr.net/npm/uplot
https://cdn.jsdelivr.net/npm/uplot@latest/dist/uPlot.esm.js <script type=module>
*/

var chart = new uPlot(options={}, data=[], container=document.body);


const data = [
	[1546300800, 1546387200],		 // x-values (timestamps) must be: numbers & unique & in ascending order
	[				 35,				 71],		 // y-values (series 1)		must be: numbers | nulls (for missing data)
	[				 90,				 15],		 // y-values (series 2)		...
	// x y arrays must be of equal lengths >= 2
];

const opts = {
	*width:  600, // required in area, axes & ticks
	*height: 400, // ...
	
	title: '',
	id:    '',   // optional. attrs to set on chart's container <div>
	class: '',   // ...
	
	series: [   // series only rendered if specified here (only being in `data` is not enough)
		{ /*all props optional*/ }, {},
		{
			show:      true,      // initial toggled state
			spanGaps:  false,     // true: connect null data points
			
			// in-legend display
			label:     'Value',
			value:     (self, rawValue) => '$' + rawValue.toFixed(2),
			
			// serie style (stroke,width,fill,dash map directly to CanvasRenderingContext2D)
			stroke:   'black',    // .strokeStyle
			width:     1,         // .lineWidth (css pixels)
			fill:      'black',   // .fillStyle
			dash:      [],        // .setLineDash()
		},
	],
	
	axes: [
		{},
		{
			show:       true,
			label:     'Population',
			labelSize: 30,
			labelFont: 'bold 12px Arial',
			font:      '12px Arial',
			gap:       5,
			size:      50,
			stroke:    'red',
			grid: {
				show:    true,
				stroke:  '#eee',
				width:   2,
				dash:    [],
			},
			ticks: {
				show:    true,
				stroke:  '#eee',
				width:   2,
				dash:    [],
				size:    10,
			}
		}
	]
};

const chart = new uPlot(opts, data, document.body);