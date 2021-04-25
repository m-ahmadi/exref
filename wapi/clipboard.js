document.execCommand('copy|cut|paste') // operates on user-selected text

// or (document must be focused)
await navigator.clipboard.readText()

navigator.permissions.query({name: 'clipboard-write'}).then(async ({state}) => {
	if (state == 'granted') await navigator.clipboard.writeText('foo')
})