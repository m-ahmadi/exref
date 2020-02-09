//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// close and open all
$('#container').jstree('open_all', -1);
$('#container').jstree('close_all', -1);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// destroy the tree
$('#tree').empty();
$('#tree').jstree(true).destroy()
$('#tree').jstree(true).destroy().empty()	// better
$('#tree').empty().jstree(true).destroy()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// disable and enable node
$('#container').jstree(true).disable_node('397_anchor')
$('#container').jstree(true).disable_node(['1', '44', '344', '397', '431'])
$('#container').jstree(true).enable_node('397_anchor')
$('#container').jstree(true).enable_node(['1', '44', '344', '397', '431'])
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// get node
$('#container').jstree(true).get_node('mojabi-m', true);	// as dom element
$('#container').jstree(true).get_node('mojabi-m', false); // as object
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// get selected nodes
$('#container').jstree('get_selected');           // their texts
$('#container').jstree('get_selected', ['full']); // their node objects
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// open and close node
$('#container').jstree(true).open_node('345_anchor');
$('#container').jstree(true).close_node('345_anchor');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// select and deselect all
$('#container').jstree('select_all')
$('#container').jstree('select_all', true)   // `changed.jstree` event won't be triggered
$('#container').jstree('deselect_all')
$('#container').jstree('deselect_all', true) // `changed.jstree` event won't be triggered
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// select and deselect
$('#container').jstree('select_node', 'j1_4_anchor')
$('#container').jstree('select_node', ['j1_4_anchor', 'j1_5_anchor', 'j1_6_anchor'])
$('#container').jstree('select_node', 'j1_4_anchor', true)       //	`changed.jstree` event won't be triggered
$('#container').jstree('select_node', 'j1_4_anchor', true, true) //	parents of the selected node won't be opened

$('#container').jstree('deselect_node', 'j1_4_anchor')
$('#container').jstree('deselect_node', ['j1_4_anchor', 'j1_5_anchor', 'j1_6_anchor'])
$('#container').jstree('deselect_node', 'j1_4_anchor', true)     // `changed.jstree` event won't be triggered

$('#container').jstree(true).select_node('mojabi-m_anchor', false, false);   // wont check node's parents
$('#container').jstree(true).select_node('mojabi-m_anchor', false, true);    // will check its parents

$('#container').jstree(true).deselect_node('mojabi-m_anchor', false, false); // wont check node's parents
$('#container').jstree(true).deselect_node('mojabi-m_anchor', false, true);  // will check its parents
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// change the tree structure
$('#tree').jstree(true).settings.core.data = new_data;
$('#tree').jstree(true).redraw(true); // true: all nodes are redrawn
$('#tree').jstree(true).refresh();    // v3.1 true: skip showing the loading indicator
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@