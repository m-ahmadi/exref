/* includes:
full
	tabulator.css
	tabulator.js

core + modules
	dist/js/tabulator_core.js
	dist/js/modules/sort.js
	...
	
cdn
	https://unpkg.com/tabulator-tables/dist/css/tabulator.min.css
	https://unpkg.com/tabulator-tables/dist/js/tabulator.min.js
	
	https://unpkg.com/browse/tabulator-tables/
	https://cdn.jsdelivr.net/npm/tabulator-tables/

npm i tabulator-tables
*/
const options = {
	data:                 [],           // assign data to table
	
	// layout
	height:                 0|'',         // height of table (in css or here). any valid css height value. enables virtual dom & improves render speed dramatically
	maxHeight:              0|'',
	minHeight:              0|'',  
	layout:                'fitColumns | fitData | fitDataFill| fitDataStretch | fitDataTable', // fit columns to width of table (optional)
	responsiveLayout:       false|'hide | collapse'
	layoutColumnsOnNewData: false
	responsiveLayoutCollapseFormatter:     (data) => ,
	responsiveLayoutCollapseUseFormatters: false,
	responsiveLayoutCollapseStartOpen:     false,
	autoResize:             false,
	resizableRows:          false
	resizableColumns:       false,
	columnMinWidth:         0,
	virtualDomBuffer:       0,
	virtualDom:             false
	placeholder:            '',
	footerElement:          '',
	
	rowFormatter:           ()=>,
	rowFormatterPrint:      false|()=>,
	tooltips:               false|''|()=>,
	tooltipGenerationMode:  'load | hover'
	tooltipsHeader:         false|''|()=>,
	
	pagination:              'local|remote',
	paginationSize:          0,
	paginationInitialPage:   0,
	paginationSizeSelector:  false|[0,...],
	paginationElement:       HTMLElement,
	paginationButtonCount:   0,
	paginationAddRow:        'page | table',
	movableColumns:          false,
	ajaxURL:                 '',
	ajaxURLGenerator:        ()=>,
	ajaxParams:              {},
	paginationDataSent:      {},
	paginationDataReceived:  {},
	
	columns: [            // define table columns
		{
			title:           '',
			field:           '',
			width:           0,
			widthGrow:       0,
			widthShrink:     0,
			responsive:      0,
			resizable:       false,
			frozen:          false,
			hozAlign:        '',
			headerSort:      false,
			sorter:          '',
			formatter:       ''|()=>,
			formatterParams: {},
			formatterPrint:  false,
			titleFormatter:  '',
			titleFormatterParams: {},
			cellClick:       ()=>
			tooltip:         false
			...
		}
	],
	rowClick: function (e, row) { // event handler
		row.getData().id
	},
};
var table = new Tabulator('#mytable', options);


table.redraw(full=false)
table.blockRedraw()
table.restoreRedraw()
table.setHeight(n=0)
table.redraw()
table.replaceData(dataOrURL=[]|'')
table.updateData(data=[])
table.addData(data=[], addToTop=false)
table.updateOrAddData()

table.setPage(0|'first|prev|next|last')
table.nextPage()
table.previousPage()
table.setPageToRow(0)
table.setPageSize(0)
table.getPage()
table.getPageMax()

row.freeze()
row.unfreeze()
row.pageTo()


/* list of all modules
accessor
ajax
calculation_colums
clipboard
data_tree
download
edit
export
filter
format
frozen_columns
frozen_rows
group_rows
history
html_table_import
keybindings
menu
moveable_columns
moveable_rows
mutator
page
persistence
print
reactive_data
resize_columns
resize_rows
resize_table
responsive_layout
select_row
sort
validate
*/