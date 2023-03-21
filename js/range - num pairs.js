tot=10; part=3;
for (let i=0,j=part; j<=tot; i+=part,j+=part) console.log(i,j);
0 3
3 6
6 9


tot=10; part=3;
[...Array(Math.floor(tot/part))].map((_,i,a) => (b=i*part, [...Array(part)].map((_,j)=>  b+j) ));
[0,1,2]
[3,4,5]
[6,7,8]
