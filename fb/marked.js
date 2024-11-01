// install
// https://cdn.jsdelivr.net/npm/marked/
'https://cdn.jsdelivr.net/npm/marked@9.1.5/marked.min.js' // browser global
const { marked } = require('marked');                     // node

// docs
// https://marked.js.org

// api
marked.Hooks
marked.Lexer
marked.Marked
marked.Parser
marked.Renderer
marked.TextRenderer
marked.Tokenizer
marked.defaults: {
	async:      false,
	breaks:     false,
	extensions: null,
	gfm:        true,
	hooks:      null,
	pedantic:   false,
	renderer:   null,
	silent:     false,
	tokenizer:  null,
	walkTokens: null,
}
marked.getDefaults()
marked.lexer(e,t)
marked.marked(e,t)
marked.options(e)
marked.parse(e,t) // https://marked.js.org/using_advanced#options
marked.parseInline(n,s)
marked.parser(e,t)
marked.setOptions(e)
marked.use(...e)
marked.walkTokens(e,t)


// extensions
// https://marked.js.org/using_advanced#extensions

// marked-gfm-heading-id
'https://cdn.jsdelivr.net/npm/marked-gfm-heading-id@4.1.0/lib/index.umd.js'
markedGfmHeadingId.gfmHeadingId(?options={prefix: '', globalSlugs: false});
markedGfmHeadingId.getHeadingList();
markedGfmHeadingId.resetHeadings();
markedGfmHeadingId.unescape();

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic
marked.parse('# Marked in browser\n\nRendered by **marked**.'); // '<h1>Marked in browser</h1>\n<p>Rendered by <strong>marked</strong>.</p>\n'


// github-flavored markdown
marked.use({pedantic: false, gfm: true});
marked.parse('# hello');


// get text and depth sequence of all headings
// https://marked.js.org/using_pro#lexer
s = `
# h1

## h2

### h3

# h11
`;
tokens = marked.lexer(s);
headings = tokens.filter(i => i.type === 'heading');
depths = headings.map(i => i.depth); // [1, 2, 3, 1]
texts = headings.map(i => i.text);   // ['h1', 'h2', 'h3', 'h11']


// generate id attr for headings
var {gfmHeadingId}  = markedGfmHeadingId;
marked.use(gfmHeadingId({prefix: 'my-prefix-'}));
marked("# heading"); // '<h1 id="my-prefix-heading">heading</h1>'


// generate table-of-contents
var {gfmHeadingId, getHeadingList}  = markedGfmHeadingId;
marked.use(gfmHeadingId({prefix: 'my-prefix-'}), {
	hooks: {
		postprocess(html) {
			const headings = getHeadingList();
			return `
<ul id="table-of-contents">
	${headings.map(({id, raw, level}) => `<li><a href="#${id}" class="h${level}">${raw}</a></li>`)}
</ul>
${html}`;
		}
	}
});
marked("# heading"); /*
<ul id="table-of-contents">
	<li><a href="#my-prefix-heading" class="h1">heading</a></li>
</ul>
<h1 id="my-prefix-heading">heading</h1>
*/
