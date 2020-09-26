function reverseStr(str) {
	const len = str.length - 1;
	let reversed = '';
	for (let i=len; i>=0; i-=1) reversed += str[i];
	return reversed;
}

[...'salam'].reverse().join('')