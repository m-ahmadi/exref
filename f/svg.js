// include: svg.min.js
// cdn: https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.0.13/svg.min.js


SVG.on(document, 'DOMContentLoaded', function () {
  var draw = SVG().addTo('body').size(300, 300)
	var rect = draw.rect(100, 100).attr({ fill: '#f06' })
})