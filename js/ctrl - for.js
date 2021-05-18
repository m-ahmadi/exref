// basic
for (let i=0; i<10; i+=1) {
	console.log(i); // 0-9
}

// break terminates the loop
for (let i=0; i<100; i+=1) {
	console.log(i); // 0-50
	if (i > 50) break;
}

// skip one iteration
for (let i=0; i<100; i+=1) {
	if (i < 50) continue; // go to next iteration (i+=1)
	console.log(i); // 50-99
}

// skip multiple iterations: (by modifying the index)
for (let i=0; i<10; i++) {
	console.log(i); // 0 8 9
	if (i===1) i = 8;
}
for (let i=0; i<50; i+=1) {
	console.log(i); // 0 1 2 48 49
	if (i===2) i = 47
}

// dynamic index:
for (let i=0,j=1; i<10; i+=j) {
	console.log(i); // 0 1 2 3 5 7 9
	j = i < 3 ? 1 : 2;
}

// note: don't do the following:
for (let i=j=0; i<10; i+=j) // variable j is not scoped and exists after loop ends.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// all 3 expressions in the head of the for loop are optional.

// no init:
var i = 0;
for (; i<9; i++) {
	console.log(i);
}

// no condition: (infinite loop)
for (let i=0; ; i++) {
	console.log(i);
	if (i > 3) break;
}

// no condition, no init, no increment:
var i = 0;
for (;;) {
	if (i > 3) break;
	console.log(i);
	i++;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// for without a statement:
function bar() {
	var i, j, k;
	for (
		i=0, j=0, k=0;    // initialization
		i<50;             // condition
		i+=1, j+=2, k+=4  // increment
	);                  // mandatory semicolon (without it, the following line is considered a statement)
	console.log(i, j, k);
}
bar();

// error:
function bar() {
	for (
		let i=0;
		i<50;
		i+=1
	);                   
	console.log(i);
}
bar(); // ReferenceError: i is not defined
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// weird usage of break:
var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
list: {
  text += cars[0] + '<br>'; 
  text += cars[1] + '<br>'; 
  break list;
  text += cars[2] + '<br>'; 
  text += cars[3] + '<br>'; 
}