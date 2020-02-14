function toPascalCase(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

toPascalCase('foo') // 'Foo'
toPascalCase('bar') // 'Bar'