/* includes:
full
	tabulator.css
	tabulator.js

core + modules
	dist/js/tabulator_core.js
	dist/js/modules/sort.js
	...
	
cdn
	https://unpkg.com/tabulator-tables@4.9.3/dist/css/tabulator.min.css
	https://unpkg.com/tabulator-tables@4.9.3/dist/js/tabulator.min.js

node
	npm i tabulator-tables
*/

const options = {
	data:                   [],           // assign data to table
	
	// loading data
	autoColumns:            false,
	importFormat:           '|csv|json|...',
	importReader:           '|text|buffer|binary|url',
	ajaxURL:                '',
	ajaxParams:             {},
	ajaxConfig:             'GET|POST|...' | { method:'', mode:'', credentials:'', headers:{} },
	ajaxContentType:        {},
	ajaxRequesting:         (url, params)=>,
	ajaxError:              (error)=>,
	filterMode:             '|remote',
	sortMode:               '|remote',
	progressiveLoad:        'load|scroll',
	progressiveLoadScrollMargin: 0,
	
	// layout
	height:                 0|'',         // height of table (in css or here). any valid css height value. enables virtual dom & improves render speed dramatically
	maxHeight:              0|'',
	minHeight:              0|'',  
	layout:                 'fitColumns | fitData | fitDataFill | fitDataStretch | fitDataTable', // fit columns to width of table (optional)
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
	
	pagination:             'local|remote',
	paginationSize:         0,
	paginationInitialPage:  0,
	paginationSizeSelector: false|[0,...],
	paginationElement:      HTMLElement,
	paginationButtonCount:  0,
	paginationAddRow:       'page | table',
	movableColumns:         false,
	ajaxURL:                '',
	ajaxURLGenerator:       ()=>,
	ajaxParams:             {},
	paginationDataSent:     {},
	paginationDataReceived: {},
	
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
			formatter:       'plaintext|textarea|html|money|image|link|datetime|tickCross|color|star|traffic|progress|lookup|buttonTick|buttonCross|rownum|handle|...'|(cell, formatterParams, onRendered)=>,
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

table.addColumn(t,e,o)
table.addData(data=[], addToTop=false, o)
table.addFilter(t,e,o,i)
table.addRow(t,e,o)
table.bindModules()
table.blockRedraw()
table.clearCellEdited(t)
table.clearCellValidation(t)
table.clearData()
table.clearFilter(t)
table.clearHeaderFilter()
table.clearHistory()
table.clearSort()
table.copyToClipboard(t)
table.deleteColumn(t)
table.deleteRow(t)
table.deselectRow(t)
table.destroy()
table.download(t,e,o,i)
table.downloadToTab(t,e,o,i)
table.extendModule(t,e,o)
table.findTable(t)
table.getAjaxUrl()
table.getCalcResults()
table.getColumn(t)
table.getColumnDefinitions()
table.getColumnLayout()
table.getColumns(t)
table.getData(rowRangeLookup='all|visible|active|selected')
	'all'      // all rows in the table (regardless of filters)
	'visible'  // rows currently visible in the table viewport
	'active'   // rows currently in the table that pass current filters
	'selected' // rows currently selected by the selection module (this includes not currently active rows)
table.getDataCount(t)
table.getEditedCells()
table.getFilters(t)
table.getGroupedData()
table.getGroups(t)
table.getHeaderFilterValue(t)
table.getHeaderFilters()
table.getHistoryRedoSize()
table.getHistoryUndoSize()
table.getHtml(t,e,o)
table.getInvalidCells()
table.getLang(t)
table.getLocale()
table.getPage()
table.getPageMax()
table.getPageSize()
table.getRow(t)
table.getRowFromPosition(t,e)
table.getRowPosition(t,e)
table.getRows(t)
table.getSelectedData()
table.getSelectedRows()
table.getSorters()
table.helpers: {elVisible: ƒ, elOffset: ƒ, deepClone: ƒ}
table.hideColumn(t)
table.initializeElement(t)
table.initializeOptions(t)
table.modExists(t,e)
table.moduleBindings: {layout: ƒ, localize: ƒ, comms: ƒ, sort: ƒ, resizeColumns: ƒ, …}
table.moveColumn(t,e,o)
table.moveRow(t,e,o)
table.navigateDown()
table.navigateLeft()
table.navigateNext()
table.navigatePrev()
table.navigateRight()
table.navigateUp()
table.nextPage()
table.previousPage()
table.print(t,e,o)
table.recalc()
table.redo()
table.redraw(full=false)
table.refreshFilter()
table.registerModule(t,e)
table.removeFilter(t,e,o)
table.replaceData(dataOrURL=[]|'',e,o)
table.restoreRedraw()
table.rtlCheck()
table.scrollToColumn(t,e,o)
table.scrollToRow(t,e,o)
table.searchData(t,e,o)
table.searchRows(t,e,o)
table.selectRow(t)
table.setColumnLayout(t)
table.setColumns(t)
table.setData(t,e,o)
table.setDataFromLocalFile(t)
table.setFilter(t,e,o,i)
table.setGroupBy(t)
table.setGroupHeader(t)
table.setGroupStartOpen(t)
table.setGroupValues(t)
table.setHeaderFilterFocus(t)
table.setHeaderFilterValue(t,e)
table.setHeight(n=0)
table.setLocale(t)
table.setMaxPage(t)
table.setPage(page=0|'first|prev|next|last')
table.setPageSize(size=0)
table.setPageToRow(row=0)
table.setSort(t,e)
table.showColumn(t)
table.tableComms(t,e,o,i)
table.toggleColumn(t)
table.toggleSelectRow(t)
table.undo()
table.updateColumnDefinition(t,e)
table.updateData(data=[])
table.updateOrAddData(t)
table.updateOrAddRow(t,e)
table.updateRow(t,e)
table.validate(t)

row.addTreeChild(t,e,o)
row.delete()
row.deselect()
row.freeze()
row.getCell(t)
row.getCells()
row.getData(t)
row.getElement()
row.getGroup()
row.getIndex()
row.getNextRow()
row.getPosition(t)
row.getPrevRow()
row.getTable()
row.getTreeChildren()
row.getTreeParent()
row.isFrozen()
row.isSelected()
row.move(t,e)
row.normalizeHeight()
row.pageTo()
row.reformat()
row.scrollTo()
row.select()
row.toggleSelect()
row.treeCollapse()
row.treeExpand()
row.treeToggle()
row.unfreeze()
row.update(t)
row.validate()

cell.cancelEdit()
cell.checkHeight()
cell.clearEdited()
cell.clearValidation()
cell.edit(t)
cell.getColumn()
cell.getData()
cell.getElement()
cell.getField()
cell.getInitialValue()
cell.getOldValue()
cell.getRow()
cell.getTable()
cell.getValue()
cell.isEdited()
cell.isValid()
cell.nav()
cell.restoreInitialValue()
cell.restoreOldValue()
cell.setValue(t,e)
cell.validate()

column.delete()
column.getCells()
column.getDefinition()
column.getElement()
column.getField()
column.getHeaderFilterValue()
column.getNextColumn()
column.getParentColumn()
column.getPrevColumn()
column.getSubColumns()
column.getTable()
column.getVisibility()
column.getWidth()
column.headerFilterFocus()
column.hide()
column.isVisible()
column.move(t,e)
column.reloadHeaderFilter()
column.scrollTo()
column.setHeaderFilterValue(t)
column.setWidth(t)
column.show()
column.toggle()
column.updateDefinition(t)
column.validate()


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

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// example

table.setSort('age', 'asc')

table.setSort([
	{column:'age', dir:'asc'},
	{column:'height', dir:'desc'},
])

table.getData('active')

table.setFilter('age', '>', 10)
table.setFilter('tags', 'keywords', 'red green blue', {matchAll:true})