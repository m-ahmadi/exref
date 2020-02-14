//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	What will the code below output? Explain your answer.
*/
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	An educated answer to this question would simply be:
	“You can’t be sure. it might print out “0.3” and “true”, or it might not.
	Numbers in JavaScript are all treated with floating point precision,
	and as such, may not always yield the expected results.”

	The example provided above is classic case that demonstrates this issue.
	Surprisingly, it will print out:
*/
0.30000000000000004
false