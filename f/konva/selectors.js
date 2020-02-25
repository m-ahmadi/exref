/*
	Selectors
	
	It is very useful to use searching in elements when you are building large application.
	Konva helps you to find an element with selectors.
	You can use find() method (returns collection) or findOne() method (return first element of collection).
*/

var circle = new Konva.Circle({
	radius: 10,
	fill: 'red',
	id : 'face',
	name : 'red circle'
});
layer.add(circle);

// then try to search

// find by type
layer.find('Circle'); // all circles

// find by id
layer.findOne('#face');

// find by name (like css class)
layer.find('.red')