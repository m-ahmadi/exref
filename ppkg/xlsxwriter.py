import xlsxwriter

workbook = xlsxwriter.Workbook('hello.xlsx')
worksheet = workbook.add_worksheet()
worksheet.write('A1', 'Hello world')
workbook.close()

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# with pandas
import pandas as pd

data = [10, 20, 30, 40, 50, 60, 70, 80]
df = pd.DataFrame({'Rank': data, 'Country': data, 'Population': data, 'Data1': data, 'Data2': data})

writer = pd.ExcelWriter('pandas_table.xlsx', engine='xlsxwriter')

df.to_excel(writer, sheet_name='Sheet1', startrow=1, header=False, index=False)

workbook = writer.book
worksheet = writer.sheets['Sheet1']

column_settings = []
for header in df.columns:
	column_settings.append({'header': header})

(max_row, max_col) = df.shape
worksheet.add_table(0, 0, max_row, max_col - 1, {'columns': column_settings})
worksheet.set_column(0, max_col - 1, 12)
writer.save()
