SVGElement implements DocumentAndElementEventHandlers, Element, ElementCSSInlineStyle, GlobalEventHandlers, HTMLOrForeignElement, SVGElementInstance
SVGElement.dataset
SVGElement.ownerSVGElement
SVGElement.viewportElement
SVGElement.createSVGPoint(): SVGPoint
'abort error load resize scroll unload'

SVGGraphicsElement extends SVGElement
SVGGraphicsElement.transform
SVGGraphicsElement.getBBox()
SVGGraphicsElement.getCTM()
SVGGraphicsElement.getScreenCTM()

SVGGeometryElement extends SVGGraphicsElement
SVGGeometryElement.pathLength
SVGGeometryElement.isPointInFill(SVGPoint point)
SVGGeometryElement.isPointInStroke(SVGPoint point)
SVGGeometryElement.getTotalLength(): float
SVGGeometryElement.getPointAtLength(float distance): SVGPoint

SVGPoint.x
SVGPoint.y

DOMPointReadOnly.x
DOMPointReadOnly.y
DOMPointReadOnly.z
DOMPointReadOnly.w
static DOMPointReadOnly.fromPoint(sourcePoint)
DOMPointReadOnly.matrixTransform()
DOMPointReadOnly.toJSON()

DOMPoint extends DOMPointReadOnly

SVGRect.x
SVGRect.y
SVGRect.width
SVGRect.height