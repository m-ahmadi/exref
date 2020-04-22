window.history
window.history.forward()
window.history.back()
window.history.length
window.history.go(1)
window.history.go(-2)
window.history.go(0) // same as:
window.history.go()

document.referrer    // not history urls, but can be used to do the same thing
window.history.state // current state

history.pushState(state={}, title='', ?url=document.URL)    // won't trigger popstate or hashchange (state max 640k, title ignored, same origin url)
history.replaceState(state={}, title='', ?url=document.URL) // modifies current entry (still creates new entry in global browser history)

window.addEventListener('popstate', function (event) {
	// triggered on back/forward/backspace buttons (alt + left/right arrows in chrome), and:
	history.back()
	history.go(n)
	
	// not triggered on:
	history.pushState()
	history.replaceState()
	
	event.state // object if pushState() or replaceState() was used on entry being activated, otherwise null.
	
	console.log('location: ', document.location, ', state: ', event.state)
	
	setTimeout(() => {
		// new document state ready
	}, 0);
})

window.addEventListener('hashchange', function () {
	// triggered same as popstate but after it.
	// detects url change
})

history.pushState({page: 1}, 'title 1', '?page=1')
history.pushState({page: 2}, 'title 2', '?page=2')
history.replaceState({page: 3}, 'title 3', '?page=3')
history.pushState({foo: 'bar'}, 'page 2', 'bar.html')
history.back() // 'location: foo.com/bar?page=1, state: {page: 1}
history.back() // 'location: foo.com/bar,        state: null
history.go(2)  // 'location: foo.com/bar?page=3, state: {page: 3}