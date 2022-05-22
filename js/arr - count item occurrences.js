count = {};
[1,2,2,3,4,5,5,5].map((v,i) => count[v] = (count[v] || 0) + 1);


count = [1,2,2,3,4,5,5,5].reduce((r,v,i) => (r[v] = (r[v] || 0) + 1, r), {});


count = [1,2,2,3,4,5,5,5].reduce((r,v) => (r.set(v, (r.get(v) || 0) + 1), r), new Map());
[...count].sort((a,b)=>a[0]-b[0]).map(i=>i[1]);
