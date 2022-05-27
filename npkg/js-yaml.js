const yaml = require('js-yaml');
const fs = require('fs');

let text = fs.readFileSync('file.yml', 'utf8');
let doc = yaml.load(text);