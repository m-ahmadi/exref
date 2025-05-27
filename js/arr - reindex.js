// reindex shortened array to original length (filled with NaN)

// original long array
a = [1,2,NaN,3,4,NaN,5,6];

// capture index of where holes are
s = new Set(a.map((v,i)=> Number.isNaN(v) ? i : -1).filter(i=>i>-1));

// shortened array
b = a.filter(Number.isFinite).map(i=>Math.sqrt(i));

// reindex the shortened array
offset = s.size;
c = a.map((v,i) => s.has(i) ? NaN : b[i>0?i-offset:i+offset] * 2); // reindexed

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// index of distant item in subset array
/*
objective:
	1. iterate through a long array
	2. construct a subset array
	3. each subset item must contain index of a distant item (index in subset array), 
	   but distant item must also be a subset qualified item 

why this is a non-trivial problem:
	because when finding the distant item,
	we don't know if that item will be qualified to be in subset array
	
	to really accomplish this task, we would have to do the extra steps below:
		1. when selecting a subset item
		2. keep long array moving forward till distant item,
			 and in doing so check the logic for qualification,
			 and see where we would reach a qualified distant item
	
	which is too complicated for no good reason
*/

// construct long array
nItems = 100;
a = [...Array(nItems)].map(() => String.fromCharCode(Math.round(Math.random()*70+50)));
a = [...new Set(a)];

b = []; // subset array
c = []; // next item of subset array

for (const [i,v] of a.entries()) {
	
	if (Math.round(Math.random())) { // subset qualified
		const itemIndexInShorterArray = c.length;
		b.push(v);
		c.push(a[i+1]);
	}
}

[bb, cc] = [b.slice(1), c.slice(0,-1)];
bb.every((v,i) => v === cc[i]); // false (next items are not equal, as expected)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
