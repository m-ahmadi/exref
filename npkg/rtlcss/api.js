var rtlcss = require('rtlcss');
var result = rtlcss.process('body { direction:ltr; }');
result // 'body { direction:rtl; }'

// directly processes css and return a string containing the processed css
output = rtlcss.process(css [, options , plugins, hooks]);
output // processed css

// you can also group all configuration settings into a single object
result = rtlcss.configure(config).process(css, postcssOptions);
result.css // processed css
result.map // source map