// npm i @craco/craco rtlcss sass -D

// craco.config.js
const rtlcss = require('rtlcss');

module.exports = {
  style: {
    postcss: {
      plugins: [rtlcss]
    }
  }
};

// pacakge.json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
},