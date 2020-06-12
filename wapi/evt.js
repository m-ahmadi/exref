elem.addEventListener(type, listener, ?useCapture=false | ?options)
elem.removeEventListener(...)
getEventListeners(elem) // only in devtools
/* 3 phases of event propagation:
1. capturing:  event goes down to    target element
2. target:     event reaches         target element
3. bubbling:   event bubbles up from target element */
elem.addEventListener('change', function (event) {
	this                             // elem
	event                            // event object
	event.target                     // element that the event occurred on (bubble root)
	event.currentTarget              // elem
	event.relatedTarget              // only in MouseEvent and FocuesEvent
	event.type                       // name of the fired event
	event.stopPropagation()          // stop bubbling
	event.stopImmediatePropagation() // don't call remaining listeners (when multiple listeners for 1 event)
	event.preventDefault()           // stop default action
})

elem.addEventListener('change', e => {
	this  // undefined
})

elem.onchange = function (e) {
	
}

// bubbling (fire on every ancestor going up)
// elem1 contains elem2
elem1.addEventListener('click', function (event) {
	this         // elem1
	event.target // elem2
})
elem2.addEventListener('click', function (event) {
	this         // elem2
	event.target // elem2
})

// delegate
table.addEventListener('click', function (event) {
  const target = event.target;
	
  if (target.tagName != 'TD') return;
	
  doSomething(target);
});

// capture (fire on every ancestor going down)
elem.addEventListener(..., {capture: true})
elem.addEventListener(..., true)

for( const elem of document.querySelectorAll('*') ) {
	elem.addEventListener('click', e => alert(`Capturing: ${elem.tagName}`), true);
	elem.addEventListener('click', e => alert(`Bubbling: ${elem.tagName}`));
}

// trigger event programmatically
var event = new Event('change')
var event = new CustomEvent('build', {detail: 'event data', bubble, cancelable, ...})
var event = new MouseEvent('click', {cancelable: true})
elem.dispatchEvent(event)

// custom event
var my = new EventTarget();
my.addEventListener('myevent', e => console.log('hi'))
my.dispatchEvent( new CustomEvent('myevent') )

// destroy all listeners of an element (except inline listeners: <div onclick>)
var oldElem = document.querySelector('#something')
var newElem = oldElem.cloneNode(true)
oldElem.parentNode.replaceChild(newElem, oldElem)