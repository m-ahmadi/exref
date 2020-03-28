Event
Event.bubbles
Event.cancelBubble
Event.cancelable
Event.composed
Event.currentTarget
Event.deepPath !
Event.defaultPrevented
Event.eventPhase
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
MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN
MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN
MouseEvent.altKey
MouseEvent.button
MouseEvent.buttons
MouseEvent.clientX
MouseEvent.clientY
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
X MouseEvent.x
X MouseEvent.y
MouseEvent.getModifierState()
'click' 'dblclick' 'mousedown' 'mouseenter' 'mouseleave' 'mousemove' 'mouseover' 'mouseout' 'mouseup' 'contextmenu' 'auxclick' 

KeyboardEvent extends UIEvent
KeyboardEvent.DOM_KEY_LOCATION_STANDARD
KeyboardEvent.DOM_KEY_LOCATION_LEFT
KeyboardEvent.DOM_KEY_LOCATION_RIGHT
KeyboardEvent.DOM_KEY_LOCATION_NUMPAD
KeyboardEvent.altKey
KeyboardEvent.code
KeyboardEvent.ctrlKey
KeyboardEvent.isComposing
KeyboardEvent.key
KeyboardEvent.locale
KeyboardEvent.location
KeyboardEvent.metaKey
KeyboardEvent.repeat
KeyboardEvent.shiftKey
KeyboardEvent.getModifierState()
'keydown' 'keyup'

FocusEvent extends UIEvent
FocusEvent.relatedTarget
'focus' 'blur' 'focusin' 'focusout'

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
DragEvent.dataTransfer
'drag' 'dragstart' 'dragleave' 'dragenter' 'dragover' 'dragexit' 'dragend' 'drop'

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
'touchstart' 'touchend' 'touchmove' 'touchcancel'

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