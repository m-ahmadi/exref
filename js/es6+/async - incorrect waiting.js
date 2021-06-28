// this does not waits properly, but it might seem it is

async function foo(sleep=0) {
	var arr = [];

	for (const i of [...Array(10).keys()]) {
		// arr.push((await (await fetch('https://jsonplaceholder.typicode.com/users/'+(i+1))).json()).name); // correct way
		
		fetch('https://jsonplaceholder.typicode.com/users/'+(i+1)).then(async r => {
			var user = await r.json();
			arr.push(user.name);
		});
		
		await new Promise(r => setTimeout(r, sleep)); // might seem correct because of this sleep call
	}
	
	return arr;
}
	
(async () => {
	
	console.log( await foo(5) );  // []
	
	console.log( await foo(10) ); // []
	
	console.log( await foo(20) ); // ["Ervin Howell", "Leanne Graham"]
	
	console.log( await foo(30) ); // ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist"]
	
})();