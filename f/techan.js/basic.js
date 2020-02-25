var width = 900;
var height = 600;
// construct a domain with financetime scale
var x = techan.scale.financetime().range([0, width])
var y = d3.scale.linear().range([height, 0]);
var candlestick = techan.plot.candlestick().xScale(x).yScale(y);