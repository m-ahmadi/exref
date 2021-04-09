// https://cdn.jsdelivr.net/npm/echarts/
// https://cdn.jsdelivr.net/npm/echarts-gl/

var chart = echarts.init(document.getElementById('mydiv'));

var option = {
	title: {
		text: 'ECharts entry example'
	},
	tooltip: {},
	legend: {
		data:['Sales']
	},
	xAxis: {
		data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
	},
	yAxis: {},
	series: [{
		name: 'Sales',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20]
	}]
};

chart.setOption(option);