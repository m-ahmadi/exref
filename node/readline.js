const readline = require('readline');
const {stdin: input, stdout: output} = process;
const rl = readline.createInterface({input,output}); // once created, takes control
// note: must run one example at a time


// one question
rl.question('How are you? ', answer => {
	console.log(`You are ${answer}`);
	rl.close();
});


// more questions
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
