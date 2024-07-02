// git rebase -i HEAD~10 --commiter-date-is-author-date

s = `
pick aaabbba 2
pick aaabbbb 3
pick aaabbbc 5
pick aaabbbd 8
pick aaabbbe 12
pick aaabbbf 17
`;

r = [];
firstNum = undefined;
prevNum = undefined;

s.trim().split('\n').forEach((line,index) => {
	let [cmd, hash, msg] = line.split(' ');
	let row = [cmd, hash, msg];
	
	if (index === 0) {
		firstNum = +msg;
		prevNum = firstNum;
		r.push(row);
		return;
	}
	
	let a = prevNum;
	let b = +msg;
	let diff = b - a;
	prevNum = b;
	
	if (diff !== 1) {
		let newMsg = index + firstNum;
		let extraStep = `exec git commit --amend -m "${newMsg}"`;
		row.push(...[newMsg, extraStep]);
		prevNum = newMsg;
	}
	
	r.push(row);
});

rdy = r.map(([cmd,hash,oldMsg,newMsg,extraStep]) => !newMsg
	? [cmd,hash,oldMsg].join(' ')
	: [ [cmd,hash,oldMsg].join(' '), extraStep ]
).flat();

rdystr = rdy.join('\n');
console.log(rdystr);

`
pick aaabbba 2
pick aaabbbb 3
pick aaabbbc 5
exec git commit --amend -m "4"
pick aaabbbd 8
exec git commit --amend -m "5"
pick aaabbbe 12
exec git commit --amend -m "6"
pick aaabbbf 17
exec git commit --amend -m "7"
`

// run another time without touching the todo list to restore commit dates
// git rebase -i HEAD~10 --commiter-date-is-author-date
