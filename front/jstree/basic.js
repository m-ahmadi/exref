// simple:
$('#container_div').jstree();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// tree with inline json data
// <div id="container"></div>
$('#container').jstree({
	core : {
		data : [
			'Simple root node',
			{
				// this object here is the object u get when this node is selected
				'text' : 'Root node 2',
				'state' : {
					'opened' : true,
					'selected' : true
				},
				'children' : [
					{
						'text' : 'Child 1'
					},
					'Child 2'
				]
			}
		]
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// create a jstree instance
var treeInstance = $.jstree.create('#element', {
	plugins: [
		//'grid'
		'checkbox'
		//'contextmenu',
		// 'dnd',
		// 'massload',
		// 'search',
		// 'sort', 
		// 'state',
		// 'types',
		// 'unique',
		// 'wholerow',
		// 'changed',
		// 'conditionalselect'
	],
	types : {
		'default' : {
			//'icon' : 'jstree-icon jstree-file'
			'disabled' : { 
				'check_node' : false, 
				'uncheck_node' : false 
			}
		},
		'demo' : {
		}
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// tree with json data from ajax
// <div id="container"></div>

$('#container').jstree({
	core : {
		data : {
			url			:  'blah.json',
			type		:  'GET',
			type		:  'POST',
			dataType	:  'json',
			data		:  'foo',					// ?foo=foo
			data		:  {a: 'foo', b: 'bar'},
			beforeSend  :  function () {},
			success     :  function (data, status, jqxhr) {},
			error       :  function (jqxhr, errorTitle, errorDetail) {},
			complete    :  function () {}
		}
	}
});
// another example:
$('#container').jstree({
	'core': {
		'data': {
			url: function (node) {
				// this function executes first, then 'data:' function will execute
				// this function executes upon click on the node (which node idk)
				// whatever this function returns will be the url
				// node variable is the node that is been clicked
				
				// Object {id: '#', parent: null, parents: Array[0], children: Array[0], children_d: Array[0]}
				return node.id === '#' ? 'ajax_roots.json' : 'ajax_children.json';
			},
			data: function (node) {
				// this function executes once
				
				// Object {id: '#', parent: null, parents: Array[0], children: Array[0], children_d: Array[0]}
				return { 'id' : node.id };
			}
		}
	}
});

// modify ajax response before tree creation:
$('#container').jstree({
	core : {
		data : {
			url: 'blah.json',
			type: 'GET',
			dataType: 'text', // not json
			beforeSend: function () {},
			dataFilter: function (data) {
				return JSON.parse(data)[0];
			},
			success: function (data, status, jqxhr) {},
			error: function (jqxhr, errorTitle, errorDetail) {},
			complete: function () {}
		}
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// tree with html elements
/*
<div id="container">
	<ul>
		<li>Root node 1
			<ul>
				<li id="child_node_1">Child node 1</li>
				<li>Child node 2</li>
			</ul>
		</li>
		<li>Root node 2</li>
	</ul>
</div>
*/
$('#container').jstree();
$('#container').on('changed.jstree', function (e, data) {
	console.log(data.selected);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@