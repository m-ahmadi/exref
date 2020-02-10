// load all
var _ = require('lodash')       // full build
var _ = require('lodash/core')  // core build
var fp = require('lodash/fp')   // fp build for immutable auto-curried iteratee-first data-last methods.
 
// only a method category
var array    = require('lodash/array')
var str      = require('lodash/string')
var object   = require('lodash/object')
var func     = require('lodash/function')
var fpObject = require('lodash/fp/object')
 
// only a method
var isStr = require('lodash/isString')
var isNum = require('lodash/isNumber')
var isObject = require('lodash/isobject')
var debounce = require('lodash/debounce')

var at = require('lodash/at')
var curryN = require('lodash/fp/curryN')

// separate packages
var isObject = require('lodash.isobject')
var debounce = require('lodash.debounce')

// one-liner convert (assuming -g browserify)
// mkdir tmp && cd tmp && npm i lodash.debounce && path=%path%;.\node_modules\.bin && echo module.exports = require('lodash.debounce'); > x.js && browserify x.js -o ../lodash.debounce.js -s _debounce && del x.js && cd ../ && rmdir tmp /s /q
