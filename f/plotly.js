// https://cdn.jsdelivr.net/npm/plotly.js/

var plotly = Plotly.newPlot(graphDiv='',
	data=[
		{
			x: [4000, 5000, 6000],
			y: [7000, 8000, 9000],
			xaxis: 'x4',
			yaxis: 'y4',
			type: 'scatter'
		},
	],
	layout={
		title: '' | {
			text: '',
			font: {family:'',size:1,color:''}
		},
		xref:'container|paper',
		yref:'container|paper',
		x:0.5,
		y:'auto'|0,
		xanchor:'auto|left|center|right',
		yanchor:'auto|top|middle|bottom',
		
		showlegend:true,
		...
		grid: {
			rows: 2,
			columns: 2,
			subplots:[['xy','x2y'], ['xy3','x4y4']],
			roworder:'bottom to top'
		}
	},
	config={
		
	}
);