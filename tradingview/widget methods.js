widget.onChartReady(function() {});

var chart = widget.chart() // returns a chart object that you can use to call chart methods

widget.showNoticeDialog({
	title: 'hello',
	body: 'hello world',
	callback: () =>{ console.log('dialog closed.') }
});

widget.showConfirmDialog({
	title: 'hello',
	body: 'hello world',
	callback: res =>{ console.log('user clicked: ', res ? 'yes' : 'no') }
});