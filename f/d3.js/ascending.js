d3.ascending(a, b)

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
/*
return:
	a < b: -1
	a > b:  1
	else:   0

it's a comparator function for natural order
it can be used with array.sort() to arrange elements in ascending order

no comparator function passed to the sort method:
	default order is lexicographic (alphabetical), not natural
	(can lead to surprising behavior when sorting an array of numbers)
*/
