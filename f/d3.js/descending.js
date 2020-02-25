d3.descending(a, b)

function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

/*
return:
	a > b: -1
	a < b:  1
	else:   0
it's a comparator function for reverse natural order
can be used with array.sort() to arrange elements in descending order

no comparator function passed to the sort method:
	default order is lexicographic (alphabetical), not natural
	(can lead to surprising behavior when sorting an array of numbers)
*/