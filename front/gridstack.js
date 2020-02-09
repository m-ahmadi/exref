/* includes:
gridstack.css
gridstack-extra.css (optional. if options.column < 12)
jquery-1.8.js
either:
	gridstack-poly.js (optional. Array.prototype.find and Number.isNaN())
	gridstack.js
	jquery-ui-1.12.0.js (draggable, droppable, resizable)
	gridstack.jQueryUI.js
or:
	gridstack.all.js (contains jquery-ui and gridstack-poly.js)

for touch: (optional)
	core-js/client/shim.js
	jquery.ui.touch-punch.js
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('#el').gridstack();

/*
<div id="el" class="grid-stack">
  <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="4" data-gs-height="2">
    <div class="grid-stack-item-content">my first widget</div>
  </div>
  <div class="grid-stack-item" data-gs-x="4" data-gs-y="0" data-gs-width="4" data-gs-height="4">
    <div class="grid-stack-item-content">another widget!</div>
  </div>
</div>
*/

// support touch:
$('#el').gridstack({
	alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
});

// 
grid-stack-N
// <div class="grid-stack grid-stack-N"></div>
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
$('#el').gridstack({
	acceptWidgets:          false,
	alwaysShowResizeHandle: false,
	animate:                false,
	auto:                   true,
	cellHeight:             60|int|string='10em','100px','10rem', // int px
	column:                 12, // if < 12 gridstack-extra.css and <div class="grid-stack grid-stack-N"></div>
	ddPlugin:               null,
	disableDrag:            false,
	disableOneColumnMode:   false,
	disableResize:          false,
	draggable:              {handle: '.grid-stack-item-content', scroll: false, appendTo: 'body'},
	float:                  false, 
	handle:                 '.grid-stack-item-content',
	handleClass:            null,
	itemClass:              'grid-stack-item',
	maxRow:                 0,
	minWidth:               768,
	oneColumnModeClass:     'grid-stack-one-column-mode',
	placeholderClass:       'grid-stack-placeholder',
	placeholderText:        '',
	resizable:              {autoHide: true, handles: 'se'},
	removable:              false,
	removeTimeout:          2000,
	rtl:                    false,
	staticGrid:             false,
	verticalMargin:         20|int|string='2em','20px','2rem' // int px
});

// methods
$('#el').gridstack()
var grid = $('#el').data('gridstack')
grid.addWidget(el, 0, 0, 3, 2, true)
grid.addWidget(el, {x: 0, y: 0, width: 3, height: 2, true})
grid.cellHeight(grid.cellWidth() * 1.2)
grid.movable('.grid-stack-item', true)
grid.resizable('.grid-stack-item', false)

// events
$('#el').on('added', function (event, items) {})
'added'        (event, items)
'change'       (event, items)
'disable'      (event)
'dragstart'    (event, ui)
'dragstop'     (event, ui)
'dropped'      (event, previousWidget, newWidget)
'enable'       (event)
'removed'      (event, items)
'resizestart'  (event, ui)
'gsresizestop' (event, ui)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// html data attrs

// grid attributes
data-gs-animate          // turns animation on
data-gs-column="12"      // amount of columns
data-gs-max-row="0"      // maximum rows amount. 0 = no maximum rows.
data-gs-current-height   // current rows amount. set by the library only. can be used by css rules.

// item attributes
data-gs-x=number         // element position in row/column. note: if one is missing this will autoPosition the item
data-gs-y                // ...
data-gs-width=number     // element size in row/column
data-gs-height           // ...
data-gs-id=number|string // good for quick identification (for example in change event)
data-gs-max-width        // element constraints in row/column
data-gs-min-width        // ...
data-gs-max-height       // ...
data-gs-min-height       // ...
data-gs-no-resize        // disable element resizing
data-gs-no-move          // disable element moving
data-gs-auto-position    // tells to ignore data-gs-x and data-gs-y attributes and to place element to the first available position. having either one missing will also do that.
data-gs-resize-handles   // sets resize handles for a specific widget.
data-gs-locked           /* the widget will be locked.
	it means another widget wouldn't be able to move it during dragging or resizing.
	the widget can still be dragged or resized.
	you need to add data-gs-no-resize and data-gs-no-move attributes to completely lock the widget. */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@