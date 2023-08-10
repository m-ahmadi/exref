let d = new Date(2014,0,1);

d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate() + '' // '20140101'

[d.getFullYear(), d.getMonth()+1, d.getDate()].map(i=>i<10?'0'+i:i).join('-')                  // '2014-01-01'
[d.getFullYear(), d.getMonth()+1, d.getDate()].map(i=>(i=''+i, i.length>1?i:'0'+i)).join('-'); // '2014-01-01'
