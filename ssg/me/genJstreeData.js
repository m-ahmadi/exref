function genJstreeData(a=[], altway) {
	let r = [];
	let parent = 0;
	
	const targetProp = altway ? 'depth' : 'level';
	
	for (let i=0,len=a.length; i<len; i++) {
		const {text} = a[i];
		const id = i;
		if (i === 0) { r.push({id, parent, text}); continue; };
		
		const depth = a[i][targetProp];
		const prevDepth = a[i-1][targetProp];
		
		if (depth === prevDepth) {
			r.push({id, parent, text});
		}
		
		if (depth > prevDepth) {
			parent = i - 1;
			r.push({id, parent, text});
		}
		
		if (depth < prevDepth) {
			if (depth === 1) {
				parent = 0;
			} else {
				let j = i;
				while (a[j].depth > 1) j--;
				parent = j;
			}
			r.push({id, parent, text});
		}
		
	}
	
	if (altway) {
		r.forEach(i=> i.parent === 0 ? i.parent = '#' : 0);
		return r;
	}
	
	r.forEach(i=> {
		if (i.parent === 0) {
			i.parent = '#';
		} else {
			i.parent = a[i.parent].id;
		}
		i.id = a[i.id].id;
	});
	
	return r;
}

function genJstreeDataTest() {
	// fake data
	var depths = [1,1,1,2,2,3,4,2,1,2,2,2,1,1,1,1,1,1];
	var headings = depths.map(depth => ({depth, text:'hi'}));
	
	// gen tree
	var r = genJstreeData(headings, true);
	
	// prepare for comparison (reference data and constructed data)
	var shouldBe = [0,0,0,2,2,4,5,2,0,8,8,8,0,0,0,0,0,0].join(' ');
	var isit = r.map(i=>i.parent==='#'?0:i.parent).join(' ');
	
	// compare
	var testResult = shouldBe === isit;
	console.log('shouldBe == isit', testResult);
	return testResult;
	
	/* note on how operation is done
		1  1  1  2  2  3  4  2  1  2   2   2   1   1   1   1   1   1    depth
		0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17    depth index
		0  0  0  2  2  4  5  2  0  8   8   8   0   0   0   0   0   0    parent index
		e.g.  A  B     C           D
		
		ITEM  ITS_PARENT_IS
		A     root
		B     item at index 2
		C     item at index 4
		D     item at index 8
	*/
}
