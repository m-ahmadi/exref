Window
[HTMLElement.id]: HTMLElement
.closed																				!
.console
.controllers																	!
.customElements
.crypto
.devicePixelRatio															!
.dialogArguments
.document
.DOMMatrix																		X
.DOMMatrixReadOnly														X
.DOMPoint																			X
.DOMPointReadOnly															X
.DOMQuad																			X
.DOMRect																			X
.DOMRectReadOnly															X
.event
.frameElement
.frames
.fullScreen
.history
.innerHeight
.innerWidth
.isSecureContext															X
.length
.location																			W
.locationbar
.localStorage
.menubar
.messageManager
.mozInnerScreenX															!
.mozInnerScreenY															!
.name																					W
.navigator
.opener																				W
.outerHeight
.outerWidth
.parent
.performance
.personalbar
.screen
	.width
	.height
.screenX | .screenLeft
.screenY | .screenTop
.scrollbars
.scrollMaxX																		!
.scrollMaxY																		!
.scrollX | .pageXOffset
.scrollY | .pageYOffset
.self
.sessionStorage																W
.sidebar																			!
.speechSynthesis
.status																				W
.statusbar
.toolbar
.top
.visualViewport
.window
window[0], window[1], ...											W

.alert()
.blur()
.cancelAnimationFrame(requestID)							X
.cancelIdleCallback()													X
.clearImmediate()
.close()
.confirm()
.dump()																				!
.find()
.focus()
.getComputedStyle()
.getDefaultComputedStyle()										!
.getSelection()
.matchMedia()
.maximize()
.minimize() (top-level XUL windows only)
.moveBy()
.moveTo()
.open(url='about:blank', windowName='', windowFeatures=''): WindowProxy
.postMessage()
.print()
.prompt()
.requestAnimationFrame(callback): requestID
.requestIdleCallback()												X
.resizeBy()
.resizeTo()
.scroll()
.scrollBy()
.scrollByLines()															!
.scrollByPages()															!
.scrollTo()
.setCursor()																	!
.setImmediate()
.setResizable()																!
.sizeToContent()															!
.stop()
.updateCommands()															!
// ps
! = non-standard
X = experimental
W = not readonly