class Node {
	constructor(key) {
		this.key = key;
		this.parent = null;
		this.children = {};
		this.end = false;
	}
	
	getWord() {
		let output = [];
		let node = this;
		
		while (node !== null) {
			output.unshift(node.key);
			node = node.parent;
		}
		
		return output.join('');
	}
	
	insert(word='') {
		let node = this.root;
		
		for (let i=0; i<word.length; i++) {
			let letter = word[i];
			if (!node.children[letter]) {
				node.children[letter] = new Node(letter);
				node.children[letter].parent = node;
			}
			
			node = node.children[letter];
			
			if (i === word.length-1) {
				node.end = true;
			}
		}
	}

	contains(word='') {
		let node = this.root;
		
		for (let letter of word) {
			if (node.children[letter]) {
				node = node.children[letter];
			} else {
				return false;
			}
		}
		
		return node.end;
	}

	find(prefix) {
		let node = this.root;
		let output = [];
		
		for(let i=0; i<prefix.length; i++) {
			if (node.children[prefix[i]]) {
				node = node.children[prefix[i]];
			} else {
				return output;
			}
		}
		
		findAllWords(node, output);
		return output;
	}
}
function findAllWords(node, arr) {
  if (node.end) {
    arr.unshift(node.getWord());
  }
	Object.keys(node.children).forEach(k =>
		findAllWords(node.children[k], arr)
	);
}

class Trie extends Node {
	constructor() {
		super();
		this.root = new Node(null);
	}
}

let trie = new Trie();
trie.insert('hello')
trie.insert('helium')
trie.contains('helium')  // true
trie.contains('kickass') // false
trie.find('hel')         // ['helium', 'hello']
trie.find('hell')        // ['hello']