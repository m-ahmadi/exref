const svg = document.querySelector('svg');

document.querySelector('svg > rect').setAttribute('stroke', 'blue')
svg.querySelector('rect').setAttribute('fill', 'red')

// create element (won't render if created with createElement)
var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
circle.setAttribute('r', 50)
svg.append(circle)

var path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
path.setAttribute('d', 'M 10,120 l600,50')
svg.append(path)

// zoom & pan
svg.setAttribute('viewBox', '100 100 200 200')

// dynamically created svg
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg.setAttribute('width', '400')
svg.setAttribute('height', '400')