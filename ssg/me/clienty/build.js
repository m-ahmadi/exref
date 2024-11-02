var fs = require('fs');
process.chdir(__dirname);

// read src files
ht = fs.readFileSync('./template.htm', 'utf8').trim();
md = fs.readFileSync('../input.md', 'utf8').trim();

// place raw markdown inside template
out = ht.replace('%markdown_content%', `\n${md}\n`);

fs.writeFileSync('../out.clienty.html', out);
