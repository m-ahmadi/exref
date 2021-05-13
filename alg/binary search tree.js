// this implementation doesn't take into account equal value of nodes.
var tree;

function setup () {
	tree = new Tree();
	for (let i=0; i<10; i+=1) {
		tree.addValue( randInt(0, 100) );
	}
	tree.traverse();
	console.log( tree.search(10) );
}
// call setup() after Tree and Node or:
setTimeout(setup, 0);
//-----------------------------------------------------------------------------
class Tree {
	constructor() {
		this.root = undefined;
	}
	addValue(val) {
		let n = new Node(val);
		if (!this.root) {
			this.root = n;
		} else {
			this.root.addNode(n);
		}
	}
	traverse() {
		this.root.visit();
	}
	search(val) {
		return this.root.search(val);
	}
}
//-----------------------------------------------------------------------------
class Node {
	constructor(val) {
		this.value = val;
		this.left = undefined;
		this.right = undefined;
	}
	addNode(n) {
		if (n.value < this.value) {
			if (!this.left) {
				this.left = n;
			} else {
				this.left.addNode(n);
			}
		} else if (n.value > this.value) {
			if (!this.right) {
				this.right = n;
			} else {
				this.right.addNode(n);
			}
		}
	}
	visit() {
		if (this.left !== undefined) {
			this.left.visit();
		}
		console.log(this.value);
		if (this.right !== undefined) {
			this.right.visit();
		}
	}
	search(val) {
		if (this.value === val) {
			return this;
		} else if (val < this.value && this.left) {
			return this.left.search(val);
		} else if (val > this.value && this.right) {
			return this.right.search(val);
		}
	}
}
//-----------------------------------------------------------------------------
// util
function randInt(min, max) { // default between 0 and 10
	min = min ? Math.ceil(min) : 0;
	max = max ? Math.floor(max) : 10;
	return Math.floor(Math.random() * (max - min)) + min;
}