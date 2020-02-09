var nodes = new vis.DataSet([
	{id: 1, label: 'Node 1'},
	{id: 2, label: 'Node 2'},
	{id: 3, label: 'Node 3'},
	{id: 4, label: 'Node 4'},
	{id: 5, label: 'Node 5'}
]);

var edges = new vis.DataSet([
	{from: 1, to: 3},
	{from: 1, to: 2},
	{from: 2, to: 4},
	{from: 2, to: 5}
]);

// update all
nodes.update([{}, {}, {}]);
// or update one
nodes.update({id: 1, label: "node 1 (updated)"});

// get by id
nodes.get(1);

// get multiple by id
nodes.get([1, 3, 4]);

// get all
nodes.get();						// returns an array
nodes.get({returnType: "Object"});  // returns an object

// Filtering:
nodes.get({
	filter: function (item) {
		return (item.group == 2);
	}
});
nodes.get({
	filter: function (item) {
		return (item.balance > 0);
	}
});