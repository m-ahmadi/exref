// basic:
$('#container').on('changed.jstree', function (e, data) {
	console.log(data.selected);
});
$('button').on('click', function () {
	$('#container').jstree(true).select_node('child_node_1');
	$('#container').jstree('select_node', 'child_node_1');
	$.jstree.reference('#container').select_node('child_node_1');
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('#container').on('event.namespace', function (e, data) {
	data//Object {node: Object, selected: Array[1], event: n.Event, instance: a.j…
});

$('#container').jstree(true).select_node('mn1');
  
$('#container').jstree('select_node', 'mn2');
  
$.jstree.reference('#container').select_node('mn3');

$('#container').jstree('get_node', '345_anchor');
$('#container').jstree('get_node', '344');

$('#container')
  // listen for event
  .on('changed.jstree', function (e, data) {
    var i, j, r = [];
    for(i = 0, j = data.selected.length; i < j; i++) {
      r.push(data.instance.get_node(data.selected[i]).text);
    }
    $('#event_result').html('Selected: ' + r.join(', '));
  })
  // create the instance
  .jstree();


//	open closed parent before select a node
$('#findChild').click(function(){
    $.jstree._reference(myTree).open_node('#Node_001',function(){;},false);
});
$('#findGrandChild').click(function(){
    var closedParents = $('#Node_003').parents('li.jstree-closed');,
		i;
    for (i=closedParents.length-1; i>=0; i=+1) {
        pleaseOpen( $(closedParents[i]) );
    }
});
function pleaseOpen(thisNode){
    if(typeof thisNode=='undefined') return;
    if(thisNode.hasClass('jstree-leaf') || thisNode.hasClass('jstree-open') ) return;
    $.jstree._reference(myTree).open_node(thisNode,function(){;},true);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// reference
'init.jstree'
'loading.jstree'
'loaded.jstree'
'ready.jstree'
'load_node.jstree'
'load_all.jstree'
'model.jstree'
'redraw.jstree'
'before_open.jstree'
'open_node.jstree'
'after_open.jstree'
'close_node.jstree'
'after_close.jstree'
'open_all.jstree'
'close_all.jstree'
'enable_node.jstree'
'disable_node.jstree'
'hide_node.jstree'
'show_node.jstree'
'hide_all.jstree'
'show_all.jstree'
'activate_node.jstree'
'hover_node.jstree'
'dehover_node.jstree'
'select_node.jstree'
'changed.jstree'
'deselect_node.jstree'
'select_all.jstree'
'deselect_all.jstree'
'set_state.jstree'
'refresh.jstree'
'refresh_node.jstree'
'set_text.jstree'
'create_node.jstree'
'rename_node.jstree'
'delete_node.jstree'
'move_node.jstree'
'copy_node.jstree'
'cut.jstree'
'copy.jstree'
'paste.jstree'
'clear_buffer.jstree'
'set_theme.jstree'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@