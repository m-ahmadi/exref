// install
// https://cdn.jsdelivr.net/npm/marked/
'https://cdn.jsdelivr.net/npm/marked@9.1.5/marked.min.js' // browser global
const { marked } = require('marked');                     // node

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
marked.parse(e,t)
marked.parseInline(n,s)
marked.parser(e,t)
marked.setOptions(e)
marked.use(...e)
marked.walkTokens(e,t)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

// basic
marked.parse('# Marked in browser\n\nRendered by **marked**.'); // '<h1>Marked in browser</h1>\n<p>Rendered by <strong>marked</strong>.</p>\n'


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
