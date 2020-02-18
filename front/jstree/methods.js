const el = $('#mytree');

// get instance
const inst = el.jstree()     // get existing instance or create new instance
const inst = el.jstree(true) // get existing instance (won't create new instance)

// method call signatures
el.jstree('select_node', 'mn2')
el.jstree(true).select_node('mn1')
$.jstree.reference('#mytree'|el).select_node('mn3')

// close and open all
inst.open_all()
inst.close_all()

// destroy the tree
el.empty()
el.jstree(true).destroy()
el.jstree(true).destroy().empty()	// better
el.empty().jstree(true).destroy()

// disable and enable node
inst.disable_node('397_anchor')
inst.disable_node(['1', '44', '344', '397', '431'])

inst.enable_node('397_anchor')
inst.enable_node(['1', '44', '344', '397', '431'])

// get node
inst.get_node('node_id', true)	 // as dom element
inst.get_node('node_id', false) // as object

// get selected nodes
inst.get_selected()     // only ids
inst.get_selected(true) // their node objects

// open and close node
inst.open_node('345_anchor')
inst.close_node('345_anchor')

// select and deselect all
inst.select_all()
inst.select_all(true)   // `changed.jstree` event won't be triggered
inst.deselect_all()
inst.deselect_all(true) // `changed.jstree` event won't be triggered

// rename node
el.jstree('rename_node', 'node_id', 'new text') // core: {check_callback: true} must be set

// get the path to a node (up to a root node)
inst.get_path(node=''|{}, glue='', ids=false)
inst.get_path('id')                  // []text
inst.get_path('id', undefined, true) // []id
inst.get_path('id', '/', true)       // path/to/root

// select and deselect
inst.select_node( 'id'| ['id1',...'], supress_event, prevent_open )
inst.select_node('id', true)            // `changed.jstree` event won't be triggered
inst.select_node('id', undefined, true) // parents of the selected node won't be opened

inst.deselect_node( 'id'| ['id1',...'], supress_event )
inst.deselect_node('id', true)          // `changed.jstree` event won't be triggered

// change the tree structure
inst.settings.core.data = new_data;
inst.redraw(true) // true: all nodes are redrawn
inst.refresh()    // v3.1 true: skip showing the loading indicator

// open closed parent before select a node
$('#findChild').on('click', function () {
	$.jstree._reference('#el').open_node('#Node_001',function(){},false);
});
$('#findGrandChild').on('click', function () {
	var closedParents = $('#Node_003').parents('li.jstree-closed');
	for (let i=closedParents.length-1; i>=0; i=+1) {
		open( $(closedParents[i]) );
	}
});
function open(thisNode){
	if(typeof thisNode=='undefined') return;
	if(thisNode.hasClass('jstree-leaf') || thisNode.hasClass('jstree-open') ) return;
	$.jstree._reference('#el').open_node(thisNode,function(){},true);
}