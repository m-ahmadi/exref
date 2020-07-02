// npm install sortablejs

import Sortable from 'sortablejs';                                  // default
import Sortable from 'sortablejs/modular/sortable.core.esm.js';     // core     (without default plugins)
import Sortable from 'sortablejs/modular/sortable.complete.esm.js'; // complete (with all plugins)

// cdn
// https://cdn.jsdelivr.net/npm/sortablejs/
// https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js
import Sortable from 'https://cdn.jsdelivr.net/npm/sortablejs@latest/modular/sortable.complete.esm.js'; // <script type="module">

// use extra plugins
import Sortable, { MultiDrag, Swap } from 'sortablejs';
Sortable.mount(new MultiDrag(), new Swap());

// use default plugins
import Sortable, { AutoScroll } from 'sortablejs/modular/sortable.core.esm.js';
Sortable.mount( new AutoScroll() );

// basic
var el = document.querySelector('ul');

var sortable = Sortable.create(el);

new Sortable(el, {
	animation: 150,
	ghostClass: 'some-class'
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
var sortable = new Sortable(el, {
	group:                'name',                   // or { name: '...', pull: [true, false, 'clone', array], put: [true, false, array] }
	sort:                  true,                    // sorting inside list
	delay:                 0,                       // time in milliseconds to define when the sorting should start
	delayOnTouchOnly:      false,                   // only delay if user is using touch
	touchStartThreshold:   0,                       // px, how many pixels the point should move before cancelling a delayed drag event
	disabled:              false,                   // disables the sortable if set to true.
	store:                 null,                    // see Store
	animation:             150,                     // ms, animation speed moving items when sorting, `0` — without animation
	easing:                'cubic-bezier(1,0,0,1)', // easing for animation. Defaults to null. See https://easings.net/ for examples.
	handle:                '.my-handle',            // drag handle selector within list items
	filter:                '.ignore-elements',      // selectors that do not lead to dragging (string or function)
	preventOnFilter:       true,                    // call `event.preventDefault()` when triggered `filter`
	draggable:             '.item',                 // specifies which items inside the element should be draggable

	dataIdAttr:            'data-id',
	
	ghostClass:            'sortable-ghost',        // class name for the drop placeholder
	chosenClass:           'sortable-chosen',       // class name for the chosen item
	dragClass:             'sortable-drag',         // class name for the dragging item

	swapThreshold:         1,                       // threshold of the swap zone
	invertSwap:            false,                   // will always use inverted swap zone if set to true
	invertedSwapThreshold: 1,                       // threshold of the inverted swap zone (will be set to swapThreshold value by default)
	direction:             'horizontal',            // direction of Sortable (will be detected automatically if not given)

	forceFallback:         false,                   // ignore the html5 dnd behaviour and force the fallback to kick in

	fallbackClass:         'sortable-fallback',     // class name for the cloned dom Element when using forceFallback
	fallbackOnBody:        false,                   // appends the cloned dom Element into the Document's Body
	fallbackTolerance:     0,                       // specify in pixels how far the mouse should move before it's considered as a drag.

	dragoverBubble:        false,
	removeCloneOnHide:     true,                    // remove the clone element when it is not showing, rather than just hiding it
	emptyInsertThreshold:  5,                       // px, distance mouse must be from empty sortable to insert drag element into it


	setData: function (dataTransfer, dragEl) {
		dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of html5 DragEvent
	},

	// element is chosen
	onChoose: function (e) {
		e.oldIndex;  // element index within parent
	},
	
	// element is unchosen
	onUnchoose: function(e) {
		// same properties as onEnd
	},
	
	// element dragging started
	onStart: function (e) {
		e.oldIndex;  // element index within parent
	},

	// element dragging ended
	onEnd: function (e) {
		var itemEl = e.item; // dragged HTMLElement
		e.to                 // target list
		e.from               // previous list
		e.oldIndex           // element's old index within old parent
		e.newIndex           // element's new index within new parent
		e.oldDraggableIndex  // element's old index within old parent, only counting draggable elements
		e.newDraggableIndex  // element's new index within new parent, only counting draggable elements
		e.clone              // the clone element
		e.pullMode           // when item is in another sortable: `'clone'` if cloning, `true` if moving
	},
	onAdd:    function (e) {/* same props as onEnd */}, // element is dropped into the list from another list
	onUpdate: function (e) {/* same props as onEnd */}, // changed sorting within list
	onSort:   function (e) {/* same props as onEnd */}, // called by any change to the list (add / update / remove)
	onRemove: function (e) {/* same props as onEnd */}, // element is removed from the list into another list

	// attempt to drag a filtered element
	onFilter: function (e) {
		var itemEl = e.item;  // HTMLElement receiving the `mousedown|tapstart` event.
	},

	// event when you move an item in the list or between lists
	onMove: function (e, originalEvent) {
		// example: https://jsbin.com/nawahef/edit?js,output
		e.dragged;             // dragged HTMLElement
		e.draggedRect;         // DOMRect {left, top, right, bottom}
		e.related;             // HTMLElement on which have guided
		e.relatedRect;         // DOMRect
		e.willInsertAfter;     // Boolean that is true if Sortable will insert drag element after target by default
		originalEvent.clientY; // mouse position
		// return false;       // for cancel
		// return -1;          // insert before target
		// return 1;           // insert after target
	},

	// called when creating a clone of element
	onClone: function (e) {
		var origEl = e.item;
		var cloneEl = e.clone;
	},

	// called when dragging element changes position
	onChange: function(e) {
		e.newIndex // most likely why this event is used is to get the dragging element's current index
		// same props as onEnd
	}
});

sortable.option(name, ?value)
sortable.closest(el, ?selector)
sortable.toArray()
sortable.sort(order)
sortable.save()
sortable.destroy()