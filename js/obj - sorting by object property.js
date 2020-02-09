var list = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};

var sortable = [];
for (var k in maxSpeed) {
    sortable.push([k, list[vehicle]]);
}
sortable.sort(function(a, b) {
    return a[1] - b[1];
});

// another way
var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
keysSorted = Object.keys(list).sort(function (a,b) {
	return list[a] - list[b]
})