class Queue {
	constructor() {
		this.items = [];
	}
	
	enqueue(e) {
		this.items.push(e);
	}
	
	dequeue() {
		return this.items.shift();
	}
	
	isEmpty() {
		return this.items.length == 0;
	}
	
	peek() {
		return !this.isEmpty() ? this.items[0] : undefined;
	}
	
	size() {
		return this.items.length;
	}
}