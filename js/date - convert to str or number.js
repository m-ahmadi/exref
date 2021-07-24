let d = new Date();

(d.getFullYear()*10000) + ( (d.getMonth()+1)*100 ) + d.getDate() + '' // 20210724

[d.getFullYear(), d.getMonth()+1, d.getDate()].map(i=>(i=''+i, i.length>1?i:'0'+i)).join('-'); // '2021-07-24'