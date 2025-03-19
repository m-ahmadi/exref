const fs = require('fs');
const { Buffer } = require('buffer');

// setting up dummy file and data
const filename = 'large_csv_file.csv';
const exampleData = `1,1,1,1
2,2,2,2
3,3,3,3
4,4,4,4
5,5,5,5
6,6,6,6
7,7,7,7
8,8,8,8
9,9,9,9`;
fs.writeFileSync(filename, exampleData);

// setting up the reading mechanism
const CHUNK_SIZE = 8; // min possible value: number of chars in one row plus newline
const buffer = Buffer.alloc(CHUNK_SIZE);
const fileHandle = fs.openSync(filename);

// reading the file in chunks
const fileSizeInBytes = fs.statSync(filename).size;
let totalBytesRead = 0;
const chunkStrs = [];
let isLastChunk = false;
let cutoff = '';

while (totalBytesRead < fileSizeInBytes) {
	// manage buffer read difference between last chunk vs rest
	const bytesRead = fs.readSync(fileHandle, buffer);
	totalBytesRead += bytesRead;
	
	let str;
	if (totalBytesRead === fileSizeInBytes) {
		str = buffer.toString('utf8', 0, bytesRead);
		isLastChunk = true;
	} else {
		str = buffer.toString();
	}
	
	// manage existing leftover string from previous read chunk
	if (cutoff) {
		str = cutoff + str;
		cutoff = '';
	}
	
	// manage correct reading of the csv string
	const lastIdx = str.length - 1;
	let lastNewlineIdx = lastIdx;
	let chunkStr = str;
	if (!isLastChunk) {
		while (str[lastNewlineIdx] !== '\n') lastNewlineIdx--;
		const lastCharIsNotNewline = lastIdx > lastNewlineIdx;
		if (lastCharIsNotNewline) cutoff = str.slice(lastNewlineIdx);
		chunkStr = str.slice(0, lastNewlineIdx);
	}
	
	// csv chunk is ready
	chunkStrs.push(chunkStr.trim());
}

const allRows = chunkStrs.map(i=>i.split('\n')).flat();

console.log(allRows);
