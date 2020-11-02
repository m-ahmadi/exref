a = [];

// scroll and push
a.push(

[...document.querySelectorAll('.XiG.zI7.iyn.Hsu img')].map(i=> {
  if (i.srcset) {
    var a = i.srcset.split(',');
    return a[a.length-1];
  }
  return i.src;
})

)


y = a.reduce((a,c)=> (a = [...a, ...c]), [])
z = [...new Set(y)]
q = z.map(i => i.includes(' 4x') ? i.replace(' 4x','') : i)
q.join('\n')