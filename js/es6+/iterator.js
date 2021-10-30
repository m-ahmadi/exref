var iterable = {
	[Symbol.iterator]() {
		return {
			i: 0,
			next() {
				if (this.i < 3) {
					return { value: this.i++, done: false };
				}
				return { value: undefined, done: true };
			}
		};
	}
};
for (let value of iterable) console.log(value) // 0 1 2

var range = {
	from: 1,
	to: 5,
	[Symbol.iterator]() {
		return {
			current: this.from,
			last:    this.to,
			next() {
				if (this.current <= this.last) {
					return { value: this.current++, done: false };
				}
				return { value: undefined, done: true };
			}
		};
	}
};
for (let num of range) console.log(num) // 1 2 3 4 5

class Foo {
	[Symbol.iterator]() {
		let count = 0
		return {
			next() {
				return { value: count++, done: count > 5 };
			}
		}
	}
}
var foo = new Foo();
for (let i of foo) console.log(i) // 1 2 3 4 5
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// async

let range = { from: 1, to: 5,
	[Symbol.asyncIterator]() {
		return {
			current: this.from,
			last:    this.to,
			async next() {
				await new Promise(resolve => setTimeout(resolve, 1000));
				if (this.current <= this.last) {
					return { done: false, value: this.current++ };
				}
				return { done: true };
			}
		};
	}
};
for await (let value of range) console.log(value);