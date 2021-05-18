// asumption: ids are unique in the tree.

searchWithTrail(nestedData, 9)    // { found: {id: 9}, path: "3/5/8/9" } ( for using the sample data structre: prev.push(obj.id) )
searchWithoutTrail(nestedData, 9) // {id: 9}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// number of iterations: nested vs linked list style
// number of iterations necessary to find an item in nested array and linked list style are similar.
var c;

c=0
searchWithTrail(nestedData, 9) // c: 13
c=0
searchWithTrail(linkedlistData, 9) // c: 10
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// with trailing:
function searchWithTrail(arr, id, prev=[]) {
	c+=1;
	let found;
	const len = arr.length;
	for (let i=0; i<len; i+=1) {
		if (found) break;
		c+=1;
		const obj = arr[i];
		if (obj.id === id) {
			found = obj;
			// prev.push(obj.text);
			prev.push(obj.id);
			break;
		}
		const children = obj.children;
		if (children) {
			// prev.push(obj.text);
			prev.push(obj.id);
			found = searchWithTrail(children, id, prev);
		}
	}
	if (found && found.id) { // this check is very assumptive based on the data structure.
		return { found, path: prev.join("/") };
	} else {
		prev.pop();
		return found;
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// using for loop:
// works fine.
function searchWithoutTrail(arr, id) {
	c+=1;
	let found;
	const len = arr.length;
	for (let i=0; i<len; i+=1) {
		if (found) break;
		c+=1;
		const obj = arr[i];
		if (obj.id === id) {
			found = obj;
			break;
		}
		const children = obj.children;
		if (children) {
			found = searchWithoutTrail(children, id);
		}
	}
	return found;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// using arr.find method:
// it's not working correctly.
// it returns the top-most parent that contains the object searched for. (target.parent.parent.parent)
function search(arr, id) {
	return arr.find(obj => {
		const children = obj.children;
		if (obj.id === id) {
			return obj;
		} else if (children) {
			return search(children, id);
		}
	});
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// data
var nestedData = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3, children: [
		{ id: 4 },
		{ id: 5, children: [
			{ id: 6 },
			{ id: 7 },
			{ id: 8, children: [
				{ id: 9 },
				{ id: 10 }
			]},
		]},
		{ id: 11 },
	]},
	{ id: 12 },
	{ id: 13 },
	{ id: 14 },
	{ id: 15, children: [
		{ id: 16 },
		{ id: 17 }
	]}
];

var linkedlistData = [
	{ id: 1,  parent: "#" },
	{ id: 2,  parent: "#" },
	{ id: 3,  parent: "#" },
	{ id: 4,  parent: 3   },
	{ id: 5,  parent: 3   },
	{ id: 6,  parent: 5   },
	{ id: 7,  parent: 5   },
	{ id: 8,  parent: 5   },
	{ id: 9,  parent: 8   },
	{ id: 10, parent: 8   },
	{ id: 11, parent: 3   },
	{ id: 12, parent: "#" },
	{ id: 13, parent: "#" },
	{ id: 14, parent: "#" },
	{ id: 15, parent: "#" },
	{ id: 16, parent: 15  },
	{ id: 17, parent: 15  }
];