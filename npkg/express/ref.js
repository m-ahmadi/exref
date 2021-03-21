var express = require('express')

var app = express()

var router = express.Router(?options={
	caseSensitive: false,
	mergeParams:   false,
	strict:        false
})

express.json(?options={
	inflate:  true,
	limit:    '100kb' | 0,
	reviver:  null | ()=>, // JSON.parse(, reviver)
	strict:   true,
	type:     'application/json' | '' | ['',...] | (req)=>true,
	verify:   undefined | (req, res, buf, encoding)=>,
})
express.raw(?options={
	inflate:  ...,
	limit:    ...,
	type:     'application/octet-stream' | ...,
	verify:   ...,
})
express.text(?options={
	defaultCharset: 'utf-8',
	inflate:        ...,
	limit:          ...,
	type:           'text/plain' | ...,
	verify:         ...,
})
express.urlencoded(?options={
	extended:       true,
	inflate:        ...,
	limit:          ...,
	parameterLimit: 1000,
	type:           'application/x-www-form-urlencoded' | ...
	verify:         ...,
})
express.static(root='', ?options={
	dotfiles:     'ignore|allow|deny',
	etag:         '',
	extensions:   '' | ['',...],
	fallthrough:  true,
	immutable:    false,
	index:        'index.html' | false,
	lastModified: true,
	maxAge:       0,
	redirect:     true,
	setHeaders:   (res, path, stat)=>,
})

app.settings: {
	'case sensitive routing': undefined | true,
	'env':                    process.env.NODE_ENV | 'development|production',
	'etag':                   'weak|strong' | true | (body, encoding)=>,
	'jsonp callback name':    'callback',
	'json escape':            undefined | true,
	'json replacer':          undefined | JSON.stringify(, replacer),
	'json spaces':            undefined | JSON.stringify(, , space),
	'query parser':           'extended|simple' | false | (str)=>{}, // qs
	'strict routing':         undefined | true,
	'subdomain offset':       2,
	'trust proxy':            false | 'str | str,str,...' | ['',...] | 0 | (ip)=>boolean, // proxy-addr
	'views':                  process.cwd() + '/views' | '' | ['',...],
	'view engine':            undefined | ''
	'x-powered-by':           true,
}

app.locals             {}
app.mountpath          ''

app.all()
app.disable(name='')
app.disabled(name=''): boolean
app.enable()
app.enabled()        : boolean
app.engine(ext='', callback)

app.get(name=''): app.settings[name]
app.get|post|put|delete|...METHOD(path='' | 'pattern' | RegExp | [], callback=(req,res,next)=>, ?...callbacks)
	path=`pattern:
		? + * ()        regex
		- .             literal (no regex)
		[()]            special escaper for $. eg: /([\$])book
		:               param definer
		[A-Za-z0-9_]    param name allowed chars
		:param?         optional param
		\               \ escaper. eg: \\d+
		{0,}            use instead of * (v4 issue fix)`


app.listen === http.Server.listen === net.Server.listen
app.listen(path='', ?callback)
app.listen(?port=0, ?host='', ?backlog=511, ?callback)
app.on('mount', callback=(parent)=>)
app.use(path='/', callback=()=> | [], ?...callbacks)



res.redirect(?status=+int, path='')
res.render(view='rel|abs/file(.ext|view engine)', ?locals={}, ?callback=(err, html)=>)