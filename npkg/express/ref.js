var express = require('express')
var app = express()


express.json(?options={
	inflate:  true,
	limit:    '100kb' | 0,
	reviver:  null | ()=>, // JSON.parse(, reviver)
	strict:   true,
	type:     'application/json' | '' | ['',...] | (req)=>true,
	verify:   undefined | (req,res,buf,encoding)=>,
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
app.disable(name='')
app.disabled(name=''): boolean
app.enable()
app.enabled()        : boolean
app.engine(ext='', callback)
app.get(name=''): app.settings[name]
app.get|post|put|delete|...METHOD|all(path='' | 'pattern' | RegExp | [], callback=(req,res,next)=>, ?...callbacks)
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
app.param(?name='' | ['',...], callback=(req,res,next,value,name)=>) // fn called once per request-response cyle, even if param is mathed in multiple routes
app.path(): ''
app.render(view='', ?locals={}, callback=(err,html)=>)
app.route(path=''): Router
app.set(name='', value)
app.use(?path='/', callback=()=> | [], ?...callbacks)
app.on('mount', callback=(parent)=>)


var router = express.Router(?options={
	caseSensitive: false,
	mergeParams:   false,
	strict:        false
})
router.METHOD|all(...)
router.param(name='', callback)
router.route(...): Router
router.use(...)


req.app
req.baseUrl
req.body
req.cookies
req.fresh
req.hostname
req.ip
req.ips
req.method
req.originalUrl
req.params
req.path
req.protocol
req.query
req.route
req.secure
req.signedCookies
req.stale
req.subdomains
req.xhr
req.accepts(types)
req.acceptsCharsets(charset, ?...rest)
req.acceptsEncodings(encoding, ?...rest)
req.acceptsLanguages(lang, ?...rest)
req.get(field)
req.is(type)
req.param(name, ?defaultValue) // depricated
req.range(size, ?options)


res.app
res.headersSent
res.locals
res.append(field, ?value)
res.attachment(?filename)
res.cookie(name, value, ?options)
res.clearCookie(name, ?options)
res.download(path, ?filename, ?options, ?fn)
res.end(?data, ?encoding)
res.format(object)
res.get(field)
res.json(?body)
res.jsonp(?body)
res.links(links)
res.location(path)
res.redirect(?status=+int, path='')
res.render(view='rel|abs/file(.ext|view engine)', ?locals={}, ?callback=(err, html)=>)
res.send(?body)
res.sendFile(path, ?options, ?fn)
res.sendStatus(statusCode)
res.set(field, ?value)
res.status(code)
res.type(type)
res.vary(field)