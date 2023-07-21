var str = document.cookie;

// CookieStore (experimental)
// https://developer.mozilla.org/en-US/docs/Web/API/CookieStore
cookieStore.delete()
cookieStore.get(name|options)
cookieStore.set(name|options, value)
await cookieStore.getAll()

// old way (deprecated or something cuz it's gone now)
Cookies.remove('user')
Cookies.get('user')
Cookies.set('user', d)
