/** IMPORTANT NOTES */
/*
id key of a node must be a unique string.
weird things will happen if two nodes have the same id key, here are some of them:
	only the node that was defined latter in the data structure is present in the tree.
	previous nodes are visible in tree but they get deleted upon clicking on them.

do not use single quotes.
*/

// Alternative format of the node (id & parent are required)
{
	id          : "string"		// required (must be unique)
	parent      : "string"		// required
	text        : "string"		// node text
	icon        : "string"		// string for custom
	state       : {
		opened    : false		    // is the node open
		disabled  : false		    // is the node disabled
		selected  : false		    // is the node selected
	},
	li_attr     : {} 			    // attributes for the generated <li> node
	a_attr      : {}			    // attributes for the generated <a> node
}



// example:

[
	{
		"id" : "ajson1",
		"parent" : "#",
		"text" : "Simple root node"
	},
	{
		"id" : "ajson2",
		"parent" : "#",
		"text" : "Root node 2"
	},
	{
		"id" : "ajson3",
		"parent" : "ajson2",
		"text" : "Child 1"
	},
	{
		"id" : "ajson4",
		"parent" : "ajson2",
		"text" : "Child 2"
	}
]