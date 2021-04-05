const { plot, stack, clear } = require('nodeplotlib');

plot([ {x:[], y:[], type:'line|bar|scatter|pie|scatter3d'} ])


plot([ {x:[1,2,3]} ])

plot([ {x:[1,2,3], type:'bar'} ])
plot([ {y:[1,2,3], type:'bar'} ])

var trace1 = {x:[1,2], y:[1,2], type:'scatter'}
var trace2 = {x:[3,4], y:[9,16], type:'scatter'}
plot([trace1, trace2])

var data = [ {x:[1,3,4,6,7], y:[2,4,6,8,9], type:'scatter'} ]
stack(data)
stack(data)
stack(data)
plot()

// https://plotly.com/javascript/