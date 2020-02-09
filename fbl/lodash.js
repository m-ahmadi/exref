// load all
var _ = require('lodash')       // full build
var _ = require('lodash/core')  // core build
var fp = require('lodash/fp')   // fp build for immutable auto-curried iteratee-first data-last methods.
 
// only a method category
var array    = require('lodash/array')
var string   = require('lodash/string')
var object   = require('lodash/object')
var fpObject = require('lodash/fp/object')
 
// only a method
var isStr = require('lodash/isString')
var isNum = require('lodash/isNumber')
var isArr = require('lodash/isArray')

var at = require('lodash/at')
var curryN = require('lodash/fp/curryN')