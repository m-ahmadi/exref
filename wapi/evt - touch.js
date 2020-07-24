'touchstart'
'touchmove'
'touchend'
'touchcancel'

// MouseEvent.offsetX
var rect = e.target.getBoundingClientRect();
var x = e.targetTouches[0].pageX - rect.left;
var y = e.targetTouches[0].pageY - rect.top;

// dont fire mouse events
e.preventDefault()

// error: "Unable to preventDefault inside passive event listener due to target being treated as passive."
document.addEventListener('touchstart', fn, {passive: false})//