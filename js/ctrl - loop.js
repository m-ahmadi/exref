for (let i=0; i<10; i++) {} // 0-9
for (let i in {a:1,b:2}) {} // 'a' 'b'
for (let i of [1,2,3]) {}   // 1 2 3
while () {}
do {} while ()

continue;
continue label;
break;
break label;

label:
  statement
label: statement

// labeled continue
loop1:
for (let i=1; i<4; i++) {
	loop2:
	for (let j=1; j<4; j++) {
		if (i === 2 && j === 2) continue loop1; // imagine `continue` in body of outer loop
		console.log(i, j);
	}
}

// labeled break
loop1:
for (let i=1; i<4; i++) {
	loop2:
	for (let j=1; j<4; j++) {
		if (i === 2 && j === 2) break loop1; // imagine `break` in body of outer loop
		console.log(i, j);
	}
}

// labeled block with break
foo: {
	console.log('a');
	break foo;
	console.log('b');
}
console.log('c');
// a c

var a = [1,1,1,1];
var n = 0;
list: {
	n += a[0]; 
	n += a[1]; 
	n += a[2]; 
	break list;
	n += a[3]; 
}
n // 3