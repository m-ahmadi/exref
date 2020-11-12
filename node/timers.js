var timeout   = setTimeout(callback, ?delay, ...?args)
var timeout   = setInterval(callback, ?delay, ...?args)
var immediate = setImmediate(callback, ...?args)

clearTimeout(timeout)
clearInterval(timeout)
clearImmediate(immediate)

timeout.hasRef()
timeout.ref()
timeout.refresh()
timeout.unref()