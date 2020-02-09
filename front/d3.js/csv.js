// parsing

d3.csvParse(string[, row])
/*
string: csv string (delimiter-separated values format)
return: an array of objects representing the parsed rows
this mehtod requires the first line of csv content to be a delimiter-separated list of column names which become the attributes on the returned objects
columns prop on returned array contains column names in input order
	
no row conversion function
	string field values
	no automatic conversion to numbers/dates/other-types

row conversion function specified
	function is invoked for each row
	each time function's invoked it's passed:
		(d) an object representing current row 
		(i) index, starts at 0 for the first non-header row
		(c) array of column names

	null/undefined returned value
		row is skipped and omitted from array returned by csv.parse
		the returned value defines row object for each row
*/

/*
	Year,Make,Model,Length
	1997,Ford,E350,2.34
	2000,Mercury,Cougar,2.38
*/
var data = d3.csvParse(string, function(d) {
  return {
		year: new Date(+d.Year, 0, 1), // lowercase and convert 'Year' to Date
		make: d.Make, // lowercase
		model: d.Model, // lowercase
		length: +d.Length // lowercase and convert 'Length' to number
  };
});
//--------------------------------------------------------------------------------------------------------------------------------
d3.csvParseRows(string[, row])
/*
string: csv string (delimiter-separated values format)
return: an array of arrays representing the parsed rows

same as d3.csvParse except:
this method treats the header line as a standard row, and should be used whenever csv content does not contain a header
each row is represented as an array rather than an object
rows may have variable length.
*/

var data = d3.csvParseRows(string, function(d, i) {
  return {
    year: new Date(+d[0], 0, 1), // convert first colum column to Date
    make: d[1],
    model: d[2],
    length: +d[3] // convert fourth column to number
  };
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// fetching the data with an ajax call

d3.csv(input[, init][, row])
// input: file to fetch with ajax
// row:   function to map or filter row objects
// init:  if specified, passed to underlying fetch call
d3.csv('data.csv', function (error, data) {
	
});