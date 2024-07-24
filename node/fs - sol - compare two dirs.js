let {readdirSync:readdir,statSync:stats,writeFileSync:write} = require('fs');
let {join:j} = require('path');

isgood = i => !i.startsWith('__') && !i.startsWith('test');
getdirs = p => readdir(p).filter(isgood).toSorted((a,b)=>a.localeCompare(b)).filter(isgood);
dirfilt = root => i => isgood(i) && stats(j(root,i)).isDirectory();
tree = (a,p) => a.filter(dirfilt(p)).map(i => getdirs(j(p,i)));
zip = (a,b) => a.map((v,i)=>[v,b[i]]);
indt = i=>'\t'+i;
fmt = a => a.map(i => [i[0], i[1].map(indt).join('\n')].join('\n')).join('\n');

p1 = 'dir1';
p2 = 'dir2';

a = getdirs(p1);
b = getdirs(p2);

r1 = tree(a,p1);
r2 = tree(b,p2);

rr1 = zip(a,r1);
rr2 = zip(a,r2);

rr1.map(i => i.map(i=>'\t'+i).join('\n')).join('\n');

write('compare_a.txt', fmt(rr1));
write('compare_b.txt', fmt(rr2));
