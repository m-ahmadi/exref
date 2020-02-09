data: [
	{
		text: "text of node",
		data: {
			a: 'checkbox',
			b: "expensive"
		}
	},
	{
		text: 'text2',
		data: {
			a: 'ap',
			b: 'bp'
		}
	}
]
	
grid: {
	//width: 200,
	columns: [
		{
			header: 'نام',
			headerClass: 'text-center'
		},
		{
			header: 'دسترسی جزیی',
			headerClass: 'text-center',
			value: 'a' // use node.a for this cell
		},
		{
			header: 'دسترسی کلی',
			headerClass: 'text-center',
			value: 'b'
		}
	]
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('#jstree_demo_div').jstree('loaded_grid.jstree', function (e, o) {
	$(this).on('select_cell.jstree-grid', function (a,b,c,d) {
		alert();
	});
});