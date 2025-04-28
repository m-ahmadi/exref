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
