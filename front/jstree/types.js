// add predefined types for groups of nodes, which make it possible to easily control nesting rules and icon for each group.
$('#container').jstree({
	core: {
		data: data
	},
	// define types here:
	types: {
		'#': {
			valid_children: ['root'],
			icon: 'jstree-file'
		},
		file: {
			icon: 'jstree-file',
			valid_children: ['none']
		},
		name_of_the_type: {
			// predefined types:
			'#': ,              // represents the root of the tree. eg: max_children controls the max number of root nodes.
			'default': ,        // represents the default node. any settings here is applied to all nodes that don't have a type specified.
			// rest:
			max_children: -1,   // max number of immediate children this node type can have. -1 or not specified: unlimited.
			max_depth: {},      // max number of nesting this node type can have. 1: node can have children, but no grandchildren. -1 or not specified: unlimited.
			valid_children: [], // array of node type strings. that nodes of this type can have as children. -1 or not specified: no limits.
			icon: '',           // string. can be a path to an icon or a className. if using an image that is in the current directory use a ./ prefix, otherwise it will be detected as a class. omit to use the default icon from your theme.
			li_attr: {},        // object of values used to add html attributes on the resulting <li> dom node (merged with the node's own data)
			a_attr: {},         // object of values used to add html attributes on the resulting <a> dom node (merged with the node's own data)
		}
	},
	plugins: ['types']
});
// point to a defined type in the tree data structure by using the `type` property:
[
	'simple node',
	{
		text: 'item name',
		type: 'file'
	}
]
// data (place 1st when testing)
var data = [
	'simple root node',
	{
		text: 'root node with children',
		type: '#',
		state: {
			opened: true,
			selected: true
		},
		children: [{
				text: 'child 1',
				type: 'file'
			},
			'child 2',
			{
				text: 'another child',
				type: '#'
			}
		]
	},
	'another root node',
];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('#container').jstree({
	core: {
		animation: 0,
		check_callback: true,
		themes: { stripes: true },
		data: {
			url: function (node) {
				return node.id === '#' ? 'ajax_demo_roots.json' : 'ajax_demo_children.json';
			},
			data: function (node) {
				return { 'id' : node.id };
			}
		}
	},
	types: {
		'#' : {
			max_children: 1, 
			max_depth: 4, 
			valid_children: ['root']
		},
		root : {
			valid_children: ['default']
		},
		'default' : {
			valid_children: ['default','file']
		},
		file: {
			icon: 'glyphicon glyphicon-file',
			'valid_children': []
		}
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
