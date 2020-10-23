// pass callbacks around

function finalWork(resolve) {
	resolve(357);
}

function doSomething(resolve) {
	setTimeout(finalWork, 2000, resolve);
}

async function longTask() {
	return new Promise((resolve, reject) => {
		
		doSomething(resolve);
	});
}

longTask().then(console.log)