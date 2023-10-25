// install:  https://docs.sheetjs.com/docs/getting-started/installation/standalone
// https://cdn.jsdelivr.net/npm/xlsx/
// https://cdn.sheetjs.com/              official cdn (has latest version)
'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js'                 // standalone
import { read } from 'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.mjs';   // esm
importScripts('https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js'); // worker
const XLSX = require('xlsx');                                             // node

// api:  https://docs.sheetjs.com/docs/api/
XLSX.read(data, read_opts)                   // parse
XLSX.readFile(filename, read_opts)           // read file and parse
XLSX.write(wb, write_opts)                   // write workbook
XLSX.writeXLSX(wb, write_opts)               // write file in xlsx format
XLSX.writeFile(wb, filename, write_opts)     // write workbook to file (in browser: download file)
XLSX.writeFileXLSX(wb, filename, write_opts) // write xlsx file
XLSX.writeFileAsync(filename, wb, o, cb)     // like .writeFile() but async

XLSX.utils.
	aoa_to_sheet(e,r)
	book_append_sheet(wb, worksheet, sheet_name, a)
	book_new()
	book_set_sheet_visibility(e,r,t)
	cell_add_comment(e,r,t)
	cell_set_hyperlink(e,r,t)
	cell_set_internal_link(e,r,t)
	cell_set_number_format(e,r)
	consts.
		{SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2}
	decode_cell(e)
	decode_col(e)
	decode_range(e)
	decode_row(e)
	encode_cell(e)
	encode_col(e)
	encode_range(e,r)
	encode_row(e)
	format_cell(e,r,t)
	json_to_sheet(e,r)
	set_readable // node only
	sheet_add_aoa(e,r,t)
	sheet_add_dom(e,r,t)
	sheet_add_json(e,r,t)
	sheet_get_cell(e,r,t)
	sheet_set_array_formula(e,r,t,a)
	sheet_to_csv(e,r)
	sheet_to_formulae(e)
	sheet_to_html(e,r)
	sheet_to_json(e,r)
	sheet_to_row_object_array(e,r)
	sheet_to_txt(e,r)
	split_cell(e)
	table_to_book(e,r)
	table_to_sheet(e,r)

XLSX.version
XLSX.stream.
	{to_json, to_html, to_csv, set_readable}
XLSX.set_cptable
XLSX.set_fs
XLSX.SSF
XLSX.CFB

var wb = XLSX.utils.book_new();
wb.SheetNames ['', ...]
wb.Sheets     {Sheet1: {}, ...}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic
var data = [[1,1,1],[2,2,2]];
var ws = XLSX.utils.aoa_to_sheet(data);
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws);
XLSX.writeFileXLSX(wb, 'foo.xslx');

// workbook
var wb = XLSX.readFile('foo.xlsx');
var wb = XLSX.utils.book_new();
