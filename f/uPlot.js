// https://cdn.jsdelivr.net/npm/uplot/
// https://cdn.jsdelivr.net/npm/uplot@latest/dist/uPlot.esm.js <script type=module>
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
		{
			show:     true,
			class:    '',
			scale:    '',
			auto:     true,
			sorted:   0 | 1 | -1,
			spanGaps: false,      // true: connect null data points
			pxAlign:  0 | false,
			label:    'Value',    // in-legend display
			value:    '' | (self, rawValue=0, seriesIdx=0, idx=0)=> '' | 0,
			values:   (self, seriesIdx=0, idx=0)=> {},
			paths:    (self, seriesIdx=0, idx0=0, idx1=0)=> {stroke,fill,clip} | null,
			points:   {show:true|(s,seriesIdx,idx0,dix1)=>false, size:0, space:size*2, width:0, stroke:, dash:↓.., cap:↓.., fill:↓..},
			width:    1,          // ctx.lineWidth (css pixels)
			stroke:   CanvasRenderingContext2D.strokeStyle=''    | (self, seriesIdx=0)=> CanvasRenderingContext2D.strokeStyle,
			fill:     CanvasRenderingContext2D.fillStyle='black' | (self, seriesIdx=0)=> CanvasRenderingContext2D.fillStyle,,
			fillTo:   Series.FillTo,
			dash:     [0,..],     // ctx.setLineDash()
			cap:      CanvasRenderingContext2D.lineCap,
			alpha:    0,
			idxs:     Series.MinMaxIdxs,
			min:      0,
			max:      0,
		},
		...
	],
	
	cursor: {
		show:         true,
		x:            false,
		y:            false,
		left:         0,
		top:          0,
		idx:          0,
		lock:         false,
		dataIdx:      (self, seriesIdx=0, closestIdx=0, xValue=0)=> 0,
		move:         (self, mouseLeft=0, mouseTop=0) => {left:0,top:0},
		points: {
			show:       false | (self, seriesIdx=0)=> HTMLElement,
			size:       0 | (self, seriesIdx=0)=> 0,
			width:      0 | (self, seriesIdx=0, size=0)=> 0,
			stroke:     CanvasRenderingContext2D.strokeStyle | (self, seriesIdx=0)=> CanvasRenderingContext2D.strokeStyle,
			fill:   	  CanvasRenderingContext2D.fillStyle   | (self, seriesIdx=0)=> CanvasRenderingContext2D.fillStyle,
		},
		bind: {
			mousedown:  (self, targ=HTMLElement, handler=e=>)=> ()=> | null,
			mouseup:    ...,
			click:      ...,
			dblclick:   ...,
			mouseover:  ...,
			mouseleave: ...,
			mouseenter: ...,
		},
		drag: {
			setScale:   false,
			x:          true,
			y:          true,
			dist:       0,
			uni:        0
		},
		sync: {
			key:        '',
			setSeries:  true,
			scales:     ['',''],
			match:      {},
			filters:    {pub: (type='', client, x, y, w, h, i)=>false, sub: (←...)=>false},
			values:     [0,0],
			
		},
		focus: {
			prox:       16,
		},
	},
	
	select: {
		show: false,
	},
	
	legend: {
		show: false,
	},
	
	scales: {
		x: {
			time: false,
		},
		y: {
			min:   0,
			max:   0,
			distr: 0, // log scale?
		},
		'': {
			auto: false,
			range: [0,0] | ()=>[0,0],
			from: '',
		}
	},
	
	axes: [
		{
			show:       true,
			label:     'Population',
			labelSize: 30,
			labelFont: 'bold 12px Arial',
			font:      '12px Arial',
			gap:       5,
			side:      1,
			size:      50,
			space:     15,
			stroke:    'red',
			class:     'css-class',
			grid: {
				show:    true,
				stroke:  '#eee',
				width:   2,
				dash:    [5,5],
			},
			ticks: {
				show:    true,
				stroke:  '#eee',
				width:   2,
				dash:    [5,5],
				size:    10,
			}
		}
	],
	
	plugins: [
		()=>,
		()=>,
		...
	]
};

const chart = new uPlot(opts, data, document.body);

chart.setData(newData=[])