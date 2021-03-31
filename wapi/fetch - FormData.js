// x-www-form-urlencoded
var fd = new FormData()
var data = {'name':'john', 'age':'46'}
Object.keys(data).forEach(k => fd.append(k, data[k]))
var res = await (await fetch('https://httpbin.org/post', {method:'POST', body:fd})).json()
console.log(res.form)


// upload single file: <input type="file" />
var fd = new FormData()
var fileField = document.querySelector('input[type="file"]')
fd.append('username', 'abc123')
fd.append('avatar', fileField.files[0])
await (await fetch('https://example.com/profile/avatar', {method:'PUT', body:fd})).json()


// upload multiple files: <input type="file" multiple />
var fd = new FormData()
var photos = document.querySelector('input[type="file"][multiple]')
fd.append('title', 'My Vegas Vacation')
photos.files.forEach(i => fd.append('photos', i))
await (await fetch('https://example.com/posts', {method:'POST', body:fd})).json()