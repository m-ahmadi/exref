var chart = widget.chart();

// a line with label:
chart.createOrderLine()
	.setText('Buy Line')
	.setLineLength(3)
	.setLineStyle(0)                 // 0: solid, 1: dotted, 2: dashed
	.setQuantity('221.235 USDT')
	.setPrice(1700);

chart.setVisibleRange({ from: 1328659200, to: 1570838400 }) // second timestamps
chart.getVisibleRange()      // {from: 1351486800, to: 1376366400}
chart.getVisiblePriceRange() // {from: 2567.615763546798, to: 4212.384236453202}

chart.removeAllShapes()
chart.removeEntity(entityId) // id returned when creating the shape

chart.onDataLoaded().subscribe(null, callback) // each time history bars are loaded
chart.dataReady( callback(interval) )

chart.getShapeById('elKGRt').getProperties()
chart.getShapeById('elKGRt').setProperties({text: 'new text'})