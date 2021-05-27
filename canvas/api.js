HTMLCanvasElement extends HTMLElement
HTMLCanvasElement.height
HTMLCanvasElement.width
HTMLCanvasElement.getContext(contextType='2d|webgl|webgl2|bitmaprenderer', contextAttributes={alpha: true, desynchronized: false})
HTMLCanvasElement.toDataURL()
HTMLCanvasElement.toBlob()

new Path2D(?path|?d='')
Path2D.addPath()
Path2D.closePath()
Path2D.moveTo()
Path2D.lineTo()
Path2D.bezierCurveTo()
Path2D.quadraticCurveTo()
Path2D.arc()
Path2D.arcTo()
Path2D.ellipse()
Path2D.rect()

CanvasRenderingContext2D

// rect
.clearRect(x, y, width, height)
.fillRect(...)
.strokeRect(...)

// text
.fillText(text, x, y ,?maxWidth)
.strokeText(...)
.measureText(text)

// line style
.lineWidth = 1.0
.lineCap   = 'butt'|'round'|'square'
.lineJoin  = 'bevel'|'round'|'miter'
.miterLimit
.lineDashOffset
.getLineDash()
.setLineDash(segments)

// text style
.font         = '10px sans-serif'
.textAlign    = 'start'|'end'|'left'|'right'|'center'
.textBaseline = 'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'
.direction    = 'inherit'|'ltr'|'rtl'

// fill & stroke style
.fillStyle    = '#000' color|gradient|pattern
.strokeStyle  = '#000' color|gradient|pattern

// gradient & pattern
.createLinearGradient(x0, y0, x1, y1)
.createRadialGradient(x0, y0, r0, x1, y1, r1)
.createPattern(image, repetition)

// shadow
.shadowBlur    = 0
.shadowColor   = 'fully-transparent black'
.shadowOffsetX = 0
.shadowOffsetY = 0

// path
.beginPath()
.closePath()
.moveTo(x, y)
.lineTo(x, y)
.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
.quadraticCurveTo(cpx, cpy, x, y)
.arc(x, y, radius, startAngle, endAngle, ?anticlockwise)
.arcTo(x1, y1, x2, y2, radius)
.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, ?anticlockwise)
.rect(x, y, width, height)

// draw path
.fill(path|fillRule, ?fillRule)
.stroke(?path)
.drawFocusIfNeeded(path|element, ?element)
.scrollPathIntoView(?path)
.clip(path|fillRule, ?fillRule)
.isPointInPath(path|x, x, y, ?fillRule)
.isPointInStroke(path|x, x, y)

// transform
.getTransform()
.rotate(angle)
.scale(x, y)
.translate(x, y)
.transform(a, b, c, d, e, f)
.setTransform(matrix|a, b, c, d, e, f)

// comositing
.globalAlpha
.globalCompositeOperation

// draw image
.drawImage(image, dx, dy)
.drawImage(image, dx, dy, dWidth, dHeight)
.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

// pixel manipulation
.createImageData(imagedata|width, height)
.getImageData(sx, sy, sw, sh)
.putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)

// canvas state
.canvas
.save()
.restore()

// filter
.filter = 'filter-fn filter-fn ... |none'