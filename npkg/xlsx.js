const XLSX = require('xlsx');
const workbook = XLSX.readFile('test.xlsx');

XLSX.read(data, read_opts)               // parse
XLSX.readFile(filename, read_opts)       // read file and parse
// https://github.com/SheetJS/sheetjs#parsing-options

XLSX.write(wb, write_opts)               // write the workbook wb
XLSX.writeFile(wb, filename, write_opts) // write wb to filename (in browser: download file)
XLSX.writeFileAsync(filename, wb, o, cb) // ... async
// https://github.com/SheetJS/sheetjs#writing-options