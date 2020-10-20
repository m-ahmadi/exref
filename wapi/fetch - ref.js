var responsePromise = WindowOrWorkerGlobalScope.fetch(resource=''|URL|Request, ?init={
	method:         'get|post|put|patch|delete|head',
	headers:        Headers | {k:ByteString, ...},
	body:           Blob | BufferSource | FormData | URLSearchParams | USVString | ReadableStream if method !'get|head'
	mode:           'cors|no-cors|same-origin',
	credentials:    'same-origin|omit|include' | FederatedCredential | PasswordCredential,
	cache:          'default|no-store|reload|no-cache|force-cache|only-if-cached',
	redirect:       'follow|error|manual',
	referrer:       '' | 'about:client',
	referrerPolicy: 'no-referrer|origin|same-origin|strict-origin|unsafe-url| origin-when-cross-origin | strict-origin-when-cross-origin | no-referrer-when-downgrade',
	
	integrity:      '',
	keepalive:      false,
	signal:         AbortSignal,
})

Request implements Body {
	...init
	destination:  RequestDestination
	body:         Body.body
	bodyUsed:     Body.bodyUsed
	clone()
}

Response implements Body {
	headers:     Headers
	ok:          false (status >=200 & <=299)
	redirected:  false
	status:      0
	statusText:  ''
	trailers:    await Headers
	type:        'basic|cors|...'
	url:         ''
	useFinalURL: false
	body:        Body.body
	bodyUsed:    Body.bodyUsed
	
	clone()
	error()
	redirect()
}

mixin Body {
	body:     ReadableStream
	bodyUsed: false
	
	async arrayBuffer()
	async blob()
	async formDate()
	async json()
	async text()
}

Headers {
	append(name, value)
	delete(name)
	entries()
	forEach()
	get(name)
	has(name)
	keys()
	set(name, value)
	values()
}

! = depricated