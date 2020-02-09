var jalaali = require('jalaali-js'); // npm install jalaali-js --save

jalaali.toJalaali(2016, 4, 11)           // { jy: 1395, jm: 1, jd: 23 }
jalaali.toJalaali(new Date(2016, 3, 11)) // { jy: 1395, jm: 1, jd: 23 }
jalaali.toGregorian(1395, 1, 23)         // { gy: 2016, gm: 4, gd: 11 }

jalaali.isValidJalaaliDate(1394, 12, 30) // false
jalaali.isValidJalaaliDate(1395, 12, 30) // true

jalaali.isLeapJalaaliYear(1394)          // false
jalaali.isLeapJalaaliYear(1395)          // true
	
jalaali.jalaaliMonthLength(1394, 12)     // 29
jalaali.jalaaliMonthLength(1395, 12)     // 30

// one-liner convert to umd with browserify
// mkdir tmp && cd tmp && npm i jalaali-js && where browserify && if errorlevel 1 (npm i browserify) else path=%path%;.\node_modules\.bin && echo module.exports = require('jalaali-js'); > main.js && browserify main.js -o ../jalaali.js -s jalaali && del main.js && cd ../ && rmdir tmp /s /q