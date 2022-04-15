from openpyxl import Workbook
from openpyxl.worksheet.table import Table, TableStyleInfo

wb = Workbook()
ws = wb.active

data = [
	['Apples', 10000, 5000, 8000, 6000],
	['Pears',   2000, 3000, 4000, 5000],
	['Bananas', 6000, 6000, 6500, 6000],
	['Oranges',  500,  300,  200,  700],
]

ws.append(['Fruit', '2011', '2012', '2013', '2014']) # add column headings
for row in data:
	ws.append(row)

table = Table(displayName='Table1', ref='A1:E5')
table.tableStyleInfo = TableStyleInfo(name='TableStyleMedium9', showFirstColumn=False, showLastColumn=False, showRowStripes=True, showColumnStripes=False)
# https://openpyxl.readthedocs.io/en/stable/api/openpyxl.worksheet.table.html#openpyxl.worksheet.table.TableStyleInfo

ws.add_table(table)
wb.save('table.xlsx')