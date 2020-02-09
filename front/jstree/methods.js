const el = $('#mytree');

// signatures
el.jstree('select_node', 'mn2')
el.jstree(true).select_node('mn1')
$.jstree.reference('#mytree'|el).select_node('mn3')

// close and open all
el.jstree('open_all', -1)
el.jstree('close_all', -1)

// destroy the tree
el.empty();
el.jstree(true).destroy()
el.jstree(true).destroy().empty()	// better
el.empty().jstree(true).destroy()

// disable and enable node
el.jstree(true).disable_node('397_anchor')
el.jstree(true).disable_node(['1', '44', '344', '397', '431'])

el.jstree(true).enable_node('397_anchor')
el.jstree(true).enable_node(['1', '44', '344', '397', '431'])

// get node
el.jstree(true).get_node('node_id', true)	 // as dom element
el.jstree(true).get_node('node_id', false) // as object

// get selected nodes
el.jstree('get_selected')           // their texts
el.jstree('get_selected', ['full']) // their node objects

// open and close node
el.jstree(true).open_node('345_anchor')
el.jstree(true).close_node('345_anchor')

// select and deselect all
el.jstree('select_all')
el.jstree('select_all', true)   // `changed.jstree` event won't be triggered
el.jstree('deselect_all')
el.jstree('deselect_all', true) // `changed.jstree` event won't be triggered

// rename node
el.jstree('rename_node', 'node_id', 'new text') // core: {check_callback: true} must be set

// select and deselect
el.jstree('select_node', 'j1_4_anchor')
el.jstree('select_node', ['j1_4_anchor', 'j1_5_anchor', 'j1_6_anchor'])
el.jstree('select_node', 'j1_4_anchor', true)       //	`changed.jstree` event won't be triggered
el.jstree('select_node', 'j1_4_anchor', true, true) //	parents of the selected node won't be opened

el.jstree('deselect_node', 'j1_4_anchor')
el.jstree('deselect_node', ['j1_4_anchor', 'j1_5_anchor', 'j1_6_anchor'])
el.jstree('deselect_node', 'j1_4_anchor', true)     // `changed.jstree` event won't be triggered

el.jstree(true).select_node('mojabi-m_anchor', false, false)   // wont check node's parents
el.jstree(true).select_node('mojabi-m_anchor', false, true)    // will check its parents

el.jstree(true).deselect_node('mojabi-m_anchor', false, false) // wont check node's parents
el.jstree(true).deselect_node('mojabi-m_anchor', false, true)  // will check its parents

// change the tree structure
el.jstree(true).settings.core.data = new_data;
el.jstree(true).redraw(true) // true: all nodes are redrawn
el.jstree(true).refresh()    // v3.1 true: skip showing the loading indicator

//	open closed parent before select a node
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