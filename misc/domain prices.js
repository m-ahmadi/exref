// https://www.iranserver.com/domains/tld

a = [...document.querySelectorAll('#dpanels_pro .col-md-6 .col-4.ltr')].map(i=>i.innerText)
b = [...document.querySelectorAll('#dpanels_pro .col-md-6 .col-4.secondary')].map(i=>i.innerText).filter((v,i)=>i%2===0)
c = [...document.querySelectorAll('#dpanels_pro .col-md-6 .col-4.secondary')].map(i=>i.innerText).filter((v,i)=>i%2!==0)
csv = a.map((v,i) => [v, '"'+b[i]+'"', '"'+c[i]+'"'] ).map(i=>i.join(',')).join('\n')


a = [...document.querySelectorAll('#dpanels .col-6.ltr')].map(i=>i.innerText)
b = [...document.querySelectorAll('#dpanels .col-6.secondary')].map(i=>i.innerText)
csv = a.map((v,i) => [v, '"'+b[i]+'"'] ).map(i=>i.join(',')).join('\n')