'123456789'.match(/.{1,3}/g) // ['123', '456', '789']


s = '123456789'; a=[]; tot=s.length; part=3;
for (let i=0,j=part; j<=tot; i+=part,j+=part) a.push(s.slice(i,j));
// ['123', '456', '789']
