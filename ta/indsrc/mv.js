// https://www.marketvolume.com/technicalanalysis

r = {};
group = '';

[...document.querySelectorAll('table.table.table-striped.its-c > tbody:nth-child(2) > tr')].forEach(i => {
  let [, child2] = i.children;
  let h4 = child2.querySelector('h4');
  let p = child2.querySelector('p');
  
  if (h4) group = h4.innerText;
  
  if (p) {
    if (!r[group]) r[group] = [];
    r[group].push(p.querySelector('a').title/*innerText*/);
  }
  
});

console.log(  Object.keys(r).map(k=> [k, ...r[k].map(j=>'\t'+j)].join('\n')).join('\n\n')  );