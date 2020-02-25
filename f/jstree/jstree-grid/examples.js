
width: 						// width for the entire jstree-grid. If no width is given, automatically fills the entire viewport (`width: 100%;`)
columnWidth: 				// default width for a column for which no width is given. If no width is given, the default is `auto`.
columns: 					// an array of columns to create, on order. Each entry is an object with the following parameters:
	tree:					// boolean, whether the jstree should be placed in this column. Only the first `true` is accepted. If no column is set to `tree:true`, then the first column is used.
	width:					// width of the column in pixels. If no width is given, the default is `auto` **except for the last column**. In the last column, if no width is given, it is treated as 'auto' and fills the entire rest of the grid to the right.
	header: 				// string to use as a header for the column.
	headerClass:			// a CSS class to add to the header cell in this column
	columnClass:			// a CSS class to add to the header cell and the column cell
	cellClass:				// a CSS class to add to each cell in this column (except for the header) - added to the <span>
	wideCellClass:			// a CSS class to add to each cell in this column (except for the header) - added to the <div>
	value:					// the attribute on the node to use as the value for this cell - entered as the <span> text. Can be a string or a function.
	valueClass:				// the attribute on the node to use as a class on this cell - added to the <span>
	valueClassPrefix:		// a prefix to add to the valueClass to use as a class on this cell
	wideValueClass:			// the attribute on the node to use as a class on this cell - added to the <div>
	wideValueClassPrefix:	// a prefix to add to the wideValueClass to use as a class on this cell
resizable:					// true/false if the columns should be resizable. Defaults to false.
contextmenu:				// true/false whether or not a context menu for editing the cells should be shown on right-click. Defaults to false.


$("#jstree_demo_div").jstree({
    // include grid as a plugin
    plugins: ["core", "ui" ,"grid"],
    // include relevant parameters
    grid: {
        columns: [ {}, {}, {} ],
        width: 25
    },
    core: {
        data: []
    }
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
data: [
	{
		text: "My Node",
		data: {
			price: "$10"
		}
	}
]
grid: {
    columns: [
        {width: 50, header: "Nodes"},
        {width: 30, header: "Price", value: "price"}
    ]
}
grid: {
    columns: [
        {width: 50, header: "Nodes"},
        {width: 30, header: "Price", value: function(node){return(node.data.price);}} // if value is a function, that function executes everytime u open a node
    ]
}
grid: {
    columns: [
        {width: 50, header: "Nodes"},
        {width: 30, header: "Price", value: function(node){return("$"+(node.data.price*2));}}
    ]
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
data: [
	{
		text: "My Node",
		data: {
			price: "$10",
			scale: "expensive"
		}
	}
]
grid: {
    columns: [
        {width: 50, header: "Nodes"},
        {width: 30, header: "Price", value:"price", valueClass: "scale"}
    ]
}
grid: {
    columns: [
        {width: 50, header: "Nodes"},
        {width: 30, header: "Price", value: "price", valueClass: "scale", valueClassPrefix: "price-"}
    ]
}
grid: {
    columns: [
        {width: 50, header: "Nodes"},
        {width: 30, header: "Price", value: "price", title: "price"}
    ]
}
grid: {
    columns: [
        {width: 50, header: "Nodes", title:"price"},
        {width: 30, header: "Price", value: "price", title: "price"}
    ]
}
grid: {
    columns: [
        {width: 50, header: "Nodes", title:"_DATA_"},
        {width: 30, header: "Price", value: "price", title: "price"}
    ]
}
