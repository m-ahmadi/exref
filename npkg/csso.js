var csso = require('csso');
 
var minifiedCss = csso.minify('.test { color: #ff0000; }').css;
 
console.log(minifiedCss);
// .test{color:red}