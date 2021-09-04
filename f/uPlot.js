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
			spanGaps: false,   // true: connect null data points
			pxAlign:  0 | false,
			label:    'Value', // in-legend display
			value:    '' | (u, rawValue=0, seriesIdx=0, idx=0)=> '' | 0,
			values:   (u, seriesIdx=0, idx=0)=> {},
			paths:    (u, seriesIdx=0, idx0=0, idx1=0)=> {stroke,fill,clip} | null,
			points:   {show:true|(u,seriesIdx,idx0,idx1)=>false, size:0, space:size*2, width:0, stroke:↓.., dash:↓.., cap:↓.., fill:↓..},
			width:    1,       // ctx.lineWidth (css pixels)
			stroke:   CanvasRenderingContext2D.strokeStyle=''    | (u, seriesIdx=0)=> CanvasRenderingContext2D.strokeStyle,
			fill:     CanvasRenderingContext2D.fillStyle='black' | (u, seriesIdx=0)=> CanvasRenderingContext2D.fillStyle,,
			fillTo:   0 | (u, seriesIdx=0, dataMin=0, dataMax=0)=> 0,
			dash:     [0,..],  // ctx.setLineDash()
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
		dataIdx:      (u, seriesIdx=0, closestIdx=0, xValue=0)=> 0,
		move:         (u, mouseLeft=0, mouseTop=0) => {left:0,top:0},
		points: {
			show:       false | (u, seriesIdx=0)=> HTMLElement,
			size:       0 | (u, seriesIdx=0)=> 0,
			width:      0 | (u, seriesIdx=0, size=0)=> 0,
			stroke:     CanvasRenderingContext2D.strokeStyle | (u, seriesIdx=0)=> CanvasRenderingContext2D.strokeStyle,
			fill:   	  CanvasRenderingContext2D.fillStyle   | (u, seriesIdx=0)=> CanvasRenderingContext2D.fillStyle,
		},
		bind: {
			mousedown:  (u, targ=HTMLElement, handler=e=>)=> ()=> | null,
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
		show: true,
	},
	
	legend: {
		show:    true,
		live:    true,
		isolate: false,
		width:   0 | (u, seriesIdx=0)=> 0;,
		stroke:  '' | (u, seriesIdx=0)=> '',
		dash:    ...↑,
		fill:    ...↑,
		idx:     0,
		values:  [ {'': ''|0}, ...],
	},
	
	scales: {
		'x|y': {
			time:  false,
			auto:  true | (u, resetScales=true)=>true,
			range: [0,0] | (u, initMin=0, initMax=0, scaleKey='')=>[0,0] | { min:{pad:0.1,soft:0,mode:3,hard:0}, max:{←...} },
			from:  '',
			distr: 1|2|3|4, // linear|ordinal|logarithmic|arcsing
			log:   10|2,
			clamp: 0 | (u, val=0, scaleMin=0, scaleMax=0, scaleKey='')=>0,
			asinh: 1,
			min:   0,
			max:   0,
			dir:   1|-1 ,
			ori:   0|1,
		},
		'': {...}
	},
	
	axes: [
		{
			show:      true,
			scale:     '',
			side:      0|1|2|3, // top|right|bottom|left
			size:      0 | (u, values=['',..], axisIdx=0, cycleNum=0)=>0,
			gap:       0, // css pixels
			font:      CanvasRenderingContext2D.font,
			stroke:    CanvasRenderingContext2D.strokeStyle | (u, axisIdx=0)=>CanvasRenderingContext2D.strokeStyle,
			label:     '',
			labelSize: 0,
			labelFont: CanvasRenderingContext2D.font,
			space:     0 | (u, axisIdx=0, scaleMin=0, scaleMax=0, plotDim=0)=> 0,
			incrs:     [0,..] | (u, axisIdx=0, scaleMin=0, scaleMax=0, fullDim=0, minSpace=0)=> [0,..],
			splits:    [0,..] | (u, axisIdx=0, scaleMin=0, scaleMax=0, foundIncr=0, foundSpace=0)=> [0,..],
			filter:    (u, splits=[0,..], axisIdx=0, foundSpace=0, foundIncr=0)=> [0|null,..],
			values:    [''|0|null,..]    |    (u, splits=[0,..], axisIdx=0, foundSpace=0, foundIncr=0)=> [''|0|null,..]    |    ''    |    [[''|0|null,],...],
			rotate:    0 | (u, values=[''|0,..], axisIdx=0, foundSpace=0)=> 0,
			align:     1|2, // left|right
			grid: {
				show:    true,
				filter:  ...↑,
				stroke:  ...↑,
				width:   0,
				dash:    [0,..],
				cap:     CanvasRenderingContext2D.lineCap,
			}
			ticks:     {↑...grid, size:0},
		},
		...
	],
	
	plugins: [
		()=>{},
		()=>{},
		...
	],
	
	hooks: {
		draw: (u)=>;
		...
	}
};

const chart = new uPlot(opts, data, document.body);

chart.setData(newData=[])