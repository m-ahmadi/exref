Event
Event.bubbles
Event.cancelBubble
Event.cancelable
Event.composed
Event.currentTarget
Event.deepPath !
Event.defaultPrevented
Event.eventPhase
Event.explicitOriginalTarget !
Event.originalTarget !
Event.returnValue
Event.srcElement !
Event.target
Event.timeStamp
Event.type
Event.isTrusted
Event.composedPath()
Event.preventDefault()
Event.stopImmediatePropagation()
Event.stopPropagation()
var event = new Event(typeArg='', ?eventInit={
	bubbles:    false,
	cancelable: false,
	composed:   false
});

CustomEvent extends Event
CustomEvent.detail
var event = new CustomEvent(typeArg='', ?customEventInit={detail: null} | eventInit)

UIEvent extends Event <- MouseEvent, TouchEvent, FocusEvent, KeyboardEvent, WheelEvent, InputEvent, CompositionEvent
UIEvent.detail
! UIEvent.layerX
! UIEvent.layerY
! UIEvent.pageX
! UIEvent.pageY
UIEvent.sourceCapabilities
UIEvent.view
! UIEvent.which

MouseEvent extends UIEvent
var event = new MouseEvent(typeArg='', ?mouseEventInit={
	...eventInit,
	...UIEventInit,
	screenX:       0,
	screenY:       0,
	clientX:       0,
	clientY:       0,
	ctrlKey:       false,
	shiftKey:      false,
	altKey:        false,
	metaKey:       false,
	button:        0,
	buttons:       0,
	relatedTarget: null,
	region:        null,
})
MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN
MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN
MouseEvent.altKey
MouseEvent.button
MouseEvent.buttons
MouseEvent.clientX | X MouseEvent.x
MouseEvent.clientY | X MouseEvent.y
MouseEvent.ctrlKey
MouseEvent.metaKey
MouseEvent.movementX
MouseEvent.movementY
X MouseEvent.offsetX
X MouseEvent.offsetY
X MouseEvent.pageX
X MouseEvent.pageY
MouseEvent.region
MouseEvent.relatedTarget
MouseEvent.screenX
MouseEvent.screenY 
MouseEvent.shiftKey
MouseEvent.which !
MouseEvent.MouseEvent.mozInputSource !
MouseEvent.webkitForce !
MouseEvent.getModifierState()
'click dblclick mousedown mouseenter mouseleave mousemove mouseover mouseout mouseup contextmenu auxclick'

KeyboardEvent extends UIEvent
KeyboardEvent.DOM_KEY_LOCATION_STANDARD  0x00
KeyboardEvent.DOM_KEY_LOCATION_LEFT      0x01
KeyboardEvent.DOM_KEY_LOCATION_RIGHT     0x02
KeyboardEvent.DOM_KEY_LOCATION_NUMPAD    0x03
KeyboardEvent.altKey                     boolean
KeyboardEvent.code                       ''
KeyboardEvent.ctrlKey                    boolean
KeyboardEvent.isComposing                boolean
KeyboardEvent.key                        ''
KeyboardEvent.locale
KeyboardEvent.location                   0
KeyboardEvent.metaKey                    boolean
KeyboardEvent.repeat                     boolean
KeyboardEvent.shiftKey                   boolean
KeyboardEvent.getModifierState(): boolean
'keydown keyup'

FocusEvent extends UIEvent
FocusEvent.relatedTarget
'focus blur focusin focusout'

X InputEvent extends UIEvent
InputEvent.data
InputEvent.dataTransfer
InputEvent.inputType
InputEvent.isComposing
InputEvent.getTargetRanges()

WheelEvent extends MouseEvent
'wheel'
WheelEvent.DOM_DELTA_PIXEL
WheelEvent.DOM_DELTA_LINE
WheelEvent.DOM_DELTA_PAGE
WheelEvent.deltaX
WheelEvent.deltaY
WheelEvent.deltaZ
WheelEvent.deltaMode

DragEvent extends MouseEvent
DragEvent.dataTransfer: DataTransfer
'drag dragstart dragleave dragenter dragover dragexit dragend drop'

DataTransfer
DataTransfer.dropEffect 'none|copy|link|move'
DataTransfer.effectAllowed 'all|none|copy|copyLink|copyMove|link|linkMove|move|uninitialized'
DataTransfer.files: FileList
DataTransfer.items: DataTransferItemList
DataTransfer.types: ['','',]
DataTransfer.clearData(?format='')
DataTransfer.getData(format='')
DataTransfer.setData(format='', data='')
DataTransfer.setDragImage(img | element, xOffset=0, yOffset=0)

DataTransferItemList
DataTransferItemList.length
DataTransferItemList.add()
DataTransferItemList.remove()
DataTransferItemList.clear()
DataTransferItemList.DataTransferItem()

DataTransferItem
DataTransferItem.kind
DataTransferItem.type
DataTransferItem.getAsFile()
DataTransferItem.getAsString(callback=(dragData)=>)

TouchEvent extends UIEvent
TouchEvent.altKey
TouchEvent.changedTouches
TouchEvent.ctrlKey 
TouchEvent.metaKey
TouchEvent.shiftKey
TouchEvent.targetTouches
TouchEvent.touches
! TouchEvent.rotation
! TouchEvent.scale
'touchstart touchend touchmove touchcancel'

mixin GlobalEventHandlers
GlobalEventHandlers.onclick
GlobalEventHandlers.onmousedown
GlobalEventHandlers.onmouseup
GlobalEventHandlers.onkeydown
GlobalEventHandlers.onkeyup
GlobalEventHandlers. ...

// ps
! = non-standard
X = experimental
R = read only