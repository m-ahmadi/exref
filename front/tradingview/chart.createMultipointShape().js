createMultipointShape(points, options)

chart.createMultipointShape(
	[
		{
			time: 1564261116,                    // timestamp in seconds. only required field.
			price: 200,                          // place shape at any price level. (if not specified, then placement is based on `channel` value)
			channel: 'open'|'high'|'low'|'close' // where to place the shape on the bar. default: 'open'
		},
		{}, ...
	],
	{
		shape: 'arrow_up', // trend_line, pitchfork, fib_retracement
		text: '',
		lock: false,
		disableSelection: false,
		disableSave: false,
		disableUndo: false,
		overrides: {
			linestyle: 0 | 1 | 2 | 3 // 0 solid, 1 dotted, 2 dashed, 3 large dashed
			linewidth: 1 | 2 | 3 | 4
		},
		zOrder: 'top' | 'bottom',
		showInObjectsTree: true
	}
);

const points = [ {time: 1565654400}, {time: 1570838400} ];

chart.createMultipointShape(points, { shape: 'callout' })
chart.createMultipointShape(points, { shape: 'rectangle' })
chart.createMultipointShape(points, { shape: 'trend_line' })
chart.createMultipointShape(points, { shape: 'trend_line', overrides: {linecolor: 'red', linewidth: 2} })
chart.createMultipointShape(points, { shape: 'trend_line', overrides: {linecolor: 'blue', linewidth: 2, linestyle: 0} })
chart.createMultipointShape(points, { shape: 'extended', overrides: {linecolor: 'green', linewidth: 4, linestyle: 1} })

chart.createMultipointShape([ {time: bars[0].time, channel: 'low'}, {time: bars[3].time} ], { shape: 'trend_line' })
chart.createMultipointShape([ {time: bars[0].time, price: bars[3].high}, {time: bars[3].time, channel: 'high'} ], { shape: 'trend_line' })


const bars = [
  { time: 1328659200, open: 1050, high: 1200, low: 1000, close: 1100, volume: 24838750 },
  { time: 1329004800, open: 1150, high: 1300, low: 1000, close: 1180, volume: 75848282 },
  { time: 1329091200, open: 1200, high: 1400, low: 1100, close: 1250, volume: 23435322 },
  { time: 1329177600, open: 1200, high: 1290, low: 1000, close: 1050, volume: 12352753 }
];
