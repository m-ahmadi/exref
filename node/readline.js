var readline = require('readline');

// https://nodejs.org/api/readline.html

var rl = readline.createInterface(options={
	input:                   <stream.Readable>,
	output:                  <stream.Writable>,
	completer:               ()=>,
	terminal:                boolean,
	history:                 string[],
	historySize:             number,
	removeHistoryDuplicates: boolean,
	prompt:                  string
	crlfDelay:               number,
	escapeCodeTimeout:       number,
	tabSize:                 int,
	signal:                  <AbortSignal>,
})
'close|line|history|pause|resume|SIGCONT|SIGINT|SIGTSTP'
rl.line   = string
rl.cursor = number | undefined
rl.close()
rl.getCursorPos()
rl.getPrompt()
rl.pause()
rl.prompt([preserveCursor])
rl.question(query[, options], callback)
rl.resume()
rl.setPrompt(prompt)
rl.write(data[, key])
rl[Symbol.asyncIterator]()

readline.clearLine(stream, dir[, callback])
readline.clearScreenDown(stream[, callback])
readline.cursorTo(stream, x[, y][, callback])
readline.moveCursor(stream, dx, dy[, callback])
readline.emitKeypressEvents(stream[, interface])

var rlp = readline.promises.createInterface(options)
rlp.clearLine(dir)
rlp.clearScreenDown()
rlp.commit()
rlp.cursorTo(x[, y])
rlp.moveCursor(dx, dy)
rlp.question(query[, options])
rlp.rollback()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// question
var {stdin: input, stdout: output} = process;
var rl = readline.createInterface({input, output});
rl.question('How are you? ', answer => {
	console.log(`You are ${answer}`);
	rl.close();
});

// question - multiple
var rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.question('Tell me you name: ', name => {
	rl.question('Tell me you date of birth as YYYY/MM/DD: ', dob => {
		var [y,m,d] = dob.split('/').map(parseFloat);
		var today = new Date();
		var isBirthday = today.getMonth()+1 === m && today.getDate() === d;
		var msg = isBirthday
			? `Happy birthday dear ${name}`
			: 'Sorry, today is not your birthday.';
		console.log(msg);
		rl.close();
	});
});

// read file line by line
var fs = require('fs');
fs.writeFileSync('a.txt', [...Array(100)].map(Math.random).join('\n'));
var writeStream = fs.createWriteStream('b.txt');
var rd = readline.createInterface({
	input: fs.createReadStream('a.txt'),
});
rd.on('line', line => writeStream.write(line + (line.includes('77')?'\t###':'') + '\n'));
rd.on('close', () => console.log('all done'));
