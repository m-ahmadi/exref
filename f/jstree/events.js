$('#el').on('event.namespace', function (e, data) {
	data // {node: {}, selected: [], ...}
})

$('#el').on('changed.jstree', function (e, data) {
	console.log(data.selected);
})

$('#el')
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
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
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@