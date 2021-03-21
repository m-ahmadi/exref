var express = require('express')
var app = express()

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


express.json(?options)
express.raw(?options)
express.Router(?options)
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
express.urlencoded()



res.redirect(?status=+int, path='')
	