// basic:

// include tree.css
// include tree.js

// <div id="tree_container"></div>
var tree = new dhx.Tree("tree_container", {
	data: data, // load data on init
	checkbox: true,
	keyNavigation: true
});

// load data later:
var tree = new dhx.Tree("tree_container");
// either:
tree.data.parse(data);            // local source (a js object containing data)
tree.data.load("./dataset.json"); // external file
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// reference:
var tree = new dhx.Tree("tree_container", {
	autoload: true            // defines that the structure of a tree is being built while opening items
	checkbox: false           // adds checkboxes to tree items
	css: 'cssClass'           // adds a CSS class(es) to the component
	data: {}                  // sets a dataset for a tree
	dragCopy: false           // defines that an item is copied to a target during drag-n-drop
	dragMode: 'source'        // enables drag-n-drop in Tree
	dropBehaviour: 'complex'  // defines the behaviour of a dragged item. options: child, sibling, complex.
	isFolder: () => true      // defines whether an item should be rendered as a folder
	keyNavigation: true       // enables key navigation in a tree
	icon: {                   // allows adding custom icons for tree items
		folder: "fas fa-book",  // name of an icon from the used icon pack
		openFolder: "fas fa-book-open",
		file: "fas fa-file"
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// data structure
// nodes must have unique ids, if not weird things will happen:
// nodes with similar ids will not open on the tree.
var node = {
	value: "",   // string. the name of an item
	id: "",      // string. the id of an item (must be unique)
	open: false, // boolean. checks whether a tree item is open (for folders with items)
	selected: 0, // number. the status of a checkbox of an item:
	// 0 - unselected
	// 1 - selected
	// 2 - indeterminate (for the parent item, in case its children are partially checked)
	items: [] // array. an array of nested items
};
var data = [ node ];
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// sample data
var data = [
	{
		"value": "Robert Crais",
		"id": "Robert Crais"
	},
	{
		"value": "Ian Rankin",
		"id": "Ian Rankin"
	},
	{
		"value": "Magazines",
		"id": "Magazines",
		"open": true,
		"items": [
			{
				"value": "Sport",
				"id": "Sport"
			}
		]
	},
	{
		"value": "Books",
		"id": "Books",
		"opened": true,
		"items": [
			{
				"value": "Robert Crais",
				"id": "Robert Crais"
			},
			{
				"value": "Ian Rankin",
				"id": "Ian Rankin"
			}
		]
	}
];