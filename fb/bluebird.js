var Promise = require("bluebird");   // npm install bluebird --save
import * as Promise from "bluebird"; // es6
import { Promise } from "bluebird";  // if prev line not working

// browser
// cdn.jsdelivr.net/npm/bluebird@3.5.5/js/browser/bluebird.js
// cdn.jsdelivr.net/npm/bluebird@3.5.5/js/browser/bluebird.min.js

var fs = require("fs");
Promise.promisifyAll(fs);
// now you can use fs as if it was designed to use bluebird promises from the beginning

fs.readFileAsync("file.js", "utf8").then(...)

// other examples:
// mysql
// library's classes are not properties of the main export,
// so we require and promisifyAll them manually.
Promise.promisifyAll( require("mysql/lib/Connection").prototype );
Promise.promisifyAll( require("mysql/lib/Pool").prototype );

// rimraf
// the module isn't promisified but the function returned is:
var rimrafAsync = Promise.promisify(require("rimraf"));


Promise.promisifyAll(require("request"));    // request
// use request.getAsync(...) not request(..), it will not return a promise

Promise.promisifyAll(require("mkdirp"));     // mkdir
// use mkdirp.mkdirpAsync not mkdirp(..), it will not return a promise

Promise.promisifyAll(require("redis"));      // redis
Promise.promisifyAll(require("mongodb"));    // mongodb
Promise.promisifyAll(require("mongoose"));   // mongoose
Promise.promisifyAll(require("winston"));    // winston
Promise.promisifyAll(require("xml2js"));     // xml2js
Promise.promisifyAll(require("jsdom"));      // jsdom
Promise.promisifyAll(require("fs-extra"));   // fs-extra
Promise.promisifyAll(require("prompt"));     // prompt
Promise.promisifyAll(require("nodemailer")); // nodemailer
Promise.promisifyAll(require("ncp"));        // ncp
Promise.promisifyAll(require("pg"));         // pg