async function foo() {
	var res = await fetch('https://jsonplaceholder.typicode.com/users');
	return await res.text()
}
foo().then(console.log)

var res = await (await fetch(url)).text()

fetch('some/url/path').then(async res => await res.text() ).then(console.log)
fetch('some/url/path').then(res => res.text().then(console.log) )

new Promise((resolve, reject) => {
	fetch(url).then( async res => resolve(await res.text()) ).catch(err => reject(err))
});