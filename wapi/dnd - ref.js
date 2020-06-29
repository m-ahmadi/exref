'dragstart' // a drag operation starts (user starts dragging an item)
'drag'      // a dragged item is dragged (item=element|text-selection, constantly fired)

'dragenter' // a dragged item enters a valid drop target
'dragover'  // a dragged item is being dragged over a valid drop target (constantly firing every few hundred milliseconds)
'dragleave' // a dragged item leaves a valid drop target

'dragexit'  // mozila-only. an element is no longer the drag operation's immediate selection target

'drop'      // an item is dropped on a valid drop target
'dragend'   // a drag operation ends (mouse release | esc key)


// dragstart & dragend events are not fired when dragging a file into browser from OS


// drag types
var dt = event.dataTransfer;
// text
dt.setData('text/plain', 'This is text to drag');
// link
dt.setData('text/uri-list', 'https://example.com');
dt.setData('text/plain', 'https://example.com'); // fallback
// html
dt.setData('text/html', 'Hello there, <strong>stranger</strong>');
dt.setData('text/plain', 'Hello there, stranger'); // fallback


function dragstart(e) {
	// define drag image
	var img = new Image();
	img.src = 'https://picsum.photos/200';
	e.dataTransfer.setDragImage(img, 10, 10);
	
	// define drag data
	e.dataTransfer.setData('text/plain', e.target.innerText);
  e.dataTransfer.setData('text/html', e.target.outerHTML);
  e.dataTransfer.setData('text/uri-list', e.target.ownerDocument.location.href);
	
	// define drag effect
	e.dataTransfer.dropEffect = 'none|copy|link|move';
	
	// allow certain operations
	e.dataTransfer.effectAllowed = 'all|none|copy|copyLink|copyMove|link|linkMove|move|uninitialized';
}

// define dropzone
function dragover(e) {
	e.preventDefault(); // allow drop
	e.dataTransfer.dropEffect = 'move'; // if needed
}
function drop(e) {
	e.preventDefault();
	
	e.target.innerHTML = e.dataTransfer.getData('text/html');
	// or
	e.target.append( e.dataTransfer.getData('text/plain') );
	// or
	e.target.append( document.getElementById(data) );
}