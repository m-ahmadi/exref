var fs = require('fs');
var marked = require('marked');
var {gfmHeadingId, getHeadingList} = require('marked-gfm-heading-id');
process.chdir(__dirname);
eval(fs.readFileSync('../genJstreeData.js', 'utf8'));

// read src files
ht = fs.readFileSync('./template.htm', 'utf8').trim();
md = fs.readFileSync('../input.md', 'utf8').trim();

// markdown config
marked.use({pedantic: false, gfm: true, breaks: false});

// parse markdown and get headings
headings = undefined;
mdhtml = undefined;
marked.use(gfmHeadingId({prefix: ''}), {
	hooks: {
		postprocess(html) {
			headings = getHeadingList();
			mdhtml = html;
		}
	}
});
marked.parse(md);

// get jstree data
jstreeData = genJstreeData(headings);
jstreeData.forEach(i=>i.state={opened:true});

// place jstree data inside template
out = ht
	.replace('%markdown_content%', `\n${mdhtml}\n`)
	.replace('%jstree_data%', JSON.stringify(jstreeData));

// write outfile
fs.writeFileSync('../out.preprocessy.html', out);
