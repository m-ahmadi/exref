createShape(point, options)

chart.createShape(
	{
		time: 1564261116,                    // timestamp in seconds. only required field.
		price: 200,                          // place shape at any price level. (if not specified, then placement is based on `channel` value)
		channel: 'open'|'high'|'low'|'close' // where to place the shape on the bar. default: 'open'
	},
	{
		shape: 'arrow_up'|'arrow_down'|'flag'|'vertical_line'|'horizontal_line', // only possible values (calls createMultipointShape() in case of any other shapes)
		text: '',
		lock: false,
		disableSelection: false,
		disableSave: false,
		disableUndo: false,
		overrides: {},
		zOrder: 'top' | 'bottom',
		showInObjectsTree: true
	}
);

chart.createShape({ time: 1570838400 }, { shape: 'arrow_up' })
chart.createShape({ time: 1570838400 }, { shape: 'arrow_down' })
chart.createShape({ time: 1570838400 }, { shape: 'horizontal_line' })
chart.createShape({ time: 1570838400 }, { shape: 'vertical_line' })
chart.createShape({ time: 1570838400 }, { shape: 'cross_line' })
chart.createShape({ time: 1570838400 }, { shape: 'icon', overrides: { icon: 0xf062, color: 'red' } })

chart.getShapeById( chart.createShape({time: 1570838400}, {shape: 'text'}) ).setProperties({text:'new text'})