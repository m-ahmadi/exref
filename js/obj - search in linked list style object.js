/** Note */
// using an object with the same keys as ids is orders of magnitude faster than using an array
var c;
c = 0
searchInObject(objData, 11) // c: 6
c = 0
searchInArray(arrData, 11)  // c: 36


function searchInObject(obj, id, path=[]) {
	c+=1;
	let target = obj[id];
	// path.push(target.text);
	path.push(target.id);
	if (target.parent === '#') {
		return path.reverse().join('/');
	} else {
		return searchInObject(obj, target.parent, path)
	}
}

function searchInArray(arr, id, path=[]) {
	c+=1;
	const target = arr.filter(i => {
		c+=1;
		return i.id === id ? i : undefined;
	})[0];
	// path.push(target.text);
	path.push(target.id);
	if (target.parent === '#') {
		return path.reverse().join('/');
	} else {
		return searchInArray(arr, target.parent, path)
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// data
var objData = {
	'1':  { id: 1,  parent: '#' },
	'2':  { id: 2,  parent: '#' },
	'3':  { id: 3,  parent: '#' },
	'4':  { id: 4,  parent: 3   },
	'5':  { id: 5,  parent: 3   },
	'6':  { id: 6,  parent: 5   },
	'7':  { id: 7,  parent: 5   },
	'8':  { id: 8,  parent: 5   },
	'9':  { id: 9,  parent: 8   },
	'10': { id: 10, parent: 8   },
	'11': { id: 11, parent: 3   },
	'12': { id: 12, parent: '#' },
	'13': { id: 13, parent: '#' },
	'14': { id: 14, parent: '#' },
	'15': { id: 15, parent: '#' },
	'16': { id: 16, parent: 15  },
	'17': { id: 17, parent: 15  }
};

var arrData = [
	{ id: 1,  parent: '#' },
	{ id: 2,  parent: '#' },
	{ id: 3,  parent: '#' },
	{ id: 4,  parent: 3   },
	{ id: 5,  parent: 3   },
	{ id: 6,  parent: 5   },
	{ id: 7,  parent: 5   },
	{ id: 8,  parent: 5   },
	{ id: 9,  parent: 8   },
	{ id: 10, parent: 8   },
	{ id: 11, parent: 3   },
	{ id: 12, parent: '#' },
	{ id: 13, parent: '#' },
	{ id: 14, parent: '#' },
	{ id: 15, parent: '#' },
	{ id: 16, parent: 15  },
	{ id: 17, parent: 15  }
];

var nested = [
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