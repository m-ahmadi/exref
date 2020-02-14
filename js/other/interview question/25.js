//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Create a function that,
	given a DOM Element on the page,
	will visit the element itself and all of its descendents (not just its immediate children).
	For each element visited, the function should pass that element to a provided callback function.

	The arguments to the function should be:
		a DOM element
		a callback function (that takes a DOM element as its argument)
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	Visiting all elements in a tree (DOM) is a classic Depth-First-Search algorithm application.
	Here’s an example solution:
*/
function traverse( p_element, p_callback ) {
	var list, i;
	p_callback(p_element);
	list = p_element.children;
	for (i=0; i < list.length; i+=1) {
		traverse( list[i],p_callback );  // recursive call
	}
}