// shared props
nativeEvent            DOMEvent
target                 DOMEventTarget
currentTarget          DOMEventTarget
type                   string
bubbles                boolean
cancelable             boolean
defaultPrevented       boolean
eventPhase             number
timeStamp              number
isTrusted              boolean
preventDefault()       void
isDefaultPrevented()   boolean
stopPropagation()      void
isPropagationStopped() boolean

onCopy onCut onPaste                // clipboard
onFocus onBlur                      // focus
onLoad onError                      // image
onKeyDown onKeyPress onKeyUp        // keyboard
onChange onInput onInvalid onSubmit // form

// misc
onSelect
onScroll
onWheel
onTransitionEnd
onToggle

onTouchCancel onTouchEnd onTouchMove onTouchStart       // touch
onAnimationStart onAnimationEnd onAnimationIteration    // animation
onCompositionEnd onCompositionStart onCompositionUpdate // composition

// mouse
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp

// pointer
onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture
onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut

// media
onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting