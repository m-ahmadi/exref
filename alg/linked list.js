/*
node.next:             points to the next element
node.prev:             points to the previous element
node.prev == null:     first element (head)
node.next == null:     last element  (tail)

doubly linked
	nodes have node.next and node.prev
	two way direction
	
singly linked
	nodes have either node.next or node.prev

circular
	firstNode.prev == lastNode
	lastNode.next  == firstNode
*/

function listSearch(list, key) {
	// running time to search a list of n elements: Θ(n) worst-case
	var x = list.head;
	while (x && x.key !== key) {
		x = x.next;
	}
	return x;
}

function listInsert(list, node) {
	// this function splices node onto the front of the list.
	// running time for list of n elements: O(1)
	node.next = list.head;
	if (list.head) {
		list.head.prev = node;
	}
	list.head = node;
	node.prev = undefined;
}

function listDelete(list, node) {
	// this function splices node out of the list by updating pointers.
	// running time for list of n elements: O(1) (but Θ(n) if first call listSearch)
	if (node.prev) {
		node.prev.next = node.next;
	} else {
		list.head = node.next;
	}
	if (node.next) node.next.prev = node.prev;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// data: (list can be an array as well, but object with redundant keys is more efficient.)
var list = {
	'0': {
		key: 0,
		next: 1,
		prev: undefined
	},
	'1': {
		key: 1,
		next: 2,
		prev: 0
	},
	'2': {
		key: 2,
		next: 3,
		prev: 1
	},
	'3': {
		key: 3,
		next: 4,
		prev: 2
	},
	'4': {
		key: 4,
		next: undefined,
		prev: 3
	},
};
list.head = list[0];
list.tail = list[4]; // var t = Object.keys(list), last = list[t.length-1];