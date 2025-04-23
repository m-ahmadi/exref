// undone...

m = new Map();
ms = [new Map(), new Map(), new Map(), new Map()];

class BigMap {
	#maps = [];
	#maxSize = Math.pow(2, 24);
	constructor(...args) {
		this.#maps = [new Map(...args)];
	}
	get (key) {
		for (let index=maps.length-1; index>=0; index--) {
			const map = this.#maps[index];
			const value = map.get(key);
			if (value !== undefined) {
				return value;
			}
		}
	}
	set (key, value) {
		for (const map of this.#maps) {
			if (map.has(key))
		}
		
		const map = this.#maps.at[-1];
		if (map.size === this.#maxSize) {
			this.#maps.push(new Map());
			return this.set(key, value);
		} else {
			return map.set(key, value);
		}
	}
}
