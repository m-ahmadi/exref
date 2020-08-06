const ti = require('technicalindicators');

ti.sma({period: 5, values: [1,2,3,4,5,6,7,8,9], reversedInput: true});
ti.SMA.calculate({period: 5, values: [1,2,3,4,5,6,7,8,9]});

/* browser:
cdn
	https://cdn.jsdelivr.net/npm/technicalindicators/
	https://cdn.jsdelivr.net/npm/technicalindicators/dist/browser.es6.js
	https://unpkg.com/browse/technicalindicators@latest/

local
	node_modules/technicalindicators/dist/browser.es6.js
	mkdir tmp && cd tmp && npm i technicalindicators && copy /b node_modules\technicalindicators\dist\browser.es6.js ..\technicalindicators.min.js && cd ../ && rmdir tmp /s /q
*/

// all fns are defined on window
sma({period: 5, values: [1,2,3,4,5,6,7,8,9]}) // [3, 4, 5, 6, 7]
rsa()