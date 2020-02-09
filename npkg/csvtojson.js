const csv = require('csvtojson');

// reference:
csv({
	output: "json" // options:
	// "json"  convert csv to json. (default)
	// "csv"   convert csv to csv row array. 
	// "line"  convert csv to csv line string.
}).fromFile("/path/to/csv/file.csv").then(jsonObj => {
	console.log(jsonObj);
});

// from csv file to json object:
csv().fromFile("/path/to/csv/file.csv").then(jsonObj => {
	console.log(jsonObj);
});

// from csv string to json object:
csv().fromString("string,containing,comma,separated,values").then(jsonObj => {
	console.log(jsonObj);
});

// from csv string to csv row:
csv({noheader:true, output: "csv"}).fromString("1,2,3").then(csvRow => { 
	console.log(csvRow); // => [ ["1","2","3"] ]
})

// from csv string to csv lines:
csv({output: "line"}).fromString("1,2,3").subscribe(csvLine => {
	console.log(csvLine);
});

// async await usage:
const jsonArray = await csv().fromFile(csvFilePath);