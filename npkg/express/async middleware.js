function asyncUtil(fn) {
	return function (...args) {
		const fnReturn = fn(...args)
		const next = args[args.length-1]
		return Promise.resolve(fnReturn).catch(next)
	};
}

express.get('/', asyncUtil(async (req, res, next) => {
	const bar = await foo.findAll();
	res.send(bar)
}))